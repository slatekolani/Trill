<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $corporateCat = Category::where('slug', 'corporate-law')->first();

        if (!$corporateCat || Article::where('slug', 'companies-amendment-regulations-2025')->exists()) {
            return;
        }

        Article::create([
            'title'        => 'New Companies (Amendment) Regulations 2025: What Businesses Need to Know',
            'slug'         => 'companies-amendment-regulations-2025',
            'category_id'  => $corporateCat->id,
            'author'       => 'Managing Partner',
            'author_role'  => 'Senior Advocate — Corporate & Commercial',
            'excerpt'      => 'The recent amendments to Tanzania\'s Companies Act introduce significant changes to corporate governance requirements, including new filing deadlines, director disclosure obligations, and beneficial ownership rules. We break down the key provisions and their practical implications.',
            'hero_img'     => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
            'read_time'    => '5 min read',
            'is_featured'  => true,
            'is_published' => true,
            'published_at' => now()->subDays(10),
            'content'      => [
                'The Tanzanian government has published new Companies (Amendment) Regulations 2025 under the Companies Act [Cap 212 RE 2002], introducing several significant changes to corporate governance and compliance requirements. These changes take effect on 1 April 2025 and apply to all companies registered under the Companies Act.',
                'Key changes include enhanced beneficial ownership disclosure requirements, with all companies now required to maintain an up-to-date register of beneficial owners and file this information with the Business Registrations and Licensing Agency (BRELA) within 30 days of any change. A "beneficial owner" is broadly defined as any natural person who ultimately owns or controls a company through direct or indirect shareholding of 25% or more.',
                'The regulations also introduce new annual filing deadlines, tightening the timeframe within which companies must file their annual returns. Previously, companies had 42 days from their financial year-end; this has now been reduced to 30 days. Failure to comply will attract increased penalty provisions.',
                'Companies with foreign shareholding are subject to additional requirements under the new regulations, including more detailed disclosure of the ultimate beneficial owners in the country of origin. This aligns with Tanzania\'s commitment to the Financial Action Task Force (FATF) standards on anti-money laundering and counter-terrorist financing.',
                'Practical implications for businesses include the need to review and update corporate registers immediately, ensure all director and shareholder information at BRELA is accurate and current, and implement internal processes to capture and report any changes to beneficial ownership within the required timeframe.',
                'We recommend that all companies conduct an immediate audit of their corporate records and engage a qualified advocate to assist with the compliance process. Trill & Associates Advocates is available to assist with all corporate compliance requirements under the new regulations.',
            ],
        ]);
    }
}
