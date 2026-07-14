<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use Inertia\Inertia;

class MembershipController extends Controller
{
    public function index()
    {
        $memberships = Membership::active()
            ->orderBy('sort_order')
            ->get(['uuid', 'name', 'acronym', 'description', 'url', 'logo_url'])
            ->map(fn ($membership) => [
                'id'          => $membership->uuid,
                'name'        => $membership->name,
                'acronym'     => $membership->acronym,
                'description' => $membership->description,
                'url'         => $membership->url,
                'logo_url'    => $membership->logo_url,
            ]);

        return Inertia::render('Memberships', [
            'memberships' => $memberships,
        ]);
    }
}
