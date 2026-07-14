<?php

namespace Database\Seeders;

use App\Models\ContentBlock;
use App\Models\HeroSlide;
use App\Models\Membership;
use App\Models\PracticeArea;
use App\Models\Sector;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CmsSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedHeroSlides();
        $this->seedPracticeAreas();
        $this->seedSectors();
        $this->seedMemberships();
        $this->seedContentBlocks();
    }

    private function seedHeroSlides(): void
    {
        $slides = [
            [
                'badge' => 'Tanzanian Legal Counsel',
                'title' => 'Clear Legal Guidance for Serious Decisions',
                'description' => 'Trill & Associates Advocates delivers practical legal services from the 18th Floor of Rita Tower, Dar-es-Salaam, serving clients across Tanzania and beyond.',
                'image_url' => 'https://i.pinimg.com/1200x/55/9b/0b/559b0b58e9860d4b982bed48748f696e.jpg',
                'cta_label' => 'Book Consultation',
                'cta_href' => '/book-consultation',
                'sort_order' => 1,
            ],
            [
                'badge' => 'Corporate & Commercial Law',
                'title' => 'Commercial Law with Practical Judgment',
                'description' => 'From incorporation and governance to complex transactions, our corporate team provides the legal backbone your business needs.',
                'image_url' => 'https://i.pinimg.com/736x/b5/c9/3f/b5c93f3f79fd3de51176200cece0914e.jpg',
                'cta_label' => 'Explore Services',
                'cta_href' => '/practice-areas',
                'sort_order' => 2,
            ],
            [
                'badge' => 'Intellectual Property',
                'title' => 'Protecting Innovations and Creative Work',
                'description' => 'We safeguard trademarks, copyrights, patents, and trade secrets locally and internationally.',
                'image_url' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
                'cta_label' => 'Protect Your IP',
                'cta_href' => '/contact',
                'sort_order' => 3,
            ],
        ];

        foreach ($slides as $slide) {
            HeroSlide::updateOrCreate(['title' => $slide['title']], $slide + ['is_active' => true]);
        }
    }

    private function seedPracticeAreas(): void
    {
        $areas = [
            ['Corporate & Commercial Law', 'Legal backbone for businesses, investors, institutions, and transactions.', 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'],
            ['Dispute Resolution', 'Strategic advocacy before courts, tribunals, arbitration panels, and regulators.', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80'],
            ['Alternative Dispute Resolution', 'Arbitration, mediation, and negotiation for commercially sensible outcomes.', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'],
            ['Employment & Labour Law', 'Workforce advisory, contracts, policies, terminations, and labour disputes.', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            ['Intellectual Property', 'Trademark, copyright, patent, licensing, and anti-counterfeiting support.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80'],
            ['Real Estate & Conveyancing', 'Property transactions, leases, title review, development, and land disputes.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'],
            ['Regulatory Compliance', 'Licensing, compliance frameworks, government relations, and sector regulation.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80'],
            ['Debt Recovery & Enforcement', 'Debt collection, insolvency, enforcement, and recovery strategy.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80'],
            ['Investment & Business Advisory', 'Market entry, structuring, due diligence, and investor support.', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'],
            ['Banking & Finance', 'Loan documentation, banking regulation, securities, and financial transactions.', 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80'],
            ['Taxation', 'Tax planning, compliance, audits, and Tanzania Revenue Authority disputes.', 'https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=1200&q=80'],
            ['Immigration', 'Work permits, residence permits, investor visas, and immigration compliance.', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'],
            ['Oil & Gas', 'Energy-sector contracts, exploration, production, regulation, and compliance.', 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80'],
            ['Entertainment Law', 'Contracts, royalties, rights management, and creative-sector legal protection.', 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80'],
            ['Insurance Law', 'Insurance regulation, claims, policy interpretation, and risk advisory.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80'],
            ['Cyber-crime Law', 'Digital offences, online fraud, privacy, evidence, and cybersecurity advisory.', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'],
            ['Human Rights', 'Rights-based litigation, advocacy, constitutional matters, and community support.', 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=80'],
        ];

        foreach ($areas as $index => [$title, $summary, $image]) {
            $slug = Str::slug(str_replace('&', 'and', $title));

            $legacySlugs = [
                'corporate-and-commercial-law' => 'corporate-commercial',
                'employment-and-labour-law' => 'employment-labour',
                'real-estate-and-conveyancing' => 'real-estate',
                'debt-recovery-and-enforcement' => 'debt-recovery',
                'investment-and-business-advisory' => 'investment-advisory',
                'cyber-crime-law' => 'cyber-crime',
            ];

            $slug = $legacySlugs[$slug] ?? Str::replace('-law', '', $slug);

            PracticeArea::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $title,
                    'tagline' => $summary,
                    'summary' => $summary,
                    'intro' => "Our {$title} practice provides focused, commercially aware legal support for clients in Tanzania and across the region. The team combines legal precision with practical judgment so clients can make informed decisions with confidence.",
                    'image_url' => $image,
                    'services' => [
                        'Specialist legal advisory',
                        'Document drafting and review',
                        'Regulatory guidance',
                        'Dispute strategy and representation',
                        'Risk review and compliance support',
                    ],
                    'client_needs' => [
                        ['scenario' => 'You need focused advice', 'answer' => 'We assess your matter, explain the legal position clearly, and recommend practical next steps.'],
                        ['scenario' => 'You need documents reviewed or prepared', 'answer' => 'We draft, review, and negotiate legal documents with attention to risk, enforceability, and commercial context.'],
                    ],
                    'why_trill' => 'Trill & Associates Advocates brings Tanzanian legal expertise, commercial awareness, and responsive client service to every matter.',
                    'related_areas' => [
                        ['title' => 'Corporate & Commercial Law', 'href' => '/practice-areas/corporate-commercial'],
                        ['title' => 'Dispute Resolution', 'href' => '/practice-areas/dispute-resolution'],
                    ],
                    'sort_order' => $index + 1,
                    'show_in_nav' => true,
                    'is_active' => true,
                ]
            );
        }
    }

    private function seedSectors(): void
    {
        $sectors = [
            [
                'title' => 'Energy & Infrastructure',
                'slug' => 'energy-infrastructure',
                'tagline' => 'Legal support for Tanzania\'s energy sector and infrastructure projects.',
                'intro' => 'Tanzania\'s energy and infrastructure sector is growing through investment in natural gas, renewable energy, power generation, transport, and major public-private projects. We advise investors, developers, public entities, contractors, and financiers on the legal and regulatory issues that shape these projects.',
                'image_url' => 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Oil & Gas', 'Project Finance', 'Regulatory Licensing'],
                'challenges' => ['Complex regulatory approvals and licensing requirements', 'Production sharing and joint operating agreements', 'Environmental and social compliance frameworks', 'Project financing and security documentation', 'Government contracts and concession agreements', 'Land acquisition for project development'],
                'services' => ['Oil and gas contract advisory', 'Power purchase agreements', 'Project finance and security documentation', 'Regulatory licensing and approvals', 'Land acquisition and compensation', 'Joint venture and consortium agreements', 'Environmental law compliance', 'Dispute resolution in energy matters'],
                'relevant_areas' => [
                    ['title' => 'Oil & Gas', 'href' => '/practice-areas/oil-gas'],
                    ['title' => 'Regulatory Compliance', 'href' => '/practice-areas/regulatory-compliance'],
                    ['title' => 'Corporate & Commercial Law', 'href' => '/practice-areas/corporate-commercial'],
                    ['title' => 'Real Estate & Conveyancing', 'href' => '/practice-areas/real-estate'],
                ],
            ],
            [
                'title' => 'Startups & Technology',
                'slug' => 'startups-technology',
                'tagline' => 'Legal foundations for innovators and digital businesses in East Africa.',
                'intro' => 'Tanzania\'s startup and technology ecosystem is expanding quickly. Early-stage companies and digital businesses need practical legal support on company structure, investment readiness, intellectual property, data protection, product contracts, and employment matters.',
                'image_url' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['IP Protection', 'Investment Docs', 'Data Protection'],
                'challenges' => ['Choosing the right legal structure for investment', 'Protecting software, brands, and innovations', 'Data protection and privacy compliance', 'Founder agreements and equity arrangements', 'Employment law for growing teams', 'Technology and SaaS contract frameworks'],
                'services' => ['Company incorporation and structuring', 'Founder agreements and vesting terms', 'Investment documentation and term sheets', 'IP registration and protection strategy', 'Data protection compliance', 'Technology licensing and SaaS agreements', 'Employment contracts for startup teams', 'Commercial partnership agreements'],
                'relevant_areas' => [
                    ['title' => 'Corporate & Commercial Law', 'href' => '/practice-areas/corporate-commercial'],
                    ['title' => 'Intellectual Property', 'href' => '/practice-areas/intellectual-property'],
                    ['title' => 'Cyber-crime Law', 'href' => '/practice-areas/cyber-crime'],
                    ['title' => 'Employment & Labour Law', 'href' => '/practice-areas/employment-labour'],
                ],
            ],
            [
                'title' => 'Financial Services',
                'slug' => 'financial-services',
                'tagline' => 'Regulatory and transactional legal support for banks, fintechs, and investors.',
                'intro' => 'We support banks, fintech companies, lenders, investors, and financial institutions with regulatory compliance, financing documents, product structuring, security perfection, debt recovery, and disputes in Tanzania\'s financial sector.',
                'image_url' => 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Banking Law', 'Fintech Regulation', 'Capital Markets'],
                'challenges' => ['Bank of Tanzania regulatory compliance', 'Loan and security documentation', 'Fintech product approvals', 'Consumer protection and data handling', 'Debt recovery and enforcement', 'Cross-border financial transactions'],
                'services' => ['Banking and finance advisory', 'Loan documentation', 'Security registration and perfection', 'Fintech compliance support', 'Debt recovery strategy', 'Financial services dispute resolution'],
                'relevant_areas' => [
                    ['title' => 'Banking & Finance', 'href' => '/practice-areas/banking-finance'],
                    ['title' => 'Regulatory Compliance', 'href' => '/practice-areas/regulatory-compliance'],
                    ['title' => 'Debt Recovery & Enforcement', 'href' => '/practice-areas/debt-recovery'],
                ],
            ],
            [
                'title' => 'Real Estate & Construction',
                'slug' => 'real-estate-construction',
                'tagline' => 'End-to-end legal services for property developers, investors, and contractors.',
                'intro' => 'We advise developers, landowners, purchasers, contractors, lenders, and tenants on land acquisition, title due diligence, leases, construction contracts, development approvals, financing, and disputes.',
                'image_url' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Conveyancing', 'Construction Contracts', 'Land Disputes'],
                'challenges' => ['Title verification and land use approvals', 'Construction contract risk allocation', 'Lease negotiation and enforcement', 'Development permits and compliance', 'Financing and security documentation', 'Land and construction disputes'],
                'services' => ['Property due diligence', 'Sale and lease agreements', 'Construction contract drafting', 'Development approvals support', 'Land dispute resolution', 'Real estate finance documentation'],
                'relevant_areas' => [
                    ['title' => 'Real Estate & Conveyancing', 'href' => '/practice-areas/real-estate'],
                    ['title' => 'Dispute Resolution', 'href' => '/practice-areas/dispute-resolution'],
                    ['title' => 'Banking & Finance', 'href' => '/practice-areas/banking-finance'],
                ],
            ],
            [
                'title' => 'Agriculture & Agribusiness',
                'slug' => 'agriculture-agribusiness',
                'tagline' => 'Legal support for Tanzania\'s agricultural sector and rural enterprises.',
                'intro' => 'We support agribusinesses, investors, exporters, cooperatives, processors, and landholders with contracts, land access, compliance, investment structures, financing, employment, and trade matters.',
                'image_url' => 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Land Rights', 'Agri Investment', 'Export Compliance'],
                'challenges' => ['Land acquisition and use rights', 'Outgrower and supply agreements', 'Export and standards compliance', 'Agricultural investment structuring', 'Employment and seasonal workforce issues', 'Disputes with suppliers or buyers'],
                'services' => ['Agribusiness contracts', 'Land and lease advisory', 'Investment structuring', 'Regulatory compliance', 'Employment support', 'Commercial dispute resolution'],
                'relevant_areas' => [
                    ['title' => 'Investment & Business Advisory', 'href' => '/practice-areas/investment-advisory'],
                    ['title' => 'Real Estate & Conveyancing', 'href' => '/practice-areas/real-estate'],
                    ['title' => 'Corporate & Commercial Law', 'href' => '/practice-areas/corporate-commercial'],
                ],
            ],
            [
                'title' => 'Tourism & Hospitality',
                'slug' => 'tourism-hospitality',
                'tagline' => 'Specialist legal advice for hotels, lodges, tour operators, and investors.',
                'intro' => 'Tourism and hospitality businesses operate in a highly regulated environment involving licensing, concessions, land, employment, tax, insurance, commercial contracts, and guest or supplier disputes. We provide practical legal support for operators and investors.',
                'image_url' => 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Licensing', 'Concessions', 'Employment Law'],
                'challenges' => ['Tourism licensing and operating permits', 'Lease and concession arrangements', 'Employment and labour compliance', 'Supplier and guest disputes', 'Insurance and liability issues', 'Tax and regulatory obligations'],
                'services' => ['Licensing and compliance support', 'Lease and concession review', 'Employment contracts and policies', 'Commercial contract drafting', 'Dispute resolution', 'Risk and liability advisory'],
                'relevant_areas' => [
                    ['title' => 'Regulatory Compliance', 'href' => '/practice-areas/regulatory-compliance'],
                    ['title' => 'Employment & Labour Law', 'href' => '/practice-areas/employment-labour'],
                    ['title' => 'Insurance Law', 'href' => '/practice-areas/insurance'],
                ],
            ],
            [
                'title' => 'Mining & Natural Resources',
                'slug' => 'mining-natural-resources',
                'tagline' => 'Comprehensive legal services for Tanzania\'s mining and extractive industries.',
                'intro' => 'We advise clients in mining and natural resources on licensing, joint ventures, regulatory compliance, environmental obligations, financing, government relations, local content, contracts, and disputes.',
                'image_url' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Mining Licences', 'JV Agreements', 'Environmental Law'],
                'challenges' => ['Mining licensing and renewals', 'Local content and regulatory compliance', 'Environmental and community obligations', 'Joint venture and farm-in arrangements', 'Financing and security structures', 'Government and contractor disputes'],
                'services' => ['Mining license advisory', 'Joint venture documentation', 'Regulatory compliance reviews', 'Environmental law support', 'Contract drafting and negotiation', 'Dispute resolution'],
                'relevant_areas' => [
                    ['title' => 'Regulatory Compliance', 'href' => '/practice-areas/regulatory-compliance'],
                    ['title' => 'Corporate & Commercial Law', 'href' => '/practice-areas/corporate-commercial'],
                    ['title' => 'Dispute Resolution', 'href' => '/practice-areas/dispute-resolution'],
                ],
            ],
            [
                'title' => 'NGOs & Development Sector',
                'slug' => 'ngo-development',
                'tagline' => 'Legal registration, governance, and compliance for civil society organisations.',
                'intro' => 'We assist NGOs, foundations, development partners, and civil society organisations with registration, governance, compliance, employment, grants, partnerships, tax, reporting, and regulatory engagement.',
                'image_url' => 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
                'tags' => ['Registration', 'Governance', 'Compliance'],
                'challenges' => ['Entity registration and renewal', 'Board governance and policies', 'Grant and partnership agreements', 'Employment and consultant arrangements', 'Tax and reporting compliance', 'Regulatory reviews and investigations'],
                'services' => ['NGO registration support', 'Governance advisory', 'Policy and contract drafting', 'Employment support', 'Compliance reviews', 'Regulatory representation'],
                'relevant_areas' => [
                    ['title' => 'Regulatory Compliance', 'href' => '/practice-areas/regulatory-compliance'],
                    ['title' => 'Employment & Labour Law', 'href' => '/practice-areas/employment-labour'],
                    ['title' => 'Human Rights', 'href' => '/practice-areas/human-rights'],
                ],
            ],
        ];

        foreach ($sectors as $index => $sector) {
            Sector::updateOrCreate(
                ['slug' => $sector['slug']],
                $sector + [
                    'sort_order' => $index + 1,
                    'is_active' => true,
                ]
            );
        }
    }

    private function seedMemberships(): void
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

    private function seedContentBlocks(): void
    {
        $blocks = [
            ['home_intro_1', 'Homepage Intro Paragraph 1', 'Home', 'Trill & Associates Advocates is a modern Tanzanian law firm providing strategic, practical, and commercially sound legal solutions to businesses, institutions, investors, and private clients.'],
            ['home_intro_2', 'Homepage Intro Paragraph 2', 'Home', 'Based on the 18th Floor of Rita Tower in Dar-es-Salaam, we deliver high-quality legal representation across specialist practice areas throughout Tanzania, East Africa, and beyond.'],
            ['home_intro_eyebrow', 'Home Intro Eyebrow', 'Home', 'Who We Are'],
            ['home_intro_heading', 'Home Intro Heading', 'Home', 'Strategic Legal Counsel'],
            ['home_intro_subheading', 'Home Intro Subheading', 'Home', 'For Businesses & Individuals'],
            ['home_phone_label', 'Home Phone Label', 'Home', 'Call Us Today'],
            ['home_practice_eyebrow', 'Home Practice Eyebrow', 'Home', 'What We Do'],
            ['home_practice_heading', 'Home Practice Heading', 'Home', 'Areas of Practice'],
            ['home_practice_button', 'Home Practice Button', 'Home', 'View All Practice Areas'],
            ['practice_intro', 'Practice Areas Intro Paragraph', 'Practice Areas', 'Comprehensive legal services across specialised practice areas with expert guidance for every legal challenge your business or personal matter may present.'],
            ['practice_hero_eyebrow', 'Practice Page Hero Eyebrow', 'Practice Areas', 'What We Do'],
            ['practice_hero_heading', 'Practice Page Hero Heading', 'Practice Areas', 'Practice Areas &'],
            ['practice_hero_subheading', 'Practice Page Hero Subheading', 'Practice Areas', 'Sectors Served'],
            ['practice_hero_text', 'Practice Page Hero Text', 'Practice Areas', '17 specialised practice areas and 8 industry sectors, with comprehensive legal expertise covering every aspect of Tanzanian and international law.'],
            ['practice_breadcrumb', 'Practice Breadcrumb Label', 'Practice Areas', 'Practice Areas'],
            ['practice_grid_eyebrow', 'Practice Grid Eyebrow', 'Practice Areas', 'Our Expertise'],
            ['practice_grid_heading', 'Practice Grid Heading', 'Practice Areas', 'Practice Areas'],
            ['practice_grid_text', 'Practice Grid Text', 'Practice Areas', 'From corporate governance to human rights, our practice covers the full spectrum of legal needs for businesses, institutions, and individuals in Tanzania.'],
            ['practice_card_link_label', 'Practice Card Link Label', 'Practice Areas', 'Learn More'],
            ['practice_sectors_eyebrow', 'Practice Sectors Eyebrow', 'Practice Areas', 'Industry Focus'],
            ['practice_sectors_heading', 'Practice Sectors Heading', 'Practice Areas', 'Sectors & Industries'],
            ['practice_sectors_text', 'Practice Sectors Text', 'Practice Areas', 'Our sector-based approach means we understand not just the law, but the commercial context and unique regulatory landscape of the industries you operate in.'],
            ['practice_sector_card_label', 'Practice Sector Card Link Label', 'Practice Areas', 'Explore'],
            ['practice_cta_eyebrow', 'Practice CTA Eyebrow', 'Practice Areas', 'Get Started'],
            ['practice_cta_heading', 'Practice CTA Heading', 'Practice Areas', 'Not Sure Which Service'],
            ['practice_cta_subheading', 'Practice CTA Subheading', 'Practice Areas', 'You Need?'],
            ['practice_cta_text', 'Practice CTA Text', 'Practice Areas', 'Contact our team and we will connect you with the right specialist for your specific legal matter, at no obligation.'],
            ['practice_cta_primary', 'Practice CTA Primary Label', 'Practice Areas', 'Book a Consultation'],
            ['practice_cta_secondary', 'Practice CTA Secondary Label', 'Practice Areas', 'Call: +255 718 694 863'],
            ['sectors_intro', 'Sectors Intro Paragraph', 'Sectors', 'Trill & Associates Advocates combines deep knowledge of Tanzanian law with commercial awareness of the specific challenges faced by businesses across different industries. Our sector-focused approach means we understand the regulatory requirements, commercial pressures, and legal risks unique to your industry.'],
            ['sectors_breadcrumb', 'Sectors Breadcrumb Label', 'Sectors', 'Industry Sectors'],
            ['sectors_hero_eyebrow', 'Sectors Hero Eyebrow', 'Sectors', 'Our Sectors'],
            ['sectors_hero_heading', 'Sectors Hero Heading', 'Sectors', 'Industry Sectors'],
            ['sectors_hero_text', 'Sectors Hero Text', 'Sectors', 'Deep commercial awareness across Tanzania\'s key industries. We understand your sector\'s regulatory landscape and commercial realities.'],
            ['sectors_card_link_label', 'Sectors Card Link Label', 'Sectors', 'Explore this sector'],
            ['sectors_cta_heading', 'Sectors CTA Heading', 'Sectors', 'Don\'t see your sector listed?'],
            ['sectors_cta_text', 'Sectors CTA Text', 'Sectors', 'We advise clients across all sectors of the Tanzanian economy. Contact us to discuss how we can support your specific industry needs.'],
            ['sectors_cta_primary', 'Sectors CTA Primary Label', 'Sectors', 'Book a Consultation'],
            ['sectors_cta_secondary', 'Sectors CTA Secondary Label', 'Sectors', 'Send an Enquiry'],
            ['home_sectors_eyebrow', 'Home Sectors Eyebrow', 'Home', 'Industries We Serve'],
            ['home_sectors_heading', 'Home Sectors Heading', 'Home', 'Sector Knowledge &'],
            ['home_sectors_subheading', 'Home Sectors Subheading', 'Home', 'Commercial Depth'],
            ['home_sectors_button', 'Home Sectors Button', 'Home', 'View All Sectors'],
            ['home_why_eyebrow', 'Home Why Choose Eyebrow', 'Home', 'Why Choose Us'],
            ['home_why_heading', 'Home Why Choose Heading', 'Home', 'Your Trusted Legal'],
            ['home_why_subheading', 'Home Why Choose Subheading', 'Home', 'Partners in Tanzania'],
            ['home_why_intro', 'Home Why Choose Intro', 'Home', 'We combine deep Tanzanian legal expertise with an international perspective, delivering practical, commercially sound advice that helps clients navigate complex legal challenges with confidence.'],
            ['home_why_button', 'Home Why Choose Button', 'Home', 'Our Story'],
            ['home_why_us_json', 'Home Why Choose Cards JSON', 'Home', json_encode([
                ['title' => 'Commercially Minded', 'desc' => 'We understand business. Our advice is practical, commercially sound, and focused on outcomes, not just legal theory.'],
                ['title' => 'Client-First Approach', 'desc' => 'We maintain an unwavering focus on your interests, providing personalised strategies tailored to your unique situation.'],
                ['title' => 'Cross-Border Reach', 'desc' => 'While rooted in Dar-es-Salaam, our network extends globally, enabling us to handle cross-border matters with ease.'],
                ['title' => 'Highest Ethical Standards', 'desc' => 'Licensed Notaries Public and Commissioners for Oath. We hold ourselves to the highest standards of integrity.'],
            ], JSON_PRETTY_PRINT)],
            ['home_team_eyebrow', 'Home Team Eyebrow', 'Home', 'The People Behind the Firm'],
            ['home_team_heading', 'Home Team Heading', 'Home', 'Meet Our'],
            ['home_team_subheading', 'Home Team Subheading', 'Home', 'Legal Team'],
            ['home_team_button', 'Home Team Button', 'Home', 'View Full Team'],
            ['home_trust_items_json', 'Home Trust Items JSON', 'Home', json_encode([
                ['label' => 'Licensed Advocates', 'desc' => 'Registered with the Advocates Act of Tanzania'],
                ['label' => 'Notaries Public', 'desc' => 'Authorised notarial services for international documents'],
                ['label' => 'Commissioners for Oath', 'desc' => 'Certified oath administration and affidavit services'],
                ['label' => 'TLS Members', 'desc' => 'Active members of the Tanganyika Law Society'],
            ], JSON_PRETTY_PRINT)],
            ['home_insights_eyebrow', 'Home Insights Eyebrow', 'Home', 'Knowledge & Thought Leadership'],
            ['home_insights_heading', 'Home Insights Heading', 'Home', 'Legal Insights'],
            ['home_insights_subheading', 'Home Insights Subheading', 'Home', '& Publications'],
            ['home_insights_button', 'Home Insights Button', 'Home', 'View All Insights'],
            ['home_insights_empty', 'Home Insights Empty Text', 'Home', 'Latest insights coming soon.'],
            ['home_cta_eyebrow', 'Home CTA Eyebrow', 'Home', 'Ready to Begin?'],
            ['home_cta_heading', 'Home CTA Heading', 'Home', 'Need Expert Legal Advice?'],
            ['home_cta_text', 'Home CTA Text', 'Home', 'Schedule a consultation with one of our specialist advocates. We are ready to help you navigate your legal challenges with confidence and clarity.'],
            ['about_hero_text', 'About Page Hero Text', 'About', 'For over 15 years, Trill & Associates Advocates has been at the forefront of Tanzania\'s legal landscape, championing justice, protecting rights, and delivering excellence.'],
            ['about_hero_eyebrow', 'About Hero Eyebrow', 'About', 'Our Story'],
            ['about_hero_heading', 'About Hero Heading', 'About', 'About Our'],
            ['about_hero_subheading', 'About Hero Subheading', 'About', 'Firm'],
            ['about_mission_eyebrow', 'About Mission Eyebrow', 'About', 'Our Mission'],
            ['about_mission_heading', 'About Mission Heading', 'About', 'Dual Obligation to Justice'],
            ['about_mission_text', 'About Mission Text', 'About', 'We recognize our dual obligation to vigorously represent our clients and to maintain the honor and dignity of our justice system. Our attorneys are trustworthy members of the bar who prioritize their clients\' well-being above all else.'],
            ['about_vision_eyebrow', 'About Vision Eyebrow', 'About', 'Our Vision'],
            ['about_vision_heading', 'About Vision Heading', 'About', 'Reliable Legal Excellence'],
            ['about_vision_text', 'About Vision Text', 'About', 'Delivering reliable legal services and assistance tailored to our clients\' requirements within every area of practice, locally in Tanzania and globally, with the precision and dedication that distinguishes Trill & Associates Advocates.'],
            ['about_values_eyebrow', 'About Values Eyebrow', 'About', 'What Guides Us'],
            ['about_values_heading', 'About Values Heading', 'About', 'Our Core Values'],
            ['about_values_intro', 'About Values Intro', 'About', 'These principles form the bedrock of our practice and guide every interaction with our clients, courts, and community.'],
            ['about_values_json', 'About Values Cards JSON', 'About', json_encode([
                ['title' => 'Integrity', 'desc' => 'We hold ourselves to the highest ethical standards, ensuring transparency and honesty in every client relationship and legal proceeding.', 'img' => 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=600&q=80'],
                ['title' => 'Excellence', 'desc' => 'Our pursuit of legal excellence drives every decision we make, from case strategy to courtroom advocacy and client communication.', 'img' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80'],
                ['title' => 'Client Focus', 'desc' => 'Our clients are at the heart of everything we do. We listen deeply, communicate clearly, and fight vigorously for their best interests.', 'img' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'],
                ['title' => 'Global Perspective', 'desc' => 'Rooted in Tanzania, our reach is global. We bring an international perspective to every matter, serving clients across borders and industries.', 'img' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'],
                ['title' => 'Innovation', 'desc' => 'We embrace innovative legal thinking and modern approaches to solve complex problems efficiently and effectively for our clients.', 'img' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'],
                ['title' => 'Justice', 'desc' => 'We are committed to upholding justice, not just for our clients, but for the broader community and the rule of law in Tanzania.', 'img' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80'],
            ], JSON_PRETTY_PRINT)],
            ['about_timeline_eyebrow', 'About Timeline Eyebrow', 'About', 'Our Journey'],
            ['about_timeline_heading', 'About Timeline Heading', 'About', 'A Legacy of'],
            ['about_timeline_subheading', 'About Timeline Subheading', 'About', 'Excellence'],
            ['about_timeline_intro', 'About Timeline Intro', 'About', 'From our founding in 2008 to our position today, every milestone has been built on trust, expertise, and careful legal service.'],
            ['about_milestones_json', 'About Milestones JSON', 'About', json_encode([
                ['year' => '2008', 'event' => 'Firm Founded', 'desc' => 'Trill & Associates Advocates established in Dar-es-Salaam with a mission to deliver world-class legal services.'],
                ['year' => '2012', 'event' => 'International Expansion', 'desc' => 'Extended our practice to handle cross-border transactions and international legal matters for multinational clients.'],
                ['year' => '2015', 'event' => 'Rita Tower Headquarters', 'desc' => 'Moved to our prestigious offices on the 18th Floor of Rita Tower, Makunganya/Simu Street, Dar-es-Salaam.'],
                ['year' => '2018', 'event' => '10 Years of Practice', 'desc' => 'Marked a decade of legal service across our core practice areas.'],
                ['year' => '2023', 'event' => 'Digital Transformation', 'desc' => 'Embraced legal technology to enhance client service delivery and streamline our processes.'],
            ], JSON_PRETTY_PRINT)],
            ['about_team_eyebrow', 'About Team Eyebrow', 'About', 'The People Behind The Firm'],
            ['about_team_heading', 'About Team Heading', 'About', 'Our Legal Team'],
            ['about_team_intro', 'About Team Intro', 'About', 'Our team of dedicated advocates brings expertise, passion, and a client-first mindset to every case.'],
            ['about_team_json', 'About Team Preview JSON', 'About', json_encode([
                ['name' => 'Managing Partner', 'role' => 'Senior Advocate', 'initials' => 'MP', 'bio' => 'A seasoned advocate with extensive experience in corporate law, commercial transactions, and dispute resolution across East Africa.', 'areas' => ['Corporate Law', 'Commercial Disputes', 'Arbitration']],
                ['name' => 'Head of Litigation', 'role' => 'Senior Advocate', 'initials' => 'HL', 'bio' => 'Specialising in high-stakes litigation before courts and tribunals.', 'areas' => ['Civil Litigation', 'Constitutional Law', 'Human Rights']],
                ['name' => 'IP Counsel', 'role' => 'Associate Advocate', 'initials' => 'IP', 'bio' => 'Focused on intellectual property, trademarks, copyright, and technology matters.', 'areas' => ['Intellectual Property', 'Entertainment Law', 'Technology Law']],
                ['name' => 'Tax & Finance Partner', 'role' => 'Senior Advocate', 'initials' => 'TF', 'bio' => 'A specialist in taxation and banking law, providing strategic advice on complex tax and finance matters.', 'areas' => ['Tax Law', 'Banking & Finance', 'Oil & Gas']],
            ], JSON_PRETTY_PRINT)],
            ['about_cta_heading', 'About CTA Heading', 'About', 'Ready to Work With Us?'],
            ['about_cta_text', 'About CTA Text', 'About', 'Let our experienced team of advocates guide you through your legal challenges with confidence and care.'],
            ['about_cta_primary', 'About CTA Primary Label', 'About', 'Book a Consultation'],
            ['about_cta_secondary', 'About CTA Secondary Label', 'About', 'Call: +255 718 694 863'],
            ['contact_hero_text', 'Contact Page Hero Text', 'Contact', 'Whether you need legal advice, wish to schedule a consultation, or have questions about our services, we are here to help. Reach out to us today.'],
            ['consultation_hero_eyebrow', 'Consultation Hero Eyebrow', 'Consultation', 'Get Started'],
            ['consultation_hero_heading', 'Consultation Hero Heading', 'Consultation', 'Book a'],
            ['consultation_hero_subheading', 'Consultation Hero Subheading', 'Consultation', 'Consultation'],
            ['consultation_hero_text', 'Consultation Page Hero Text', 'Consultation', 'Take the first step. Complete the form below and one of our specialist advocates will be in touch within 24 hours to schedule your consultation.'],
            ['consultation_benefits_json', 'Consultation Benefits JSON', 'Consultation', json_encode([
                ['title' => 'Right Specialist', 'desc' => 'You will be matched with the advocate whose expertise is most relevant to your specific legal matter.'],
                ['title' => 'Confidential', 'desc' => 'Everything you share with us is protected by attorney-client privilege. Your matter is treated with complete discretion.'],
                ['title' => 'Rapid Response', 'desc' => 'We respond to all consultation requests within 24 hours during business days. Urgent matters are prioritised.'],
                ['title' => 'No Obligation', 'desc' => 'Your initial consultation is about understanding your matter. There is no obligation to engage us further.'],
            ], JSON_PRETTY_PRINT)],
            ['consultation_form_eyebrow', 'Consultation Form Eyebrow', 'Consultation', 'Consultation Request'],
            ['consultation_form_heading', 'Consultation Form Heading', 'Consultation', 'Tell Us About Your Matter'],
            ['consultation_form_note', 'Consultation Form Note', 'Consultation', 'All information is treated with strict confidentiality. Fields marked * are required.'],
            ['consultation_disclaimer_label', 'Consultation Disclaimer Label', 'Consultation', 'Confidentiality Notice:'],
            ['consultation_disclaimer_text', 'Consultation Disclaimer Text', 'Consultation', 'The information you provide is protected by legal privilege and will be used solely to prepare for your consultation. Submitting this form does not create an attorney-client relationship. A formal engagement will only commence upon execution of a retainer agreement.'],
            ['consultation_submit_label', 'Consultation Submit Label', 'Consultation', 'Request Consultation'],
            ['consultation_steps_heading', 'Consultation Steps Heading', 'Consultation', 'How It Works'],
            ['consultation_steps_json', 'Consultation Steps JSON', 'Consultation', json_encode([
                ['number' => '01', 'title' => 'Submit Your Request', 'desc' => 'Complete the form with details about your legal matter and preferred contact method.'],
                ['number' => '02', 'title' => 'We Review & Match', 'desc' => 'Our team reviews your request and identifies the most suitable advocate within 24 hours.'],
                ['number' => '03', 'title' => 'Consultation Scheduled', 'desc' => 'We contact you to schedule a consultation at a time that suits you.'],
                ['number' => '04', 'title' => 'Your Consultation', 'desc' => 'Meet with your specialist advocate to discuss your matter and determine the best legal strategy.'],
            ], JSON_PRETTY_PRINT)],
            ['consultation_direct_heading', 'Consultation Direct Contact Heading', 'Consultation', 'Prefer to Call Directly?'],
            ['consultation_call_label', 'Consultation Call Label', 'Consultation', 'Call Us'],
            ['consultation_email_label', 'Consultation Email Label', 'Consultation', 'Email Us'],
            ['consultation_hours_label', 'Consultation Hours Label', 'Consultation', 'Office Hours'],
            ['consultation_credentials_title', 'Consultation Credentials Title', 'Consultation', 'Licensed Notaries Public'],
            ['consultation_credentials_subtitle', 'Consultation Credentials Subtitle', 'Consultation', '& Commissioners for Oath'],
            ['consultation_credentials_text', 'Consultation Credentials Text', 'Consultation', 'Members of the Tanganyika Law Society'],
            ['site_phone', 'Site Phone Number', 'Site Settings', '+255 718 694 863'],
            ['site_email', 'Site Email Address', 'Site Settings', 'info@trill.co.tz'],
            ['site_address', 'Site Address', 'Site Settings', "18th Floor, Rita Tower\nMkunyanga - Simu Street\nP.O. Box 5823\nDar-es-Salaam, Tanzania"],
            ['site_hours', 'Site Office Hours', 'Site Settings', "Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM"],
            ['footer_cta_title', 'Footer CTA Title', 'Footer', 'Ready to Work with Us?'],
            ['footer_cta_text', 'Footer CTA Text', 'Footer', 'Our specialist advocates are ready to help. Get in touch today.'],
            ['footer_about', 'Footer About Text', 'Footer', 'A modern Tanzanian law firm providing strategic, practical, and commercially sound legal solutions to businesses, institutions, investors, and private clients.'],
            ['footer_license', 'Footer License Text', 'Footer', 'Licensed Notaries Public & Commissioners for Oath. Members of the Tanganyika Law Society.'],
        ];

        foreach ($blocks as [$key, $label, $group, $value]) {
            ContentBlock::updateOrCreate(['key' => $key], compact('label', 'group', 'value'));
        }
    }
}
