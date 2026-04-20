import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

const sectors = [
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

export default function Sectors() {
    return (
        <MainLayout>
            <Seo
                title="Industry Sectors – Trill & Associates Advocates"
                description="Trill & Associates Advocates serves clients across key industry sectors in Tanzania — energy, startups & technology, banking, real estate, healthcare, and more."
            />

            {/* ── HERO ── */}
            <section className="relative min-h-[45vh] flex items-end overflow-hidden bg-navy-950">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm mb-5">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">Industry Sectors</span>
                        </div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <span className="h-px w-10 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">Our Sectors</span>
                        </div>
                        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                            Industry Sectors
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
                            Deep commercial awareness across Tanzania's key industries. We understand your sector's regulatory landscape and commercial realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Trill &amp; Associates Advocates combines deep knowledge of Tanzanian law with genuine commercial awareness of the specific challenges faced by businesses across different industries. Our sector-focused approach means we understand the regulatory requirements, commercial pressures, and legal risks unique to your industry — not just the general law.
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
                                className="group relative overflow-hidden rounded-sm bg-navy-950 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                            >
                                {/* Background image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={sector.img}
                                        alt={sector.title}
                                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
                                </div>

                                {/* Gold left accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 p-8">
                                    <div className="mb-6">
                                        <h2 className="font-serif text-white text-2xl font-bold mb-2 group-hover:text-gold-300 transition-colors">
                                            {sector.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {sector.tagline}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {sector.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-gold-400 border border-gold-500/30 px-2.5 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all">
                                        <span>Explore this sector</span>
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

            {/* ── CTA ── */}
            <section className="py-16 bg-navy-950">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-white text-3xl font-bold mb-4">
                        Don't see your sector listed?
                    </h2>
                    <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
                        We advise clients across all sectors of the Tanzanian economy. Contact us to discuss how we can support your specific industry needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="btn-primary">Book a Consultation</Link>
                        <Link href="/contact" className="btn-outline">Send an Enquiry</Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
