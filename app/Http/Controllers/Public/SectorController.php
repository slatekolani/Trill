<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Sector;
use Inertia\Inertia;

class SectorController extends Controller
{
    public function index()
    {
        return Inertia::render('Sectors', [
            'sectors' => Sector::active()
                ->orderBy('sort_order')
                ->get()
                ->map(fn ($sector) => $this->payload($sector)),
        ]);
    }

    public function show(string $slug)
    {
        $sector = Sector::active()->where('slug', $slug)->firstOrFail();

        return Inertia::render('Sector', [
            'sector' => $this->payload($sector, true),
        ]);
    }

    private function payload(Sector $sector, bool $full = false): array
    {
        $payload = [
            'id'        => $sector->uuid,
            'slug'      => $sector->slug,
            'title'     => $sector->title,
            'tagline'   => $sector->tagline,
            'img'       => $sector->image_url,
            'image_url' => $sector->image_url,
            'tags'      => $sector->tags ?? [],
        ];

        if ($full) {
            $payload += [
                'heroImg'       => $sector->image_url,
                'intro'         => $sector->intro,
                'challenges'    => $sector->challenges ?? [],
                'services'      => $sector->services ?? [],
                'relevantAreas' => $sector->relevant_areas ?? [],
            ];
        }

        return $payload;
    }
}
