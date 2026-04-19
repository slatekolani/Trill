<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
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
            ],
            'recentArticles' => Article::with('category')
                ->latest()
                ->take(5)
                ->get()
                ->map(fn ($a) => [
                    'id'           => $a->id,
                    'title'        => $a->title,
                    'slug'         => $a->slug,
                    'category'     => $a->category?->name,
                    'is_published' => $a->is_published,
                    'created_at'   => $a->created_at->format('d M Y'),
                ]),
        ]);
    }
}
