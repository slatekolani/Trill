<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
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
                'id'           => $a->uuid,
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
        $categories = Category::orderBy('name')->get(['uuid', 'name'])->map(fn ($category) => [
            'id' => $category->uuid,
            'name' => $category->name,
        ]);
        return Inertia::render('Admin/Articles/Create', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'        => ['required', 'string', 'max:255'],
            'category_id'  => ['required', 'exists:categories,uuid'],
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

        $category = Category::where('uuid', $request->input('category_id'))->firstOrFail();

        Article::create([
            'title'        => $request->input('title'),
            'slug'         => Str::slug($request->input('title')),
            'category_id'  => $category->id,
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
        $categories = Category::orderBy('name')->get(['uuid', 'name'])->map(fn ($category) => [
            'id' => $category->uuid,
            'name' => $category->name,
        ]);

        return Inertia::render('Admin/Articles/Edit', [
            'article'    => [
                'id'           => $article->uuid,
                'title'        => $article->title,
                'slug'         => $article->slug,
                'category_id'  => $article->category?->uuid,
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
            'category_id'  => ['required', 'exists:categories,uuid'],
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
        $category = Category::where('uuid', $request->input('category_id'))->firstOrFail();

        // If a new file was uploaded, delete the old locally stored file.
        $newHeroImg = $this->resolveHeroImg($request, $article->hero_img);
        if ($request->hasFile('hero_file')) {
            $this->deleteStoredImage($article->hero_img);
        }

        $article->update([
            'title'        => $request->input('title'),
            'slug'         => Str::slug($request->input('title')),
            'category_id'  => $category->id,
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
        $this->deleteStoredImage($article->hero_img);

        $article->delete();
        return redirect()->route('admin.articles.index')->with('success', 'Article deleted.');
    }

    /**
     * Resolve hero image: uploaded file takes priority over URL field.
     */
    private function resolveHeroImg(Request $request, ?string $existing = null): ?string
    {
        if ($request->hasFile('hero_file')) {
            return $this->storePublicUpload($request, 'hero_file', 'articles');
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
}
