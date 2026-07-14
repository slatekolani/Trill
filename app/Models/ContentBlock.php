<?php

namespace App\Models;

use App\Models\Concerns\HasUuid;
use Illuminate\Database\Eloquent\Model;

class ContentBlock extends Model
{
    use HasUuid;

    protected $fillable = [
        'uuid',
        'key',
        'label',
        'value',
        'group',
    ];
}
