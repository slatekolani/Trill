<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ContentBlock;
use App\Models\HeroSlide;
use App\Models\Membership;
use App\Models\PracticeArea;
use App\Models\Sector;
use App\Models\TeamMember;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $latestArticles = Article::published()
            ->with('category')
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(fn ($a) => [
                'id'         => $a->uuid,
                'slug'       => $a->slug,
                'title'      => $a->title,
                'excerpt'    => $a->excerpt,
                'category'   => $a->category?->name,
                'hero_img'   => $a->hero_img,
                'read_time'  => $a->read_time,
                'date'       => $a->published_at?->format('d M Y') ?? $a->created_at->format('d M Y'),
            ]);

        $teamMembers = TeamMember::where('is_active', true)
            ->orderBy('sort_order')
            ->take(4)
            ->get()
            ->map(fn ($m) => [
                'id'         => $m->uuid,
                'name'       => $m->name,
                'role'       => $m->role,
                'initials'   => $m->initials,
                'bio'        => $m->bio,
                'avatar_url' => $m->avatar_url,
            ]);

        $heroSlides = HeroSlide::active()
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($slide) => [
                'image'       => $slide->image_url,
                'badge'       => $slide->badge,
                'title'       => $slide->title,
                'description' => $slide->description,
                'cta'         => [
                    'label' => $slide->cta_label ?: 'Learn More',
                    'href'  => $slide->cta_href ?: '/contact',
                ],
            ]);

        $practiceAreas = PracticeArea::active()
            ->orderBy('sort_order')
            ->take(8)
            ->get()
            ->map(fn ($area) => [
                'id'        => $area->uuid,
                'type'      => 'Practice Area',
                'title'     => $area->title,
                'desc'      => $area->summary,
                'href'      => '/practice-areas/' . $area->slug,
                'image_url' => $area->image_url,
            ]);

        $sectors = Sector::active()
            ->orderBy('sort_order')
            ->take(6)
            ->get()
            ->map(fn ($sector) => [
                'id'    => $sector->uuid,
                'type'  => 'Sector',
                'title' => $sector->title,
                'desc'  => $sector->tagline,
                'href'  => '/sectors/' . $sector->slug,
                'image_url' => $sector->image_url,
            ]);

        $memberships = Membership::active()
            ->orderBy('sort_order')
            ->take(3)
            ->get(['uuid', 'name', 'acronym', 'description', 'url', 'logo_url'])
            ->map(fn ($membership) => [
                'id'          => $membership->uuid,
                'name'        => $membership->name,
                'acronym'     => $membership->acronym,
                'description' => $membership->description,
                'url'         => $membership->url,
                'logo_url'    => $membership->logo_url,
            ]);

        $contentBlocks = ContentBlock::all()
            ->mapWithKeys(fn ($block) => [$block->key => $block->value]);

        return Inertia::render('Home', [
            'latestArticles' => $latestArticles,
            'teamMembers'    => $teamMembers,
            'heroSlides'     => $heroSlides,
            'practiceAreas'  => $practiceAreas,
            'sectors'        => $sectors,
            'memberships'    => $memberships,
            'contentBlocks'  => $contentBlocks,
        ]);
    }
}
