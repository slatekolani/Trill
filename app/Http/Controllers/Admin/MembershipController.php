<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MembershipController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Memberships/Index', [
            'memberships' => Membership::orderBy('sort_order')->get()->map(fn ($membership) => [
                'id'          => $membership->uuid,
                'name'        => $membership->name,
                'acronym'     => $membership->acronym,
                'description' => $membership->description,
                'url'         => $membership->url,
                'logo_url'    => $membership->logo_url,
                'sort_order'  => $membership->sort_order,
                'is_active'   => $membership->is_active,
            ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Memberships/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validatedMembership($request);
        $validated['logo_url'] = $this->resolveLogo($request);
        $validated['is_active'] = $validated['is_active'] ?? true;

        Membership::create($validated);

        return redirect()->route('admin.memberships.index')->with('success', 'Membership created.');
    }

    public function edit(Membership $membership)
    {
        return Inertia::render('Admin/Memberships/Edit', [
            'membership' => [
                'id'          => $membership->uuid,
                'name'        => $membership->name,
                'acronym'     => $membership->acronym,
                'description' => $membership->description,
                'url'         => $membership->url,
                'logo_url'    => $membership->logo_url,
                'sort_order'  => $membership->sort_order,
                'is_active'   => $membership->is_active,
            ],
        ]);
    }

    public function update(Request $request, Membership $membership)
    {
        $validated = $this->validatedMembership($request);
        $validated['logo_url'] = $this->resolveLogo($request, $membership->logo_url);
        $validated['is_active'] = $validated['is_active'] ?? false;

        if ($request->hasFile('logo_file')) {
            $this->deleteStoredImage($membership->logo_url);
        }

        $membership->update($validated);

        return redirect()->route('admin.memberships.index')->with('success', 'Membership updated.');
    }

    public function destroy(Membership $membership)
    {
        $this->deleteStoredImage($membership->logo_url);
        $membership->delete();

        return redirect()->route('admin.memberships.index')->with('success', 'Membership removed.');
    }

    private function validatedMembership(Request $request): array
    {
        return $request->validate([
            'name'        => ['required', 'string', 'max:255'],
            'acronym'     => ['nullable', 'string', 'max:50'],
            'description' => ['nullable', 'string'],
            'url'         => ['nullable', 'url', 'max:1000'],
            'logo_url'    => ['nullable', 'string', 'max:1000'],
            'logo_file'   => ['nullable', 'image', 'max:2048'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);
    }

    private function resolveLogo(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('logo_file')) {
            return $this->storePublicUpload($request, 'logo_file', 'memberships');
        }

        $url = trim($request->input('logo_url', ''));
        return $url !== '' ? $url : $existing;
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
        if (! $url || ! str_starts_with($url, '/uploads/')) {
            return;
        }

        $path = public_path(ltrim($url, '/'));
        if (is_file($path)) {
            unlink($path);
        }
    }
}
