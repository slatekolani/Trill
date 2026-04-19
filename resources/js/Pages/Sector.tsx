import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

interface Props {
    slug: string
}

const sectorData: Record<string, {
    title: string
    tagline: string
    heroImg: string
    intro: string
    challenges: string[]
    services: string[]
    relevantAreas: { title: string; href: string }[]
}> = {
    'energy-infrastructure': {
        title:   'Energy & Infrastructure',
        tagline: 'Legal support for Tanzania\'s energy sector and infrastructure projects',
        heroImg: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80',
        intro:   'Tanzania\'s energy and infrastructure sector is one of the fastest-growing in East Africa, driven by significant investments in natural gas, renewable energy, power generation, and large-scale infrastructure development. We provide specialist legal support to investors, developers, government entities, and financial institutions operating in this sector.',
        challenges: [
            'Complex regulatory approvals and licencing requirements',
            'Production sharing agreements and joint operating agreements',
            'Environmental and social compliance frameworks',
            'Project financing and security documentation',
            'Government contracts and concession agreements',
            'Land acquisition for project development',
        ],
        services: [
            'Oil & Gas contract advisory',
            'Power Purchase Agreements (PPAs)',
            'Project finance and security documentation',
            'Regulatory licencing and approvals',
            'Land acquisition and compensation',
            'Joint venture and consortium agreements',
            'Environmental law compliance',
            'Dispute resolution in energy matters',
        ],
        relevantAreas: [
            { title: 'Oil & Gas',                    href: '/practice-areas/oil-gas' },
            { title: 'Regulatory Compliance',        href: '/practice-areas/regulatory-compliance' },
            { title: 'Corporate & Commercial Law',   href: '/practice-areas/corporate-commercial' },
            { title: 'Real Estate & Conveyancing',   href: '/practice-areas/real-estate' },
        ],
    },
    'startups-technology': {
        title:   'Startups & Technology',
        tagline: 'Legal foundations for innovators and digital businesses in East Africa',
        heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
        intro:   'Tanzania\'s startup and technology ecosystem is growing rapidly. Early-stage companies and digital businesses face unique legal challenges — from structuring for investment to protecting intellectual property, navigating data protection regulations, and building commercial relationships. Our team understands the startup journey and provides practical, commercially minded legal support.',
        challenges: [
            'Choosing the right legal structure for investment',
            'IP protection for software, brands, and innovations',
            'Data protection and privacy compliance',
            'Founder agreements and equity arrangements',
            'Employment law for growing teams',
            'Technology and SaaS contract frameworks',
        ],
        services: [
            'Company incorporation and structuring',
            'Founders\' agreements and vesting schedules',
            'Investment documentation (SAFE notes, term sheets)',
            'IP registration and protection strategy',
            'Data protection compliance (PDPA Tanzania)',
            'Technology licensing and SaaS agreements',
            'Employment contracts for startup teams',
            'Commercial partnership agreements',
        ],
        relevantAreas: [
            { title: 'Corporate & Commercial Law',  href: '/practice-areas/corporate-commercial' },
            { title: 'Intellectual Property',       href: '/practice-areas/intellectual-property' },
            { title: 'Cyber-crime Law',             href: '/practice-areas/cyber-crime' },
            { title: 'Employment & Labour Law',     href: '/practice-areas/employment-labour' },
        ],
    },
}

const defaultSector = (slug: string) => ({
    title:   slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    tagline: 'Specialist legal support for this sector',
    heroImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
    intro:   'Trill & Associates Advocates provides specialist legal support to clients operating in this sector. Our team combines deep knowledge of Tanzanian law with genuine commercial awareness of the specific challenges and regulatory requirements faced by businesses in this industry.',
    challenges: [
        'Regulatory compliance and licencing',
        'Commercial contracts and dispute resolution',
        'Employment and labour law',
        'Corporate governance and compliance',
    ],
    services: [
        'Corporate and commercial advisory',
        'Regulatory compliance',
        'Employment law support',
        'Dispute resolution',
        'Contract drafting and review',
    ],
    relevantAreas: [
        { title: 'Corporate & Commercial Law', href: '/practice-areas/corporate-commercial' },
        { title: 'Regulatory Compliance',      href: '/practice-areas/regulatory-compliance' },
    ],
})

export default function Sector({ slug }: Props) {
    const sector = sectorData[slug] ?? defaultSector(slug)

    return (
        <MainLayout>
            <Head title={`${sector.title} — Trill & Associates Advocates`} />

            {/* ── HERO ── */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden">
                <img src={sector.heroImg} alt={sector.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
                <div className="absolute inset-0 bg-navy-950/50" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm mb-5">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <Link href="/practice-areas#sectors" className="text-gray-400 hover:text-gold-400 transition-colors">Sectors</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">{sector.title}</span>
                        </div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <span className="h-px w-10 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">Industry Sector</span>
                        </div>
                        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                            {sector.title}
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed">{sector.tagline}</p>
                    </div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        <div className="lg:col-span-2 space-y-14">
                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">Our Sector Expertise</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <p className="text-gray-600 text-lg leading-relaxed">{sector.intro}</p>
                            </div>

                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">Common Legal Challenges</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {sector.challenges.map((c) => (
                                        <div key={c} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-sm px-4 py-3">
                                            <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                                            </div>
                                            <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">How We Can Help</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <ul className="space-y-3">
                                    {sector.services.map((s) => (
                                        <li key={s} className="flex items-start gap-3 text-gray-600 text-base">
                                            <span className="text-gold-500 mt-0.5 text-lg leading-none">›</span> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gold-500 rounded-sm p-7 text-center">
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">Speak With a Specialist</h3>
                                <p className="text-navy-800 text-sm mb-5 leading-relaxed">
                                    Get legal advice tailored to the {sector.title} sector.
                                </p>
                                <Link href="/book-consultation" className="block w-full text-center bg-navy-950 hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide">
                                    Book a Consultation
                                </Link>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Relevant Practice Areas</h3>
                                <div className="space-y-2">
                                    {sector.relevantAreas.map((area) => (
                                        <Link key={area.href} href={area.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1">
                                            <span className="text-gold-500">›</span> {area.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-navy-950">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-white text-3xl font-bold mb-4">
                        Operating in the <span className="text-gold-400">{sector.title}</span> sector?
                    </h2>
                    <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
                        Contact us to speak with an advocate who understands the commercial and regulatory context of your industry.
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
