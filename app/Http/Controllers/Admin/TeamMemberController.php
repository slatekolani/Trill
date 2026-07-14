<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index()
    {
        $members = TeamMember::orderBy('sort_order')->get()->map(fn ($m) => [
            'id'         => $m->uuid,
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
                'id'             => $teamMember->uuid,
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

        // If a new file was uploaded, delete the old locally stored file.
        $newAvatar = $this->resolveAvatar($request, $teamMember->avatar_url);
        if ($request->hasFile('avatar_file')) {
            $this->deleteStoredImage($teamMember->avatar_url);
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
        $this->deleteStoredImage($teamMember->avatar_url);

        $teamMember->delete();
        return redirect()->route('admin.team.index')->with('success', 'Team member removed.');
    }

    /**
     * Resolve the final avatar value: uploaded file takes priority over URL field.
     */
    private function resolveAvatar(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('avatar_file')) {
            return $this->storePublicUpload($request, 'avatar_file', 'avatars');
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

    private function storePublicUpload(Request $request, string $field, string $folder): string
    {
        $file = $request->file($field);
        $directory = public_path('uploads/' . $folder);

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }

        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $file->move($directory, $filename);

        return '/uploads/' . $folder . '/' . $filename;
    }

    private function deleteStoredImage(?string $url): void
    {
        if (! $url) {
            return;
        }

        if (str_starts_with($url, '/uploads/')) {
            $path = public_path(ltrim($url, '/'));
            if (is_file($path)) {
                unlink($path);
            }
        }

        if (str_starts_with($url, '/storage/')) {
            $path = storage_path('app/public/' . Str::after($url, '/storage/'));
            if (is_file($path)) {
                unlink($path);
            }
        }
    }
}
