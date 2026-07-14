import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'
import PageHero from '@/Components/PageHero'

interface Education { degree: string; institution: string }

interface Member {
    id:             string
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

export default function Team({ members }: Props) {
    return (
        <MainLayout>
            <Seo
                title="Our Team – Trill & Associates Advocates"
                description="Meet the experienced legal professionals at Trill & Associates Advocates. Our advocates bring deep expertise across all major practice areas in Tanzania and East Africa."
            />

            <PageHero
                eyebrow="The People"
                title="Our Legal"
                accent="Team"
                description="Meet the dedicated advocates and legal professionals behind Trill & Associates Advocates. Each brings deep expertise, commitment, and a client-first philosophy to every matter they handle."
                image="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Professional legal team"
                current="Our Team"
            />

            {/* ── TEAM GRID ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Advocates</p>
                        <h2 className="section-title">Experienced. Dedicated. <span className="text-gold-500">Client-Focused.</span></h2>
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
                                    className="group editorial-panel overflow-hidden transition-all duration-300 flex flex-col sm:flex-row hover:border-gold-400"
                                >
                                    {/* Avatar column */}
                                    <div className="bg-[#683030] sm:w-44 flex-shrink-0 flex flex-col items-center justify-center py-10 px-6">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-500/40 group-hover:border-gold-400 transition-colors duration-300 mb-4">
                                            {member.avatar_url ? (
                                                <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#683030] to-[#572929] flex items-center justify-center">
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

        </MainLayout>
    )
}
