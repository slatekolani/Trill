<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class PracticeArea extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'tagline',
        'summary',
        'intro',
        'image_url',
        'services',
        'client_needs',
        'why_trill',
        'related_areas',
        'sort_order',
        'show_in_nav',
        'is_active',
    ];

    protected $casts = [
        'services'      => 'array',
        'client_needs'  => 'array',
        'related_areas' => 'array',
        'show_in_nav'   => 'boolean',
        'is_active'     => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
