import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import HeroCarousel from '@/Components/HeroCarousel'
import CountUp from '@/Components/CountUp'

const practiceAreas = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        ),
        title: 'Corporate & Commercial Law',
        desc:  'Comprehensive legal counsel for businesses of all sizes, from incorporation and governance to complex commercial transactions and mergers.',
        color: 'from-blue-600 to-navy-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'Intellectual Property',
        desc:  'Protecting your innovations, trademarks, copyrights, and creative works across Tanzania and internationally with strategic IP management.',
        color: 'from-purple-600 to-indigo-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: 'Banking & Finance',
        desc:  'Expert advice on banking regulations, loan agreements, financial instruments, debt restructuring, and regulatory compliance.',
        color: 'from-emerald-600 to-teal-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: 'Immigration',
        desc:  'Navigating Tanzania visa requirements, work permits, residency applications, and citizenship matters with efficiency and precision.',
        color: 'from-orange-500 to-red-700',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
        title: 'Oil & Gas',
        desc:  'Specialized legal services for the energy sector including exploration agreements, production sharing contracts, and regulatory matters.',
        color: 'from-yellow-600 to-amber-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
        title: 'Land Laws',
        desc:  'Comprehensive property law services including acquisition, title disputes, land use regulations, and real estate transactions in Tanzania.',
        color: 'from-lime-600 to-green-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.555 4.5 4.598V18a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18V4.598c0-1.043-.807-1.898-1.907-2.026A48.507 48.507 0 0012 2.25z" />
            </svg>
        ),
        title: 'Taxation',
        desc:  'Strategic tax planning, compliance, dispute resolution, and advisory services for individuals, corporations, and international entities.',
        color: 'from-cyan-600 to-blue-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        title: 'Receivership & Debt Collection',
        desc:  'Efficient debt recovery, insolvency proceedings, and receivership management to protect your financial interests.',
        color: 'from-rose-600 to-pink-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
        ),
        title: 'Entertainment Law',
        desc:  'Legal services for artists, musicians, producers, and entertainment companies covering contracts, royalties, and rights management.',
        color: 'from-violet-600 to-purple-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        title: 'Insurance Law',
        desc:  'Guidance on insurance regulatory compliance, policy disputes, claims management, and risk mitigation strategies.',
        color: 'from-teal-600 to-cyan-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
        title: 'Cyber-crime Law',
        desc:  'Tackling digital offenses, data privacy compliance, cybersecurity legal frameworks, and electronic evidence matters.',
        color: 'from-slate-600 to-gray-800',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
            </svg>
        ),
        title: 'Human Rights',
        desc:  'Championing fundamental freedoms and justice through litigation, advocacy, and advisory services for individuals and organisations.',
        color: 'from-red-600 to-rose-800',
    },
]

const stats = [
    { target: 15,  suffix: '+',  label: 'Years of Excellence' },
    { target: 500, suffix: '+',  label: 'Cases Won'           },
    { target: 12,  suffix: '',   label: 'Practice Areas'      },
    { target: 100, suffix: '%',  label: 'Client Commitment'   },
]

const whyUs = [
    {
        title: 'Unmatched Expertise',
        desc:  'Our attorneys bring decades of combined experience across all areas of Tanzanian and international law.',
    },
    {
        title: 'Client-First Approach',
        desc:  'We maintain an unwavering focus on your interests, providing personalised legal strategies tailored to your unique needs.',
    },
    {
        title: 'Global Reach',
        desc:  'While based in Dar-es-Salaam, our network extends globally, enabling us to handle cross-border matters with ease.',
    },
    {
        title: 'Ethical Standards',
        desc:  'As licensed Notaries Public and Commissioners for Oath, we uphold the highest standards of integrity and professionalism.',
    },
]

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />

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

            {/* ── INTRO SECTION ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text side */}
                        <div>
                            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Commitment</p>
                            <h2 className="section-title mb-2">
                                Justice Served with
                                <span className="block text-gold-500 italic">Integrity &amp; Honor</span>
                            </h2>
                            <span className="gold-line" />
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                At Trill &amp; Associates Advocates, we recognize our dual obligation — to vigorously represent
                                our clients and to maintain the honor and dignity of our justice system. Our attorneys are
                                trustworthy members of the bar who prioritize their clients' well-being above all else.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10">
                                Founded on the principles of excellence, integrity, and dedication, we have grown to become
                                one of Tanzania's most respected law firms. Our team of seasoned advocates brings a wealth
                                of experience across diverse practice areas, ensuring that our clients receive the highest
                                quality legal representation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/about" className="btn-primary">
                                    About Our Firm
                                </Link>
                                <a href="tel:+255738600670" className="inline-flex items-center gap-3 text-navy-800 font-semibold hover:text-gold-600 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
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

                        {/* Visual side — photo collage */}
                        <div className="relative h-[520px] hidden lg:block">
                            {/* Large main photo */}
                            <div className="absolute top-0 left-0 w-3/4 h-80 rounded-sm overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                                    alt="Legal expertise"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy-950/20" />
                            </div>
                            {/* Smaller photo bottom-right */}
                            <div className="absolute bottom-0 right-0 w-2/3 h-60 rounded-sm overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                                    alt="Client partnership"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy-950/15" />
                            </div>
                            {/* Floating established badge */}
                            <div className="absolute bottom-44 left-0 bg-gold-500 rounded-sm px-6 py-4 shadow-2xl z-10">
                                <p className="text-navy-950 font-serif font-bold text-3xl leading-none">2008</p>
                                <p className="text-navy-800 text-xs uppercase tracking-wider mt-1">Established</p>
                            </div>
                            {/* Quote card over images */}
                            <div className="absolute top-56 right-0 w-56 bg-navy-950 rounded-sm p-5 shadow-2xl z-10">
                                <svg className="w-6 h-6 text-gold-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-white font-serif text-sm leading-relaxed italic">
                                    "Delivering reliable legal services tailored to our clients' requirements."
                                </p>
                                <p className="text-gold-400 text-xs mt-3 tracking-wider uppercase">Our Vision</p>
                            </div>
                            {/* Corner accent */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-gold-400 rounded-sm opacity-25" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRACTICE AREAS ── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">What We Do</p>
                        <h2 className="section-title">Areas of Practice</h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            We offer a comprehensive range of legal services across 12 specialised practice areas,
                            delivering expert guidance for every legal challenge.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {practiceAreas.map((area) => (
                            <div key={area.title} className="practice-card">
                                {/* Gradient icon bg */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-sm bg-gradient-to-br ${area.color} text-white mb-5 shadow-lg`}>
                                    {area.icon}
                                </div>
                                <h3 className="font-serif text-lg font-semibold text-navy-950 mb-3 leading-snug">
                                    {area.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn-primary">
                            Consult a Specialist
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="relative overflow-hidden">
                {/* Full-bleed split: image left, dark right */}
                <div className="grid lg:grid-cols-2 min-h-[600px]">
                    {/* Photo side */}
                    <div className="relative min-h-72 lg:min-h-0 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80"
                            alt="Law library"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-transparent" />
                        {/* Floating stat pill */}
                        <div className="absolute bottom-8 left-8 bg-gold-500 rounded-sm px-6 py-4 shadow-xl">
                            <p className="font-serif text-navy-950 font-bold text-3xl leading-none">
                                <CountUp target={15} suffix="+" duration={2000} />
                            </p>
                            <p className="text-navy-800 text-xs uppercase tracking-wider mt-1">Years of Excellence</p>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="bg-navy-950 py-20 px-8 lg:px-16 flex flex-col justify-center">
                        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">Why Choose Us</p>
                        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
                            Your Trusted Legal
                            <span className="block text-gold-400 italic">Partners in Tanzania</span>
                        </h2>
                        <span className="block w-16 h-1 bg-gold-500 mt-4 mb-8" />
                        <p className="text-gray-400 leading-relaxed text-lg mb-10">
                            With a proven track record spanning over a decade, Trill &amp; Associates Advocates has
                            established itself as the go-to legal firm for individuals, corporates, and international
                            organisations operating in Tanzania and East Africa.
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
                        <div>
                            <Link href="/about" className="btn-outline">Our Story</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-navy-950 text-4xl md:text-5xl font-bold mb-4">
                        Need Legal Advice?
                    </h2>
                    <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
                        Schedule a free consultation with one of our expert advocates today. We are ready to help you
                        navigate your legal challenges with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get in Touch
                        </Link>
                        <a href="tel:+255738600670" className="inline-flex items-center gap-2 border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
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
