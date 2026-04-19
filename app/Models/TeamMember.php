<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = [
        'name',
        'role',
        'bio',
        'avatar_url',
        'initials',
        'email',
        'languages',
        'practice_areas',
        'education',
        'memberships',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'languages'      => 'array',
        'practice_areas' => 'array',
        'education'      => 'array',
        'memberships'    => 'array',
        'is_active'      => 'boolean',
    ];
}
