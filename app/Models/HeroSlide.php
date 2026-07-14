<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'badge',
        'title',
        'description',
        'image_url',
        'cta_label',
        'cta_href',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
