import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

const practiceAreas = [
    {
        title:   'Corporate & Commercial Law',
        desc:    'Comprehensive legal counsel for businesses — incorporation, governance, M&A, commercial contracts, joint ventures, and shareholder agreements.',
        href:    '/practice-areas/corporate-commercial',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        ),
    },
    {
        title:   'Dispute Resolution',
        desc:    'Vigorous civil and commercial litigation before all levels of Tanzanian courts — from subordinate courts to the High Court and Court of Appeal.',
        href:    '/practice-areas/dispute-resolution',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
        ),
    },
    {
        title:   'Alternative Dispute Resolution',
        desc:    'Arbitration, mediation, and negotiation services — resolving disputes efficiently, commercially, and confidentially outside the court system.',
        href:    '/practice-areas/alternative-dispute-resolution',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
    },
    {
        title:   'Employment & Labour Law',
        desc:    'Advisory and representation for employers and employees — contracts, workplace policies, disciplinary procedures, and labour dispute resolution.',
        href:    '/practice-areas/employment-labour',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        title:   'Intellectual Property',
        desc:    'Trademarks, patents, copyrights, and trade secrets — protecting your innovations and creative assets across Tanzania and internationally.',
        href:    '/practice-areas/intellectual-property',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title:   'Real Estate & Conveyancing',
        desc:    'Land acquisition, title registration, conveyancing, leases, and real estate development transactions — across mainland Tanzania and Zanzibar.',
        href:    '/practice-areas/real-estate',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
    {
        title:   'Regulatory Compliance',
        desc:    'Navigating Tanzania\'s complex regulatory landscape — business licencing, sector-specific compliance, and government relations.',
        href:    '/practice-areas/regulatory-compliance',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
            </svg>
        ),
    },
    {
        title:   'Debt Recovery & Enforcement',
        desc:    'Efficient debt collection, receivership management, insolvency proceedings, and enforcement of judgments and awards.',
        href:    '/practice-areas/debt-recovery',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75" />
            </svg>
        ),
    },
    {
        title:   'Investment & Business Advisory',
        desc:    'Strategic legal support for foreign and domestic investors entering or expanding within Tanzania — structuring, due diligence, and regulatory approvals.',
        href:    '/practice-areas/investment-advisory',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        ),
    },
    {
        title:   'Banking & Finance',
        desc:    'Banking regulations, loan agreements, financial instruments, debt restructuring, and compliance advisory for financial institutions and their clients.',
        href:    '/practice-areas/banking-finance',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
        ),
    },
    {
        title:   'Taxation',
        desc:    'Tax planning, compliance, tax disputes with the Tanzania Revenue Authority, and strategic advisory for individuals, corporates, and multinationals.',
        href:    '/practice-areas/taxation',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zM8.25 6h7.5v2.25h-7.5V6z" />
            </svg>
        ),
    },
    {
        title:   'Immigration',
        desc:    'Work permits, residence permits, investor visas, citizenship matters, and immigration compliance frameworks for individuals and organisations.',
        href:    '/practice-areas/immigration',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
            </svg>
        ),
    },
    {
        title:   'Oil & Gas',
        desc:    'Specialist legal services for Tanzania\'s energy sector — exploration agreements, production sharing contracts, and regulatory compliance.',
        href:    '/practice-areas/oil-gas',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
    {
        title:   'Entertainment Law',
        desc:    'Legal services for artists, musicians, producers, and entertainment companies — contracts, royalties, rights management, and IP protection.',
        href:    '/practice-areas/entertainment',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
        ),
    },
    {
        title:   'Insurance Law',
        desc:    'Insurance regulatory compliance, policy interpretation, claims management, and risk mitigation strategies for insurers and policyholders.',
        href:    '/practice-areas/insurance',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        title:   'Cyber-crime Law',
        desc:    'Digital offences, data privacy compliance, cybersecurity legal frameworks, electronic evidence, and online fraud matters.',
        href:    '/practice-areas/cyber-crime',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        title:   'Human Rights',
        desc:    'Defending fundamental freedoms through litigation, advocacy, and advisory services for individuals, communities, and organisations.',
        href:    '/practice-areas/human-rights',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
            </svg>
        ),
    },
]

const sectors = [
    {
        title:  'Energy & Infrastructure',
        desc:   'Oil, gas, power generation, mining, and large-scale infrastructure development projects across Tanzania.',
        href:   '/sectors/energy-infrastructure',
        img:    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Real Estate & Construction',
        desc:   'Developers, contractors, investors, and financial institutions in Tanzania\'s property and construction sector.',
        href:   '/sectors/real-estate-construction',
        img:    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Startups & Technology',
        desc:   'Legal foundations for early-stage companies, tech ventures, and digital businesses operating in East Africa.',
        href:   '/sectors/startups-technology',
        img:    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'NGOs & Non-Profit Organizations',
        desc:   'Registration, compliance, governance, and legal support for development organisations and foundations.',
        href:   '/sectors/ngos-nonprofits',
        img:    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Trade & Distribution',
        desc:   'Import/export, distribution agreements, trade finance, and international trade compliance.',
        href:   '/sectors/trade-distribution',
        img:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Professional Services',
        desc:   'Legal, accounting, consulting, and professional services firms operating in Tanzania.',
        href:   '/sectors/professional-services',
        img:    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Employment-Intensive Businesses',
        desc:   'Manufacturers, agri-businesses, and service providers with large workforces requiring complex HR legal support.',
        href:   '/sectors/employment-businesses',
        img:    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    },
    {
        title:  'Brands, Media & Creative Enterprises',
        desc:   'Media companies, advertising agencies, artists, and creative enterprises in need of specialist IP and commercial advice.',
        href:   '/sectors/brands-media',
        img:    'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=600&q=80',
    },
]

export default function PracticeAreas() {
    return (
        <MainLayout>
            <Seo
                title="Practice Areas – Trill & Associates Advocates"
                description="Explore the full range of legal services at Trill & Associates Advocates — corporate law, dispute resolution, real estate, intellectual property, employment law, and more in Tanzania."
            />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
                    alt="Legal practice"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/85 to-navy-900/60" />
                <div className="absolute inset-0 bg-navy-950/50" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">What We Do</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Practice Areas &amp;<br />
                            <span className="text-gold-400 italic">Sectors Served</span>
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
                            17 specialised practice areas and 8 industry sectors — comprehensive legal expertise
                            covering every aspect of Tanzanian and international law.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">Practice Areas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRACTICE AREAS GRID ── */}
            <section className="py-24 bg-white" id="practice-areas">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Expertise</p>
                        <h2 className="section-title">
                            17 Practice Areas
                        </h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            From corporate governance to human rights, our practice covers the full spectrum of
                            legal needs for businesses, institutions, and individuals in Tanzania.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practiceAreas.map((area) => (
                            <Link
                                key={area.title}
                                href={area.href}
                                className="group bg-white border border-gray-100 rounded-sm p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
                            >
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                                <div className="w-12 h-12 rounded-sm bg-navy-950 text-gold-400 flex items-center justify-center mb-5 p-2.5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    {area.icon}
                                </div>
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-3 leading-snug group-hover:text-gold-700 transition-colors duration-300">
                                    {area.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                                    {area.desc}
                                </p>
                                <span className="text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 mt-auto">
                                    Learn More
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30" />

            {/* ── SECTORS SECTION ── */}
            <section className="py-24 bg-gray-50" id="sectors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Industry Focus</p>
                        <h2 className="section-title">
                            Sectors &amp; Industries
                        </h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Our sector-based approach means we understand not just the law, but the commercial
                            context and unique regulatory landscape of the industries you operate in.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sectors.map((sector) => (
                            <Link
                                key={sector.title}
                                href={sector.href}
                                className="group relative rounded-sm overflow-hidden bg-navy-950 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute inset-0">
                                    <img src={sector.img} alt={sector.title} className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300" />
                                </div>
                                <div className="relative z-10 p-6 h-full flex flex-col min-h-48">
                                    <div className="flex-1">
                                        <h3 className="font-serif text-white text-lg font-semibold mb-2 leading-snug group-hover:text-gold-300 transition-colors duration-300">
                                            {sector.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {sector.desc}
                                        </p>
                                    </div>
                                    <span className="text-gold-400 text-xs font-medium tracking-wider uppercase flex items-center gap-1 mt-5 group-hover:gap-2 transition-all duration-300">
                                        Explore
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-navy-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">Get Started</p>
                    <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-5">
                        Not Sure Which Service<br />
                        <span className="text-gold-400 italic">You Need?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Contact our team and we will connect you with the right specialist for your specific legal matter — at no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="btn-primary">Book a Free Consultation</Link>
                        <a href="tel:+255738600670" className="btn-outline">Call: +255 738 600 670</a>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
