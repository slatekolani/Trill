<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PracticeArea;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PracticeAreaController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/PracticeAreas/Index', [
            'areas' => PracticeArea::orderBy('sort_order')->get()->map(fn ($area) => [
                'id'          => $area->uuid,
                'title'       => $area->title,
                'slug'        => $area->slug,
                'image_url'   => $area->image_url,
                'sort_order'  => $area->sort_order,
                'show_in_nav' => $area->show_in_nav,
                'is_active'   => $area->is_active,
            ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PracticeAreas/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validatedArea($request);
        $validated['slug'] = $validated['slug'] ?: Str::slug($validated['title']);
        $validated['image_url'] = $this->resolveImage($request);
        $validated['services'] = $this->parseLines($request->input('services', ''));
        $validated['client_needs'] = $this->parsePairs($request->input('client_needs', ''));
        $validated['related_areas'] = $this->parseRelated($request->input('related_areas', ''));
        $validated['show_in_nav'] = $validated['show_in_nav'] ?? true;
        $validated['is_active'] = $validated['is_active'] ?? true;

        PracticeArea::create($validated);

        return redirect()->route('admin.practice-areas.index')->with('success', 'Practice area created.');
    }

    public function edit(PracticeArea $practiceArea)
    {
        return Inertia::render('Admin/PracticeAreas/Edit', [
            'area' => [
                ...$practiceArea->toArray(),
                'id'             => $practiceArea->uuid,
                'services'      => implode("\n", $practiceArea->services ?? []),
                'client_needs'  => $this->serializePairs($practiceArea->client_needs ?? []),
                'related_areas' => $this->serializeRelated($practiceArea->related_areas ?? []),
            ],
        ]);
    }

    public function update(Request $request, PracticeArea $practiceArea)
    {
        $validated = $this->validatedArea($request, $practiceArea->id);
        $validated['slug'] = $validated['slug'] ?: Str::slug($validated['title']);
        $validated['image_url'] = $this->resolveImage($request, $practiceArea->image_url);
        $validated['services'] = $this->parseLines($request->input('services', ''));
        $validated['client_needs'] = $this->parsePairs($request->input('client_needs', ''));
        $validated['related_areas'] = $this->parseRelated($request->input('related_areas', ''));
        $validated['show_in_nav'] = $validated['show_in_nav'] ?? false;
        $validated['is_active'] = $validated['is_active'] ?? false;

        if ($request->hasFile('image_file')) {
            $this->deleteStoredImage($practiceArea->image_url);
        }

        $practiceArea->update($validated);

        return redirect()->route('admin.practice-areas.index')->with('success', 'Practice area updated.');
    }

    public function destroy(PracticeArea $practiceArea)
    {
        $this->deleteStoredImage($practiceArea->image_url);
        $practiceArea->delete();

        return redirect()->route('admin.practice-areas.index')->with('success', 'Practice area removed.');
    }

    private function validatedArea(Request $request, ?int $id = null): array
    {
        return $request->validate([
            'title'         => ['required', 'string', 'max:255'],
            'slug'          => ['nullable', 'string', 'max:255', Rule::unique('practice_areas', 'slug')->ignore($id)],
            'tagline'       => ['nullable', 'string', 'max:255'],
            'summary'       => ['nullable', 'string'],
            'intro'         => ['nullable', 'string'],
            'image_url'     => ['nullable', 'string', 'max:1000'],
            'image_file'    => ['nullable', 'image', 'max:4096'],
            'services'      => ['nullable', 'string'],
            'client_needs'  => ['nullable', 'string'],
            'why_trill'     => ['nullable', 'string'],
            'related_areas' => ['nullable', 'string'],
            'sort_order'    => ['nullable', 'integer', 'min:0'],
            'show_in_nav'   => ['boolean'],
            'is_active'     => ['boolean'],
        ]);
    }

    private function resolveImage(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('image_file')) {
            return $this->storePublicUpload($request, 'image_file', 'practice-areas');
        }

        $url = trim($request->input('image_url', ''));
        return $url !== '' ? $url : $existing;
    }

    private function parseLines(string $text): array
    {
        return array_values(array_filter(array_map('trim', preg_split('/\R/', $text))));
    }

    private function parsePairs(string $text): array
    {
        return array_values(array_filter(array_map(function ($line) {
            $parts = array_map('trim', explode('|', $line, 2));
            return count($parts) === 2 ? ['scenario' => $parts[0], 'answer' => $parts[1]] : null;
        }, $this->parseLines($text))));
    }

    private function parseRelated(string $text): array
    {
        return array_values(array_filter(array_map(function ($line) {
            $parts = array_map('trim', explode('|', $line, 2));
            return count($parts) === 2 ? ['title' => $parts[0], 'href' => $parts[1]] : null;
        }, $this->parseLines($text))));
    }

    private function serializePairs(array $items): string
    {
        return implode("\n", array_map(fn ($item) => ($item['scenario'] ?? '') . ' | ' . ($item['answer'] ?? ''), $items));
    }

    private function serializeRelated(array $items): string
    {
        return implode("\n", array_map(fn ($item) => ($item['title'] ?? '') . ' | ' . ($item['href'] ?? ''), $items));
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
}
