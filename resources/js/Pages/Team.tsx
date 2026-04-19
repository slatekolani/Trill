import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

interface Education { degree: string; institution: string }

interface Member {
    id:             number
    name:           string
    role:           string
    bio:            string
    avatar_url:     string | null
    initials:       string
    email:          string | null
    languages:      string[]
    practice_areas: string[]
    education:      Education[]
    memberships:    string[]
}

interface Props { members: Member[] }

const values = [
    {
        title: 'Professional Excellence',
        desc:  'Every member of our team is committed to the highest standards of legal practice, continuous learning, and outstanding client service.',
    },
    {
        title: 'Collaborative Approach',
        desc:  'We work as one integrated team, combining our diverse expertise to provide holistic, well-rounded advice across all practice areas.',
    },
    {
        title: 'Integrity Above All',
        desc:  'Our professional relationships are built on trust. We are transparent, ethical, and uncompromising in our standards of honesty.',
    },
]

export default function Team({ members }: Props) {
    return (
        <MainLayout>
            <Head title="Our Team — Trill &amp; Associates Advocates" />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[65vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional legal team"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/85 to-navy-900/60" />
                <div className="absolute inset-0 bg-navy-950/55" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">The People</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Our Legal<br />
                            <span className="text-gold-400 italic">Team</span>
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
                            Meet the dedicated advocates and legal professionals behind Trill &amp; Associates Advocates.
                            Each brings deep expertise, commitment, and a client-first philosophy to every matter they handle.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">Our Team</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUES STRIP ── */}
            <section className="py-14 bg-gold-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {values.map((v) => (
                            <div key={v.title} className="px-4">
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">{v.title}</h3>
                                <p className="text-navy-800 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM GRID ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Advocates</p>
                        <h2 className="section-title">Experienced. Dedicated.<br /><span className="text-gold-500 italic">Client-Focused.</span></h2>
                        <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Our team of qualified advocates brings expertise across all practice areas,
                            ensuring you have the right specialist for every legal matter.
                        </p>
                    </div>

                    {members.length === 0 ? (
                        <p className="text-center text-gray-400 py-16">Team profiles coming soon.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-8">
                            {members.map((member) => (
                                <Link
                                    key={member.id}
                                    href={`/team/${member.id}`}
                                    className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row"
                                >
                                    {/* Avatar column */}
                                    <div className="bg-navy-950 sm:w-44 flex-shrink-0 flex flex-col items-center justify-center py-10 px-6">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-500/40 group-hover:border-gold-400 transition-colors duration-300 mb-4">
                                            {member.avatar_url ? (
                                                <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                                                    <span className="font-serif text-white text-2xl font-bold">{member.initials}</span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gold-400 text-xs tracking-wider uppercase font-medium text-center">{member.role}</p>
                                        {member.languages.length > 0 && (
                                            <div className="mt-5 flex flex-wrap gap-1.5 justify-center">
                                                {member.languages.map(lang => (
                                                    <span key={lang} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">{lang}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content column */}
                                    <div className="p-7 flex-1">
                                        <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>

                                        {member.practice_areas.length > 0 && (
                                            <div className="mb-4">
                                                <p className="text-xs text-gray-400 tracking-wider uppercase font-medium mb-2">Core Practice Areas</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {member.practice_areas.map(area => (
                                                        <span key={area} className="text-xs bg-gold-50 text-gold-800 border border-gold-200 px-2.5 py-1 rounded-full font-medium">
                                                            {area}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {member.education.length > 0 && (
                                            <div className="mb-4">
                                                <p className="text-xs text-gray-400 tracking-wider uppercase font-medium mb-2">Qualifications</p>
                                                {member.education.map((edu, i) => (
                                                    <p key={i} className="text-xs text-gray-500 flex items-start gap-1.5 mb-1">
                                                        <span className="text-gold-500 mt-0.5">›</span>
                                                        {edu.degree} — {edu.institution}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

                                        {member.memberships.length > 0 && (
                                            <div>
                                                <p className="text-xs text-gray-400 tracking-wider uppercase font-medium mb-2">Memberships</p>
                                                {member.memberships.map(m => (
                                                    <p key={m} className="text-xs text-gray-500 flex items-start gap-1.5 mb-1">
                                                        <span className="text-gold-500 mt-0.5">›</span> {m}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── JOIN US ── */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Careers</p>
                    <h2 className="section-title mb-4">
                        Interested in Joining<br />
                        <span className="text-gold-500 italic">Our Team?</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        We are always looking for talented, driven legal professionals who share our commitment
                        to excellence, integrity, and client-focused legal service delivery.
                    </p>
                    <Link href="/contact" className="btn-primary">Get in Touch</Link>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="relative py-20 overflow-hidden bg-navy-950">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-white text-4xl font-bold mb-4">Ready to Speak with Our Team?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Contact us today to be connected with the right advocate for your legal matter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="btn-primary">Book a Consultation</Link>
                        <Link href="/contact" className="btn-outline">Contact Us</Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
