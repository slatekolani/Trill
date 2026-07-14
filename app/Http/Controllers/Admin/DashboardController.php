<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\ContentBlock;
use App\Models\HeroSlide;
use App\Models\Membership;
use App\Models\PracticeArea;
use App\Models\Sector;
use App\Models\TeamMember;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'articles'      => Article::count(),
                'published'     => Article::published()->count(),
                'drafts'        => Article::where('is_published', false)->count(),
                'team_members'  => TeamMember::where('is_active', true)->count(),
                'categories'    => Category::count(),
                'hero_slides'   => HeroSlide::count(),
                'practice_areas'=> PracticeArea::count(),
                'sectors'       => Sector::count(),
                'memberships'   => Membership::count(),
                'content_blocks'=> ContentBlock::count(),
            ],
            'recentArticles' => Article::with('category')
                ->latest()
                ->take(5)
                ->get()
                ->map(fn ($a) => [
                    'id'           => $a->uuid,
                    'title'        => $a->title,
                    'slug'         => $a->slug,
                    'category'     => $a->category?->name,
                    'is_published' => $a->is_published,
                    'created_at'   => $a->created_at->format('d M Y'),
                ]),
        ]);
    }
}
