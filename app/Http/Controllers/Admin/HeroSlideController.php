<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class HeroSlideController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/HeroSlides/Index', [
            'slides' => HeroSlide::orderBy('sort_order')->get()->map(fn ($slide) => [
                'id'         => $slide->uuid,
                'badge'      => $slide->badge,
                'title'      => $slide->title,
                'image_url'  => $slide->image_url,
                'sort_order' => $slide->sort_order,
                'is_active'  => $slide->is_active,
            ]),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/HeroSlides/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateSlide($request);
        $validated['image_url'] = $this->resolveImage($request);
        $validated['is_active'] = $validated['is_active'] ?? true;

        HeroSlide::create($validated);

        return redirect()->route('admin.hero-slides.index')->with('success', 'Hero slide created.');
    }

    public function edit(HeroSlide $heroSlide)
    {
        return Inertia::render('Admin/HeroSlides/Edit', [
            'slide' => [
                'id'          => $heroSlide->uuid,
                'badge'       => $heroSlide->badge,
                'title'       => $heroSlide->title,
                'description' => $heroSlide->description,
                'image_url'   => $heroSlide->image_url,
                'cta_label'   => $heroSlide->cta_label,
                'cta_href'    => $heroSlide->cta_href,
                'sort_order'  => $heroSlide->sort_order,
                'is_active'   => $heroSlide->is_active,
            ],
        ]);
    }

    public function update(Request $request, HeroSlide $heroSlide)
    {
        $validated = $this->validateSlide($request);
        $validated['image_url'] = $this->resolveImage($request, $heroSlide->image_url);
        $validated['is_active'] = $validated['is_active'] ?? false;

        if ($request->hasFile('image_file')) {
            $this->deleteStoredImage($heroSlide->image_url);
        }

        $heroSlide->update($validated);

        return redirect()->route('admin.hero-slides.index')->with('success', 'Hero slide updated.');
    }

    public function destroy(HeroSlide $heroSlide)
    {
        $this->deleteStoredImage($heroSlide->image_url);
        $heroSlide->delete();

        return redirect()->route('admin.hero-slides.index')->with('success', 'Hero slide removed.');
    }

    private function validateSlide(Request $request): array
    {
        return $request->validate([
            'badge'       => ['nullable', 'string', 'max:255'],
            'title'       => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'image_url'   => ['nullable', 'string', 'max:1000'],
            'image_file'  => ['nullable', 'image', 'max:4096'],
            'cta_label'   => ['nullable', 'string', 'max:255'],
            'cta_href'    => ['nullable', 'string', 'max:255'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);
    }

    private function resolveImage(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('image_file')) {
            return $this->storePublicUpload($request, 'image_file', 'hero-slides');
        }

        $url = trim($request->input('image_url', ''));
        return $url !== '' ? $url : $existing;
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
