<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@trill.co.tz'],
            [
                'name'     => 'Trill Admin',
                'email'    => 'admin@trill.co.tz',
                'password' => Hash::make('Trill@2025!'),
                'is_admin' => true,
            ]
        );
    }
}
