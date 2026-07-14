<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'tagline',
        'intro',
        'image_url',
        'tags',
        'challenges',
        'services',
        'relevant_areas',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'tags'           => 'array',
        'challenges'     => 'array',
        'services'       => 'array',
        'relevant_areas' => 'array',
        'is_active'      => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
