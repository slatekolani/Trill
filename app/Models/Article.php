<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Article extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'category_id',
        'author',
        'author_role',
        'excerpt',
        'content',
        'hero_img',
        'read_time',
        'is_featured',
        'is_published',
        'published_at',
    ];

    protected $casts = [
        'content'      => 'array',
        'is_featured'  => 'boolean',
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Scope to only published articles.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
