<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index()
    {
        $members = TeamMember::where('is_active', true)
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($m) => [
                'id'             => $m->id,
                'name'           => $m->name,
                'role'           => $m->role,
                'bio'            => $m->bio,
                'avatar_url'     => $m->avatar_url,
                'initials'       => $m->initials,
                'email'          => $m->email,
                'languages'      => $m->languages ?? [],
                'practice_areas' => $m->practice_areas ?? [],
                'education'      => $m->education ?? [],
                'memberships'    => $m->memberships ?? [],
            ]);

        return Inertia::render('Team', ['members' => $members]);
    }

    public function show(TeamMember $teamMember)
    {
        abort_unless($teamMember->is_active, 404);

        return Inertia::render('TeamMember', [
            'member' => [
                'id'             => $teamMember->id,
                'name'           => $teamMember->name,
                'role'           => $teamMember->role,
                'bio'            => $teamMember->bio,
                'avatar_url'     => $teamMember->avatar_url,
                'initials'       => $teamMember->initials,
                'email'          => $teamMember->email,
                'languages'      => $teamMember->languages ?? [],
                'practice_areas' => $teamMember->practice_areas ?? [],
                'education'      => $teamMember->education ?? [],
                'memberships'    => $teamMember->memberships ?? [],
            ],
        ]);
    }
}
