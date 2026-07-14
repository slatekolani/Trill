import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'
import { block } from '@/lib/content'

interface SectorCard {
    id?: string
    slug: string
    title: string
    tagline: string
    img?: string | null
    image_url?: string | null
    tags: string[]
}

interface Props {
    sectors?: SectorCard[]
    contentBlocks?: Record<string, string>
}

const fallbackSectors: SectorCard[] = [
    {
        slug:    'energy-infrastructure',
        title:   'Energy & Infrastructure',
        tagline: 'Legal support for Tanzania\'s energy sector and infrastructure projects',
        img:     'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
        tags:    ['Oil & Gas', 'Project Finance', 'Regulatory Licencing'],
    },
    {
        slug:    'startups-technology',
        title:   'Startups & Technology',
        tagline: 'Legal foundations for innovators and digital businesses in East Africa',
        img:     'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        tags:    ['IP Protection', 'Investment Docs', 'Data Protection'],
    },
    {
        slug:    'financial-services',
        title:   'Financial Services',
        tagline: 'Regulatory and transactional legal support for banks, fintechs, and investors',
        img:     'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
        tags:    ['Banking Law', 'Fintech Regulation', 'Capital Markets'],
    },
    {
        slug:    'real-estate-construction',
        title:   'Real Estate & Construction',
        tagline: 'End-to-end legal services for property developers, investors, and contractors',
        img:     'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        tags:    ['Conveyancing', 'Construction Contracts', 'Land Disputes'],
    },
    {
        slug:    'agriculture-agribusiness',
        title:   'Agriculture & Agribusiness',
        tagline: 'Legal support for Tanzania\'s agricultural sector and rural enterprises',
        img:     'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
        tags:    ['Land Rights', 'Agri Investment', 'Export Compliance'],
    },
    {
        slug:    'tourism-hospitality',
        title:   'Tourism & Hospitality',
        tagline: 'Specialist legal advice for hotels, lodges, tour operators, and investors',
        img:     'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80',
        tags:    ['Licencing', 'Concessions', 'Employment Law'],
    },
    {
        slug:    'mining-natural-resources',
        title:   'Mining & Natural Resources',
        tagline: 'Comprehensive legal services for Tanzania\'s mining and extractive industries',
        img:     'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
        tags:    ['Mining Licences', 'JV Agreements', 'Environmental Law'],
    },
    {
        slug:    'ngo-development',
        title:   'NGOs & Development Sector',
        tagline: 'Legal registration, governance, and compliance for civil society organisations',
        img:     'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
        tags:    ['Registration', 'Governance', 'Compliance'],
    },
]

export default function Sectors({ sectors: managedSectors = [], contentBlocks = {} }: Props) {
    const sectors = managedSectors.length > 0 ? managedSectors : fallbackSectors

    return (
        <MainLayout>
            <Seo
                title="Industry Sectors – Trill & Associates Advocates"
                description="Trill & Associates Advocates serves clients across key industry sectors in Tanzania — energy, startups & technology, banking, real estate, healthcare, and more."
            />

            {/* ── HERO ── */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
                    alt="Industry sectors"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,19,19,0.82)_0%,rgba(36,19,19,0.44)_46%,rgba(36,19,19,0.10)_76%),linear-gradient(to_top,rgba(104,48,48,0.88)_0%,rgba(104,48,48,0.36)_44%,transparent_78%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm mb-5">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">{block(contentBlocks, 'sectors_breadcrumb', 'Industry Sectors')}</span>
                        </div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <span className="h-px w-10 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">{block(contentBlocks, 'sectors_hero_eyebrow', 'Our Sectors')}</span>
                        </div>
                        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                            {block(contentBlocks, 'sectors_hero_heading', 'Industry Sectors')}
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
                            {block(contentBlocks, 'sectors_hero_text', 'Deep commercial awareness across Tanzania\'s key industries. We understand your sector\'s regulatory landscape and commercial realities.')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTOR GRID ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {sectors.map((sector) => (
                            <Link
                                key={sector.slug}
                                href={`/sectors/${sector.slug}`}
                                className="group overflow-hidden rounded-sm bg-white border border-gold-200 shadow-sm hover:shadow-xl hover:border-gold-500 transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden bg-gold-100">
                                    <img
                                        src={sector.img ?? sector.image_url ?? 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80'}
                                        alt={sector.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#683030]/40 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <h2 className="font-serif text-white text-2xl font-bold drop-shadow-sm">
                                            {sector.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-7">
                                    <div className="mb-6">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {sector.tagline}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {sector.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-gold-700 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-gold-700 text-sm font-semibold group-hover:gap-3 transition-all">
                                        <span>{block(contentBlocks, 'sectors_card_link_label', 'Explore this sector')}</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </MainLayout>
    )
}
