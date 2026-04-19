<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::with('category')
            ->latest()
            ->get()
            ->map(fn ($a) => [
                'id'           => $a->id,
                'title'        => $a->title,
                'slug'         => $a->slug,
                'category'     => $a->category?->name,
                'author'       => $a->author,
                'is_featured'  => $a->is_featured,
                'is_published' => $a->is_published,
                'created_at'   => $a->created_at->format('d M Y'),
            ]);

        return Inertia::render('Admin/Articles/Index', compact('articles'));
    }

    public function create()
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);
        return Inertia::render('Admin/Articles/Create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'        => ['required', 'string', 'max:255'],
            'category_id'  => ['required', 'exists:categories,id'],
            'author'       => ['required', 'string', 'max:255'],
            'author_role'  => ['nullable', 'string', 'max:255'],
            'excerpt'      => ['required', 'string'],
            'content'      => ['required', 'string'],
            'hero_img'     => ['nullable', 'string', 'max:500'],
            'hero_file'    => ['nullable', 'image', 'max:4096'],
            'read_time'    => ['nullable', 'string', 'max:50'],
            'is_featured'  => ['boolean'],
            'is_published' => ['boolean'],
        ]);

        $paragraphs = $this->parseParagraphs($request->input('content'));

        Article::create([
            'title'        => $request->input('title'),
            'slug'         => Str::slug($request->input('title')),
            'category_id'  => $request->input('category_id'),
            'author'       => $request->input('author'),
            'author_role'  => $request->input('author_role'),
            'excerpt'      => $request->input('excerpt'),
            'content'      => $paragraphs,
            'hero_img'     => $this->resolveHeroImg($request),
            'read_time'    => $request->input('read_time', '5 min read'),
            'is_featured'  => $request->boolean('is_featured'),
            'is_published' => $request->boolean('is_published'),
            'published_at' => $request->boolean('is_published') ? now() : null,
        ]);

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article created successfully.');
    }

    public function edit(Article $article)
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);

        return Inertia::render('Admin/Articles/Edit', [
            'article'    => [
                'id'           => $article->id,
                'title'        => $article->title,
                'slug'         => $article->slug,
                'category_id'  => $article->category_id,
                'author'       => $article->author,
                'author_role'  => $article->author_role,
                'excerpt'      => $article->excerpt,
                'content'      => implode("\n\n", $article->content ?? []),
                'hero_img'     => $article->hero_img,
                'read_time'    => $article->read_time,
                'is_featured'  => $article->is_featured,
                'is_published' => $article->is_published,
            ],
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title'        => ['required', 'string', 'max:255'],
            'category_id'  => ['required', 'exists:categories,id'],
            'author'       => ['required', 'string', 'max:255'],
            'author_role'  => ['nullable', 'string', 'max:255'],
            'excerpt'      => ['required', 'string'],
            'content'      => ['required', 'string'],
            'hero_img'     => ['nullable', 'string', 'max:500'],
            'hero_file'    => ['nullable', 'image', 'max:4096'],
            'read_time'    => ['nullable', 'string', 'max:50'],
            'is_featured'  => ['boolean'],
            'is_published' => ['boolean'],
        ]);

        $paragraphs = $this->parseParagraphs($request->input('content'));

        // If a new file was uploaded, delete the old stored file
        $newHeroImg = $this->resolveHeroImg($request, $article->hero_img);
        if ($request->hasFile('hero_file') && $article->hero_img && str_starts_with($article->hero_img, '/storage/')) {
            Storage::delete(str_replace('/storage/', 'public/', $article->hero_img));
        }

        $article->update([
            'title'        => $request->input('title'),
            'slug'         => Str::slug($request->input('title')),
            'category_id'  => $request->input('category_id'),
            'author'       => $request->input('author'),
            'author_role'  => $request->input('author_role'),
            'excerpt'      => $request->input('excerpt'),
            'content'      => $paragraphs,
            'hero_img'     => $newHeroImg,
            'read_time'    => $request->input('read_time', '5 min read'),
            'is_featured'  => $request->boolean('is_featured'),
            'is_published' => $request->boolean('is_published'),
            'published_at' => (!$article->is_published && $request->boolean('is_published')) ? now() : $article->published_at,
        ]);

        return redirect()->route('admin.articles.index')
            ->with('success', 'Article updated successfully.');
    }

    public function destroy(Article $article)
    {
        if ($article->hero_img && str_starts_with($article->hero_img, '/storage/')) {
            Storage::delete(str_replace('/storage/', 'public/', $article->hero_img));
        }

        $article->delete();
        return redirect()->route('admin.articles.index')->with('success', 'Article deleted.');
    }

    /**
     * Resolve hero image: uploaded file takes priority over URL field.
     */
    private function resolveHeroImg(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('hero_file')) {
            $path = $request->file('hero_file')->store('articles', 'public');
            return '/storage/' . $path;
        }

        $url = trim($request->input('hero_img', ''));
        return $url !== '' ? $url : $existing;
    }

    private function parseParagraphs(string $content): array
    {
        return array_values(array_filter(
            array_map('trim', preg_split('/\n{2,}/', $content))
        ));
    }
}
