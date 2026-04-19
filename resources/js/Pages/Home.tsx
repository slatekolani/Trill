import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import HeroCarousel from '@/Components/HeroCarousel'
import CountUp from '@/Components/CountUp'

const practiceAreas = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        ),
        title: 'Corporate & Commercial Law',
        desc:  'Legal backbone for businesses — from incorporation and governance to M&A and complex commercial transactions.',
        href:  '/practice-areas/corporate-commercial',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: 'Dispute Resolution',
        desc:  'Vigorous litigation and strategic dispute management — before courts, tribunals, and arbitration panels.',
        href:  '/practice-areas/dispute-resolution',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'Intellectual Property',
        desc:  'Protecting your trademarks, patents, copyrights, and creative works across Tanzania and internationally.',
        href:  '/practice-areas/intellectual-property',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: 'Employment & Labour Law',
        desc:  'Advisory and representation for employers and employees on all aspects of Tanzanian employment law.',
        href:  '/practice-areas/employment-labour',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        ),
        title: 'Real Estate & Conveyancing',
        desc:  'Full-service property law — acquisition, title management, leases, and real estate transactions in Tanzania.',
        href:  '/practice-areas/real-estate',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        title: 'Debt Recovery & Enforcement',
        desc:  'Efficient debt recovery, insolvency proceedings, and enforcement strategies to protect your financial interests.',
        href:  '/practice-areas/debt-recovery',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
            </svg>
        ),
        title: 'Regulatory Compliance',
        desc:  'Navigating Tanzania\'s regulatory landscape — licencing, compliance frameworks, and government relations.',
        href:  '/practice-areas/regulatory-compliance',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        ),
        title: 'Investment & Business Advisory',
        desc:  'Strategic legal support for investors and businesses entering or expanding within the Tanzanian market.',
        href:  '/practice-areas/investment-advisory',
    },
]

const stats = [
    { target: 15,  suffix: '+',  label: 'Years of Excellence' },
    { target: 500, suffix: '+',  label: 'Cases Resolved'      },
    { target: 17,  suffix: '',   label: 'Practice Areas'      },
    { target: 100, suffix: '%',  label: 'Client Commitment'   },
]

const whyUs = [
    {
        title: 'Commercially Minded',
        desc:  'We understand business. Our advice is practical, commercially sound, and focused on outcomes — not just legal theory.',
    },
    {
        title: 'Client-First Approach',
        desc:  'We maintain an unwavering focus on your interests, providing personalised strategies tailored to your unique situation.',
    },
    {
        title: 'Cross-Border Reach',
        desc:  'While rooted in Dar-es-Salaam, our network extends globally — enabling us to handle cross-border matters with ease.',
    },
    {
        title: 'Highest Ethical Standards',
        desc:  'Licensed Notaries Public and Commissioners for Oath. We hold ourselves to the highest standards of integrity.',
    },
]

const sectors = [
    {
        title:  'Energy & Infrastructure',
        desc:   'Oil, gas, power generation, mining, and large-scale infrastructure projects.',
        href:   '/sectors/energy-infrastructure',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        title:  'Real Estate & Construction',
        desc:   'Developers, contractors, and investors in Tanzania\'s fast-growing property sector.',
        href:   '/sectors/real-estate-construction',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
    {
        title:  'Startups & Technology',
        desc:   'Legal foundations for early-stage companies, tech ventures, and digital businesses.',
        href:   '/sectors/startups-technology',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        title:  'NGOs & Non-Profits',
        desc:   'Registration, compliance, governance, and legal support for development organizations.',
        href:   '/sectors/ngos-nonprofits',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        title:  'Trade & Distribution',
        desc:   'Import/export, distribution agreements, and international trade compliance.',
        href:   '/sectors/trade-distribution',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
    {
        title:  'Brands, Media & Creative',
        desc:   'Legal services for media companies, advertising agencies, and creative enterprises.',
        href:   '/sectors/brands-media',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
        ),
    },
]

const trustItems = [
    { label: 'Licensed Advocates', desc: 'Registered with the Advocates Act of Tanzania' },
    { label: 'Notaries Public', desc: 'Authorised notarial services for international documents' },
    { label: 'Commissioners for Oath', desc: 'Certified oath administration and affidavit services' },
    { label: 'TLS Members', desc: 'Active members of the Tanganyika Law Society' },
]

interface HomeArticle {
    id: number; slug: string; title: string; excerpt: string
    category: string; hero_img: string | null; read_time: string; date: string
}
interface HomeTeamMember {
    id: number; name: string; role: string; initials: string; bio: string; avatar_url: string | null
}
interface Props {
    latestArticles: HomeArticle[]
    teamMembers:    HomeTeamMember[]
}

export default function Home({ latestArticles, teamMembers }: Props) {
    return (
        <MainLayout>
            <Head title="Home — Trill &amp; Associates Advocates" />

            {/* ── HERO CAROUSEL ── */}
            <HeroCarousel />

            {/* ── STATS BAR ── */}
            <section className="bg-gold-500 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-600/30">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col items-center py-2 px-4">
                                <span className="font-serif text-5xl font-bold text-navy-950 leading-none">
                                    <CountUp target={s.target} suffix={s.suffix} duration={2000} />
                                </span>
                                <span className="text-navy-800 text-xs font-semibold mt-2 uppercase tracking-[0.2em]">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FIRM INTRODUCTION ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Who We Are</p>
                            <h2 className="section-title mb-2">
                                Strategic Legal Counsel
                                <span className="block text-gold-500 italic">For Businesses &amp; Individuals</span>
                            </h2>
                            <span className="gold-line" />
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                Trill &amp; Associates Advocates is a modern Tanzanian law firm providing strategic, practical,
                                and commercially sound legal solutions to businesses, institutions, investors, and private clients.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-10">
                                Based on the 18th Floor of Rita Tower in Dar-es-Salaam, we have built a reputation for
                                delivering high-quality legal representation across 17 practice areas — serving clients
                                throughout Tanzania, East Africa, and beyond.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/about" className="btn-primary">
                                    About Our Firm
                                </Link>
                                <a href="tel:+255738600670" className="inline-flex items-center gap-3 text-navy-800 font-semibold hover:text-gold-600 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-normal">Call Us Today</p>
                                        <p>+255 738 600 670</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Visual collage */}
                        <div className="relative h-[520px] hidden lg:block">
                            <div className="absolute top-0 left-0 w-3/4 h-80 rounded-sm overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                                    alt="Legal expertise"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy-950/20" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-2/3 h-60 rounded-sm overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                                    alt="Client partnership"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy-950/15" />
                            </div>
                            <div className="absolute bottom-44 left-0 bg-gold-500 rounded-sm px-6 py-4 shadow-2xl z-10">
                                <p className="text-navy-950 font-serif font-bold text-3xl leading-none">2008</p>
                                <p className="text-navy-800 text-xs uppercase tracking-wider mt-1">Established</p>
                            </div>
                            <div className="absolute top-56 right-0 w-56 bg-navy-950 rounded-sm p-5 shadow-2xl z-10">
                                <svg className="w-6 h-6 text-gold-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-white font-serif text-sm leading-relaxed italic">
                                    "Delivering reliable legal services tailored to our clients' requirements."
                                </p>
                                <p className="text-gold-400 text-xs mt-3 tracking-wider uppercase">Our Vision</p>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-gold-400 rounded-sm opacity-25" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRACTICE AREAS ── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">What We Do</p>
                        <h2 className="section-title">Areas of Practice</h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Comprehensive legal services across 17 specialised practice areas — expert guidance
                            for every legal challenge your business or personal matter may present.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {practiceAreas.map((area) => (
                            <Link key={area.title} href={area.href} className="practice-card group">
                                <div className="inline-flex items-center justify-center w-13 h-13 rounded-sm bg-navy-950 text-gold-400 mb-5 p-3.5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    {area.icon}
                                </div>
                                <h3 className="font-serif text-base font-semibold text-navy-950 mb-3 leading-snug">
                                    {area.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {area.desc}
                                </p>
                                <span className="text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                                    Learn More
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/practice-areas" className="btn-primary">
                            View All 17 Practice Areas
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SECTORS / INDUSTRIES ── */}
            <section className="py-24 bg-navy-950 relative overflow-hidden">
                {/* Subtle bg texture */}
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">Industries We Serve</p>
                        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-2">
                            Sector Knowledge &amp;
                            <span className="block text-gold-400 italic">Commercial Depth</span>
                        </h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Our sector-based approach means we understand not just the law, but the commercial
                            realities and regulatory context of the industries our clients operate in.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {sectors.map((sector) => (
                            <Link
                                key={sector.title}
                                href={sector.href}
                                className="group bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 hover:border-gold-500/40 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-sm bg-gold-500/15 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    {sector.icon}
                                </div>
                                <h3 className="font-serif text-white text-lg font-semibold mb-2 group-hover:text-gold-300 transition-colors duration-300">
                                    {sector.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {sector.desc}
                                </p>
                                <span className="text-gold-400 text-xs font-medium tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                                    Explore
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/practice-areas" className="btn-outline">
                            View All Sectors
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE TRILL ── */}
            <section className="relative overflow-hidden">
                <div className="grid lg:grid-cols-2 min-h-[580px]">
                    <div className="relative min-h-72 lg:min-h-0 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80"
                            alt="Law library"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-transparent" />
                        <div className="absolute bottom-8 left-8 bg-gold-500 rounded-sm px-6 py-4 shadow-xl">
                            <p className="font-serif text-navy-950 font-bold text-3xl leading-none">
                                <CountUp target={15} suffix="+" duration={2000} />
                            </p>
                            <p className="text-navy-800 text-xs uppercase tracking-wider mt-1">Years of Excellence</p>
                        </div>
                    </div>

                    <div className="bg-navy-950 py-20 px-8 lg:px-16 flex flex-col justify-center">
                        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">Why Choose Us</p>
                        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
                            Your Trusted Legal
                            <span className="block text-gold-400 italic">Partners in Tanzania</span>
                        </h2>
                        <span className="block w-16 h-1 bg-gold-500 mt-4 mb-8" />
                        <p className="text-gray-400 leading-relaxed text-lg mb-10">
                            We combine deep Tanzanian legal expertise with an international perspective — delivering
                            practical, commercially sound advice that helps clients navigate complex legal challenges
                            with confidence.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5 mb-10">
                            {whyUs.map((item, i) => (
                                <div
                                    key={item.title}
                                    className="bg-white/5 border border-white/10 rounded-sm p-5 hover:bg-white/10 hover:border-gold-500/50 transition-all duration-300"
                                >
                                    <div className="w-9 h-9 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
                                        <span className="font-serif text-gold-400 font-bold">{i + 1}</span>
                                    </div>
                                    <h3 className="font-serif text-white text-base font-semibold mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/about" className="btn-outline self-start">Our Story</Link>
                    </div>
                </div>
            </section>

            {/* ── TEAM PREVIEW ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                        <div>
                            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">The People Behind the Firm</p>
                            <h2 className="section-title">Meet Our<br /><span className="text-gold-500 italic">Legal Team</span></h2>
                            <span className="gold-line" />
                        </div>
                        <Link href="/team" className="btn-primary self-start md:self-auto flex-shrink-0">
                            View Full Team
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <Link
                                key={member.id}
                                href={`/team/${member.id}`}
                                className="group bg-gray-50 border border-gray-100 rounded-sm p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="relative inline-block mb-5">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-gray-200 group-hover:border-gold-400 transition-colors duration-300">
                                        {member.avatar_url ? (
                                            <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-navy-950 flex items-center justify-center">
                                                <span className="font-serif text-white text-2xl font-bold">{member.initials}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="font-serif text-navy-950 text-base font-semibold leading-snug">{member.name}</h3>
                                <p className="text-gold-600 text-xs tracking-wider uppercase font-medium mt-1 mb-3 leading-tight">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TRUST & CREDENTIALS ── */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {trustItems.map((item) => (
                            <div key={item.label} className="flex flex-col items-center text-center p-5">
                                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-serif text-navy-950 text-sm font-semibold mb-1">{item.label}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LEGAL INSIGHTS PREVIEW ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                        <div>
                            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Knowledge &amp; Thought Leadership</p>
                            <h2 className="section-title">Legal Insights<br /><span className="text-gold-500 italic">&amp; Publications</span></h2>
                            <span className="gold-line" />
                        </div>
                        <Link href="/insights" className="btn-primary self-start md:self-auto flex-shrink-0">
                            View All Insights
                        </Link>
                    </div>

                    {latestArticles.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-sm border border-gray-100">
                            <p className="text-gray-400 text-sm">Latest insights coming soon.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {latestArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/insights/${article.slug}`}
                                    className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative h-44 overflow-hidden bg-navy-950">
                                        {article.hero_img && (
                                            <img
                                                src={article.hero_img}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-navy-950/35 transition-colors duration-300" />
                                        <span className="absolute top-4 left-4 text-gold-400 text-xs tracking-[0.25em] uppercase font-medium border border-gold-500/40 px-3 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-gray-300 text-xs">
                                            <span>{article.date}</span>
                                            <span>·</span>
                                            <span>{article.read_time}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-serif text-navy-950 text-lg font-semibold leading-snug mb-3 group-hover:text-gold-700 transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                                        <span className="text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                                            Read Article
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── FINAL CTA BANNER ── */}
            <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <p className="text-navy-800 text-sm tracking-[0.3em] uppercase font-medium mb-4">Ready to Begin?</p>
                    <h2 className="font-serif text-navy-950 text-4xl md:text-5xl font-bold mb-5">
                        Need Expert Legal Advice?
                    </h2>
                    <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
                        Schedule a consultation with one of our specialist advocates. We are ready to help you
                        navigate your legal challenges with confidence and clarity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            Book a Consultation
                        </Link>
                        <a href="tel:+255738600670" className="inline-flex items-center justify-center gap-2 border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +255 738 600 670
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
