<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index()
    {
        $members = TeamMember::orderBy('sort_order')->get()->map(fn ($m) => [
            'id'         => $m->id,
            'name'       => $m->name,
            'role'       => $m->role,
            'initials'   => $m->initials,
            'email'      => $m->email,
            'is_active'  => $m->is_active,
            'sort_order' => $m->sort_order,
        ]);

        return Inertia::render('Admin/Team/Index', compact('members'));
    }

    public function create()
    {
        return Inertia::render('Admin/Team/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'           => ['required', 'string', 'max:255'],
            'role'           => ['required', 'string', 'max:255'],
            'bio'            => ['required', 'string'],
            'avatar_url'     => ['nullable', 'string', 'max:500'],
            'avatar_file'    => ['nullable', 'image', 'max:2048'],
            'initials'       => ['required', 'string', 'max:5'],
            'email'          => ['nullable', 'email', 'max:255'],
            'languages'      => ['nullable', 'string'],
            'practice_areas' => ['nullable', 'string'],
            'education'      => ['nullable', 'string'],
            'memberships'    => ['nullable', 'string'],
            'sort_order'     => ['nullable', 'integer'],
            'is_active'      => ['boolean'],
        ]);

        TeamMember::create([
            'name'           => $validated['name'],
            'role'           => $validated['role'],
            'bio'            => $validated['bio'],
            'avatar_url'     => $this->resolveAvatar($request),
            'initials'       => strtoupper($validated['initials']),
            'email'          => $validated['email'] ?? null,
            'languages'      => $this->parseLines($validated['languages'] ?? ''),
            'practice_areas' => $this->parseLines($validated['practice_areas'] ?? ''),
            'education'      => $this->parseEducation($validated['education'] ?? ''),
            'memberships'    => $this->parseLines($validated['memberships'] ?? ''),
            'sort_order'     => $validated['sort_order'] ?? 0,
            'is_active'      => $validated['is_active'] ?? true,
        ]);

        return redirect()->route('admin.team.index')
            ->with('success', 'Team member added successfully.');
    }

    public function edit(TeamMember $teamMember)
    {
        return Inertia::render('Admin/Team/Edit', [
            'member' => [
                'id'             => $teamMember->id,
                'name'           => $teamMember->name,
                'role'           => $teamMember->role,
                'bio'            => $teamMember->bio,
                'avatar_url'     => $teamMember->avatar_url ?? '',
                'initials'       => $teamMember->initials,
                'email'          => $teamMember->email ?? '',
                'languages'      => implode("\n", $teamMember->languages ?? []),
                'practice_areas' => implode("\n", $teamMember->practice_areas ?? []),
                'education'      => $this->serializeEducation($teamMember->education ?? []),
                'memberships'    => implode("\n", $teamMember->memberships ?? []),
                'sort_order'     => $teamMember->sort_order,
                'is_active'      => $teamMember->is_active,
            ],
        ]);
    }

    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name'           => ['required', 'string', 'max:255'],
            'role'           => ['required', 'string', 'max:255'],
            'bio'            => ['required', 'string'],
            'avatar_url'     => ['nullable', 'string', 'max:500'],
            'avatar_file'    => ['nullable', 'image', 'max:2048'],
            'initials'       => ['required', 'string', 'max:5'],
            'email'          => ['nullable', 'email', 'max:255'],
            'languages'      => ['nullable', 'string'],
            'practice_areas' => ['nullable', 'string'],
            'education'      => ['nullable', 'string'],
            'memberships'    => ['nullable', 'string'],
            'sort_order'     => ['nullable', 'integer'],
            'is_active'      => ['boolean'],
        ]);

        // If a new file was uploaded, delete the old stored file
        $newAvatar = $this->resolveAvatar($request, $teamMember->avatar_url);
        if ($request->hasFile('avatar_file') && $teamMember->avatar_url && str_starts_with($teamMember->avatar_url, '/storage/')) {
            $oldPath = str_replace('/storage/', 'public/', $teamMember->avatar_url);
            Storage::delete($oldPath);
        }

        $teamMember->update([
            'name'           => $validated['name'],
            'role'           => $validated['role'],
            'bio'            => $validated['bio'],
            'avatar_url'     => $newAvatar,
            'initials'       => strtoupper($validated['initials']),
            'email'          => $validated['email'] ?? null,
            'languages'      => $this->parseLines($validated['languages'] ?? ''),
            'practice_areas' => $this->parseLines($validated['practice_areas'] ?? ''),
            'education'      => $this->parseEducation($validated['education'] ?? ''),
            'memberships'    => $this->parseLines($validated['memberships'] ?? ''),
            'sort_order'     => $validated['sort_order'] ?? 0,
            'is_active'      => $validated['is_active'] ?? true,
        ]);

        return redirect()->route('admin.team.index')
            ->with('success', 'Team member updated.');
    }

    public function destroy(TeamMember $teamMember)
    {
        // Clean up stored file if applicable
        if ($teamMember->avatar_url && str_starts_with($teamMember->avatar_url, '/storage/')) {
            $path = str_replace('/storage/', 'public/', $teamMember->avatar_url);
            Storage::delete($path);
        }

        $teamMember->delete();
        return redirect()->route('admin.team.index')->with('success', 'Team member removed.');
    }

    /**
     * Resolve the final avatar value: uploaded file takes priority over URL field.
     */
    private function resolveAvatar(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('avatar_file')) {
            $path = $request->file('avatar_file')->store('avatars', 'public');
            return '/storage/' . $path;
        }

        $url = trim($request->input('avatar_url', ''));
        return $url !== '' ? $url : $existing;
    }

    private function parseLines(string $text): array
    {
        return array_values(array_filter(array_map('trim', explode("\n", $text))));
    }

    private function parseEducation(string $text): array
    {
        return array_values(array_filter(array_map(function ($line) {
            $parts = array_map('trim', explode('|', $line));
            return count($parts) >= 2 ? ['degree' => $parts[0], 'institution' => $parts[1]] : null;
        }, array_filter(array_map('trim', explode("\n", $text))))));
    }

    private function serializeEducation(array $edu): string
    {
        return implode("\n", array_map(
            fn ($e) => ($e['degree'] ?? '') . ' | ' . ($e['institution'] ?? ''),
            $edu
        ));
    }
}
