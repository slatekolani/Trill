<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Article;
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
                'id'         => $a->id,
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
                'id'         => $m->id,
                'name'       => $m->name,
                'role'       => $m->role,
                'initials'   => $m->initials,
                'bio'        => $m->bio,
                'avatar_url' => $m->avatar_url,
            ]);

        return Inertia::render('Home', [
            'latestArticles' => $latestArticles,
            'teamMembers'    => $teamMembers,
        ]);
    }
}
