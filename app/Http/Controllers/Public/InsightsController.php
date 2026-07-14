<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Inertia\Inertia;

class InsightsController extends Controller
{
    public function index()
    {
        $articles = Article::published()
            ->with('category')
            ->latest('published_at')
            ->get()
            ->map(fn ($a) => [
                'id'          => $a->uuid,
                'slug'        => $a->slug,
                'title'       => $a->title,
                'excerpt'     => $a->excerpt,
                'category'    => $a->category?->name,
                'hero_img'    => $a->hero_img,
                'read_time'   => $a->read_time,
                'is_featured' => $a->is_featured,
                'date'        => $a->published_at?->format('d M Y') ?? $a->created_at->format('d M Y'),
            ]);

        $categories = Category::whereHas('articles', fn ($q) => $q->where('is_published', true))
            ->orderBy('name')
            ->pluck('name');

        return Inertia::render('Insights', [
            'articles'   => $articles,
            'categories' => $categories,
        ]);
    }

    public function show(string $slug)
    {
        $article = Article::published()
            ->with('category')
            ->where('slug', $slug)
            ->firstOrFail();

        // Related: same category, different article, latest 2
        $related = Article::published()
            ->with('category')
            ->where('category_id', $article->category_id)
            ->where('id', '!=', $article->id)
            ->latest('published_at')
            ->take(2)
            ->get()
            ->map(fn ($a) => [
                'title'    => $a->title,
                'slug'     => $a->slug,
                'category' => $a->category?->name,
            ]);

        return Inertia::render('Insight', [
            'article' => [
                'id'          => $article->uuid,
                'slug'        => $article->slug,
                'title'       => $article->title,
                'category'    => $article->category?->name,
                'date'        => $article->published_at?->format('d M Y') ?? $article->created_at->format('d M Y'),
                'read_time'   => $article->read_time,
                'author'      => $article->author,
                'author_role' => $article->author_role,
                'hero_img'    => $article->hero_img,
                'content'     => $article->content,
                'related'     => $related,
            ],
        ]);
    }
}
