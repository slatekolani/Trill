<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\PracticeArea;
use Inertia\Inertia;

class PracticeAreaController extends Controller
{
    public function index()
    {
        return Inertia::render('PracticeAreas', [
            'practiceAreas' => PracticeArea::active()
                ->orderBy('sort_order')
                ->get()
                ->map(fn ($area) => $this->areaPayload($area)),
        ]);
    }

    public function show(string $slug)
    {
        $area = PracticeArea::active()->where('slug', $slug)->firstOrFail();

        return Inertia::render('PracticeArea', [
            'area' => $this->areaPayload($area, true),
        ]);
    }

    private function areaPayload(PracticeArea $area, bool $full = false): array
    {
        $payload = [
            'id'        => $area->uuid,
            'title'     => $area->title,
            'slug'      => $area->slug,
            'tagline'   => $area->tagline,
            'summary'   => $area->summary,
            'desc'      => $area->summary,
            'image_url' => $area->image_url,
            'img'       => $area->image_url,
            'href'      => '/practice-areas/' . $area->slug,
        ];

        if ($full) {
            $payload += [
                'heroImg'      => $area->image_url,
                'intro'        => $area->intro,
                'services'     => $area->services ?? [],
                'clientNeeds'  => $area->client_needs ?? [],
                'whyTrill'     => $area->why_trill,
                'relatedAreas' => $area->related_areas ?? [],
            ];
        }

        return $payload;
    }
}
