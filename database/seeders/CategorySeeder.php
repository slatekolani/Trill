<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Corporate Law',
            'Dispute Resolution',
            'Employment Law',
            'Real Estate',
            'Taxation',
            'Intellectual Property',
            'Banking & Finance',
            'Immigration',
            'Regulatory',
            'Oil & Gas',
            'Debt Recovery',
            'Cyber-crime Law',
        ];

        foreach ($categories as $name) {
            Category::firstOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name]
            );
        }
    }
}
