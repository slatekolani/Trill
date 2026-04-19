import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import CountUp from '@/Components/CountUp'

const values = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'Integrity',
        desc: 'We hold ourselves to the highest ethical standards, ensuring transparency and honesty in every client relationship and legal proceeding.',
        img: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=600&q=80',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        title: 'Excellence',
        desc: 'Our pursuit of legal excellence drives every decision we make, from case strategy to courtroom advocacy and client communication.',
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
        title: 'Client Focus',
        desc: 'Our clients are at the heart of everything we do. We listen deeply, communicate clearly, and fight vigorously for their best interests.',
        img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
            </svg>
        ),
        title: 'Global Perspective',
        desc: 'Rooted in Tanzania, our reach is global. We bring an international perspective to every matter, serving clients across borders and industries.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'Innovation',
        desc: 'We embrace innovative legal thinking and modern approaches to solve complex problems efficiently and effectively for our clients.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
            </svg>
        ),
        title: 'Justice',
        desc: 'We are committed to upholding justice — not just for our clients, but for the broader community and the rule of law in Tanzania.',
        img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    },
]

const milestones = [
    { year: '2008', event: 'Firm Founded',            desc: 'Trill & Associates Advocates established in Dar-es-Salaam with a mission to deliver world-class legal services.' },
    { year: '2012', event: 'International Expansion', desc: 'Extended our practice to handle cross-border transactions and international legal matters for multinational clients.' },
    { year: '2015', event: 'Rita Tower Headquarters', desc: 'Moved to our prestigious offices on the 18th Floor of Rita Tower, Makunganya/Simu Street, Dar-es-Salaam.' },
    { year: '2018', event: '10 Years of Excellence',  desc: 'Celebrated a decade of exceptional legal service with over 500 successfully resolved cases across all practice areas.' },
    { year: '2023', event: 'Digital Transformation',  desc: 'Embraced cutting-edge legal technology to enhance client service delivery and streamline our processes.' },
]

const team = [
    { name: 'Managing Partner',    role: 'Senior Advocate',    initials: 'MP', bio: 'A seasoned advocate with extensive experience in corporate law, commercial transactions, and dispute resolution across East Africa.',                                                                    areas: ['Corporate Law', 'Commercial Disputes', 'Arbitration']          },
    { name: 'Head of Litigation',  role: 'Senior Advocate',    initials: 'HL', bio: 'Specialising in high-stakes litigation, our Head of Litigation has argued landmark cases before the High Court and Court of Appeal of Tanzania.',                                                         areas: ['Civil Litigation', 'Constitutional Law', 'Human Rights']        },
    { name: 'IP Counsel',          role: 'Associate Advocate', initials: 'IP', bio: 'Expert in intellectual property law with a focus on trademarks, patents, and copyright matters for both local and international clients.',                                                                 areas: ['Intellectual Property', 'Entertainment Law', 'Technology Law']  },
    { name: 'Tax & Finance Partner', role: 'Senior Advocate',  initials: 'TF', bio: 'A specialist in taxation and banking law, providing strategic advice on complex tax planning and financial regulatory matters.',                                                                           areas: ['Tax Law', 'Banking & Finance', 'Oil & Gas']                     },
]

const firmStats = [
    { target: 15,  suffix: '+', label: 'Years Active'        },
    { target: 500, suffix: '+', label: 'Cases Resolved'      },
    { target: 12,  suffix: '',  label: 'Practice Areas'      },
    { target: 50,  suffix: '+', label: 'Corporate Clients'   },
]

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us" />

            {/* ── PAGE HERO — full photo with overlay ── */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
                    alt="Law library"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/50" />
                <div className="absolute inset-0 bg-navy-950/50" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Our Story</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            About Our<br />
                            <span className="text-gold-400 italic">Firm</span>
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
                            For over 15 years, Trill &amp; Associates Advocates has been at the forefront of Tanzania's
                            legal landscape — championing justice, protecting rights, and delivering excellence.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">About Us</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ANIMATED STATS STRIP ── */}
            <section className="bg-gold-500 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-600/30">
                        {firmStats.map((s) => (
                            <div key={s.label} className="flex flex-col items-center py-2 px-6 text-center">
                                <span className="font-serif text-5xl font-bold text-navy-950 leading-none">
                                    <CountUp target={s.target} suffix={s.suffix} duration={2000} />
                                </span>
                                <span className="text-navy-800 text-xs font-semibold mt-2 uppercase tracking-[0.2em]">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MISSION & VISION — image-backed cards ── */}
            <section className="py-0">
                <div className="grid lg:grid-cols-2">
                    {/* Mission — dark with photo bg */}
                    <div className="relative overflow-hidden min-h-[420px] flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80"
                            alt="Scales of justice"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy-950/96" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 to-gold-400" />
                        <div className="relative z-10 p-12 lg:p-16">
                            <div className="w-14 h-14 rounded-sm bg-gold-500/20 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">Our Mission</p>
                            <h2 className="font-serif text-white text-3xl font-bold mb-5">Dual Obligation to Justice</h2>
                            <p className="text-gray-100 leading-relaxed text-lg">
                                We recognize our dual obligation — to vigorously represent our clients and to maintain
                                the honor and dignity of our justice system. Our attorneys are trustworthy members of
                                the bar who prioritize their clients' well-being above all else.
                            </p>
                        </div>
                    </div>

                    {/* Vision — dark gold overlay, white text */}
                    <div className="relative overflow-hidden min-h-[420px] flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                            alt="Modern architecture"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy-950/93" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
                        <div className="relative z-10 p-12 lg:p-16">
                            <div className="w-14 h-14 rounded-sm bg-gold-500/20 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">Our Vision</p>
                            <h2 className="font-serif text-white text-3xl font-bold mb-5">Reliable Legal Excellence</h2>
                            <p className="text-gray-100 leading-relaxed text-lg">
                                Delivering reliable legal services and assistance tailored to our clients' requirements
                                within every area of practice — locally in Tanzania and globally, with the precision
                                and dedication that distinguishes Trill &amp; Associates Advocates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FIRM VALUES — cards with mini photo tops ── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">What Guides Us</p>
                        <h2 className="section-title">Our Core Values</h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            These principles form the bedrock of our practice and guide every interaction with our clients, courts, and community.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((v) => (
                            <div key={v.title} className="bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                {/* Photo strip */}
                                <div className="h-40 overflow-hidden relative">
                                    <img
                                        src={v.img}
                                        alt={v.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-300" />
                                    {/* Icon badge over image */}
                                    <div className="absolute bottom-3 left-4 w-11 h-11 rounded-sm bg-gold-500 text-white flex items-center justify-center shadow-lg">
                                        {v.icon}
                                    </div>
                                </div>
                                <div className="p-7">
                                    <h3 className="font-serif text-xl font-semibold text-navy-950 mb-3">{v.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TIMELINE — split with background photo ── */}
            <section className="relative overflow-hidden">
                <div className="grid lg:grid-cols-5">
                    {/* Photo column */}
                    <div className="lg:col-span-2 relative min-h-64 lg:min-h-0">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                            alt="Law firm professionals in meeting"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy-950/80" />
                        <div className="relative z-10 p-10 lg:p-14 flex flex-col justify-end h-full">
                            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">Our Journey</p>
                            <h2 className="font-serif text-white text-4xl font-bold leading-tight mb-4">
                                A Legacy of<br />
                                <span className="text-gold-400 italic">Excellence</span>
                            </h2>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                From our founding in 2008 to our position today as one of Tanzania's leading law firms,
                                every milestone has been built on a foundation of trust, expertise, and unwavering commitment.
                            </p>
                        </div>
                    </div>

                    {/* Timeline column */}
                    <div className="lg:col-span-3 bg-navy-950 py-16 px-8 lg:px-14">
                        <div className="relative">
                            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
                            <div className="space-y-10">
                                {milestones.map((m, i) => (
                                    <div key={m.year} className="flex gap-6 items-start pl-2">
                                        {/* Dot + line */}
                                        <div className="relative flex-shrink-0 flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${i === milestones.length - 1 ? 'bg-gold-500 border-gold-500' : 'bg-navy-950 border-gold-500/50 group-hover:border-gold-500'}`}>
                                                <div className={`w-2 h-2 rounded-full ${i === milestones.length - 1 ? 'bg-white' : 'bg-gold-400'}`} />
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 pb-2">
                                            <span className="text-gold-400 font-serif font-bold text-xl">{m.year}</span>
                                            <h3 className="text-white font-serif text-lg font-semibold mt-0.5 mb-2">{m.event}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR TEAM — dark section with office background ── */}
            <section className="relative py-24 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
                    alt="Office"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/97" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">The People Behind The Firm</p>
                        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-2">Our Legal Team</h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                            Our team of dedicated advocates brings expertise, passion, and a client-first mindset to every case.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member) => (
                            <div key={member.name} className="group bg-navy-900 border border-white/10 rounded-sm p-8 hover:border-gold-500/50 transition-all duration-300 text-center">
                                {/* Avatar — initials only, no stock photos */}
                                <div className="relative inline-block mb-5">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-600 to-navy-900 border-2 border-gold-500/30 group-hover:border-gold-400 flex items-center justify-center mx-auto transition-colors duration-300">
                                        <span className="font-serif text-white text-3xl font-bold">{member.initials}</span>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="font-serif text-white text-lg font-semibold">{member.name}</h3>
                                <p className="text-gold-400 text-xs tracking-wider uppercase font-medium mt-1 mb-4">{member.role}</p>
                                <p className="text-gray-200 text-sm leading-relaxed mb-5">{member.bio}</p>
                                <div className="flex flex-wrap justify-center gap-1.5">
                                    {member.areas.map(area => (
                                        <span key={area} className="text-xs bg-navy-800 text-gray-100 px-2.5 py-1 rounded-full border border-white/20">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA — image banner ── */}
            <section className="relative py-24 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
                    alt="Legal documents"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600/95 to-gold-500/90" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-navy-950 text-4xl md:text-5xl font-bold mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
                        Let our experienced team of advocates guide you through your legal challenges with confidence and care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            Book a Consultation
                        </Link>
                        <a href="tel:+255738600670" className="inline-flex items-center gap-2 border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            Call: +255 738 600 670
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
