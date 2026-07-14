<?php

namespace Database\Seeders;

use App\Models\Membership;
use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder
{
    public function run(): void
    {
        $memberships = [
            [
                'name' => 'Tanganyika Law Society',
                'acronym' => 'TLS',
                'description' => 'The statutory bar association for advocates in mainland Tanzania.',
                'url' => 'https://tls.or.tz',
                'sort_order' => 1,
            ],
            [
                'name' => 'East Africa Law Society',
                'acronym' => 'EALS',
                'description' => 'A regional professional body bringing together law societies and lawyers across East Africa.',
                'url' => 'https://ealawsociety.org',
                'sort_order' => 2,
            ],
        ];

        foreach ($memberships as $membership) {
            Membership::updateOrCreate(
                ['name' => $membership['name']],
                $membership + ['is_active' => true]
            );
        }
    }
}
