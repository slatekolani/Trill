<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'name',
        'acronym',
        'description',
        'url',
        'logo_url',
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
