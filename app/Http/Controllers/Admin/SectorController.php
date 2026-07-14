<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sector;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SectorController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Sectors/Index', [
            'sectors' => Sector::orderBy('sort_order')->get()->map(fn ($sector) => [
                'id'         => $sector->uuid,
                'title'      => $sector->title,
                'slug'       => $sector->slug,
                'image_url'  => $sector->image_url,
                'sort_order' => $sector->sort_order,
                'is_active'  => $sector->is_active,
            ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Sectors/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validatedSector($request);
        $validated['slug'] = $validated['slug'] ?: Str::slug($validated['title']);
        $validated['image_url'] = $this->resolveImage($request);
        $validated['tags'] = $this->parseLines($request->input('tags', ''));
        $validated['challenges'] = $this->parseLines($request->input('challenges', ''));
        $validated['services'] = $this->parseLines($request->input('services', ''));
        $validated['relevant_areas'] = $this->parseRelated($request->input('relevant_areas', ''));
        $validated['is_active'] = $validated['is_active'] ?? true;

        Sector::create($validated);

        return redirect()->route('admin.sectors.index')->with('success', 'Sector created.');
    }

    public function edit(Sector $sector)
    {
        return Inertia::render('Admin/Sectors/Edit', [
            'sector' => [
                ...$sector->toArray(),
                'id'             => $sector->uuid,
                'tags'           => implode("\n", $sector->tags ?? []),
                'challenges'     => implode("\n", $sector->challenges ?? []),
                'services'       => implode("\n", $sector->services ?? []),
                'relevant_areas' => $this->serializeRelated($sector->relevant_areas ?? []),
            ],
        ]);
    }

    public function update(Request $request, Sector $sector)
    {
        $validated = $this->validatedSector($request, $sector->id);
        $validated['slug'] = $validated['slug'] ?: Str::slug($validated['title']);
        $validated['image_url'] = $this->resolveImage($request, $sector->image_url);
        $validated['tags'] = $this->parseLines($request->input('tags', ''));
        $validated['challenges'] = $this->parseLines($request->input('challenges', ''));
        $validated['services'] = $this->parseLines($request->input('services', ''));
        $validated['relevant_areas'] = $this->parseRelated($request->input('relevant_areas', ''));
        $validated['is_active'] = $validated['is_active'] ?? false;

        if ($request->hasFile('image_file')) {
            $this->deleteStoredImage($sector->image_url);
        }

        $sector->update($validated);

        return redirect()->route('admin.sectors.index')->with('success', 'Sector updated.');
    }

    public function destroy(Sector $sector)
    {
        $this->deleteStoredImage($sector->image_url);
        $sector->delete();

        return redirect()->route('admin.sectors.index')->with('success', 'Sector removed.');
    }

    private function validatedSector(Request $request, ?int $id = null): array
    {
        return $request->validate([
            'title'          => ['required', 'string', 'max:255'],
            'slug'           => ['nullable', 'string', 'max:255', Rule::unique('sectors', 'slug')->ignore($id)],
            'tagline'        => ['nullable', 'string', 'max:255'],
            'intro'          => ['nullable', 'string'],
            'image_url'      => ['nullable', 'string', 'max:1000'],
            'image_file'     => ['nullable', 'image', 'max:4096'],
            'tags'           => ['nullable', 'string'],
            'challenges'     => ['nullable', 'string'],
            'services'       => ['nullable', 'string'],
            'relevant_areas' => ['nullable', 'string'],
            'sort_order'     => ['nullable', 'integer', 'min:0'],
            'is_active'      => ['boolean'],
        ]);
    }

    private function resolveImage(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('image_file')) {
            return $this->storePublicUpload($request, 'image_file', 'sectors');
        }

        $url = trim($request->input('image_url', ''));
        return $url !== '' ? $url : $existing;
    }

    private function parseLines(string $text): array
    {
        return array_values(array_filter(array_map('trim', preg_split('/\R/', $text))));
    }

    private function parseRelated(string $text): array
    {
        return array_values(array_filter(array_map(function ($line) {
            $parts = array_map('trim', explode('|', $line, 2));
            return count($parts) === 2 ? ['title' => $parts[0], 'href' => $parts[1]] : null;
        }, $this->parseLines($text))));
    }

    private function serializeRelated(array $items): string
    {
        return implode("\n", array_map(fn ($item) => ($item['title'] ?? '') . ' | ' . ($item['href'] ?? ''), $items));
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
