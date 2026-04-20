import { Link, usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

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

interface Props { member: Member }

export default function TeamMemberPage({ member }: Props) {
    const { appUrl, currentUrl } = usePage<{ appUrl: string; currentUrl: string }>().props

    const personSchema: Record<string, unknown> = {
        '@context':   'https://schema.org',
        '@type':      'Person',
        'name':       member.name,
        'jobTitle':   member.role,
        'description': member.bio,
        'url':        currentUrl,
        'worksFor': {
            '@type': 'LegalService',
            '@id':   `${appUrl}/#organization`,
            'name':  'Trill & Associates Advocates',
        },
        'knowsLanguage': member.languages,
        'knowsAbout':    member.practice_areas,
    }
    if (member.avatar_url) personSchema['image'] = member.avatar_url
    if (member.email) personSchema['email'] = member.email

    const desc = member.bio.length > 160 ? member.bio.slice(0, 157) + '...' : member.bio

    return (
        <MainLayout>
            <Seo
                title={`${member.name} – Trill & Associates Advocates`}
                description={desc}
                type="profile"
                image={member.avatar_url ?? undefined}
                jsonLd={personSchema}
            />

            {/* ── HERO ── */}
            <section className="relative bg-navy-950 pt-36 pb-20 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm mb-10">
                        <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                        <span className="text-gold-500">›</span>
                        <Link href="/team" className="text-gray-400 hover:text-gold-400 transition-colors">Our Team</Link>
                        <span className="text-gold-500">›</span>
                        <span className="text-gray-300">{member.name}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-10">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-36 h-36 rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl">
                                {member.avatar_url ? (
                                    <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                                        <span className="font-serif text-white text-5xl font-bold">{member.initials}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Name + role + meta */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 mb-3">
                                <span className="h-px w-8 bg-gold-400" />
                                <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Advocate</span>
                            </div>
                            <h1 className="font-serif text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
                                {member.name}
                            </h1>
                            <p className="text-gold-400 text-sm tracking-[0.2em] uppercase font-medium mb-5">{member.role}</p>

                            <div className="flex flex-wrap gap-3">
                                {member.languages.map(lang => (
                                    <span key={lang} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/10">
                                        {lang}
                                    </span>
                                ))}
                                {member.email && (
                                    <a href={`mailto:${member.email}`}
                                        className="text-xs bg-gold-500/15 text-gold-300 px-3 py-1 rounded-full border border-gold-500/30 hover:bg-gold-500/25 transition-colors flex items-center gap-1.5">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {member.email}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GOLD DIVIDER ── */}
            <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            {/* ── PROFILE BODY ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* ── Main column ── */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* Biography */}
                            <div>
                                <h2 className="font-serif text-navy-950 text-2xl font-bold mb-1">Biography</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                            </div>

                            {/* Practice Areas */}
                            {member.practice_areas.length > 0 && (
                                <div>
                                    <h2 className="font-serif text-navy-950 text-2xl font-bold mb-1">Areas of Practice</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                    <div className="flex flex-wrap gap-2.5">
                                        {member.practice_areas.map(area => (
                                            <span key={area} className="bg-gold-50 text-gold-800 border border-gold-200 px-4 py-2 rounded-sm text-sm font-medium">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Education */}
                            {member.education.length > 0 && (
                                <div>
                                    <h2 className="font-serif text-navy-950 text-2xl font-bold mb-1">Education &amp; Qualifications</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                    <div className="space-y-4">
                                        {member.education.map((edu, i) => (
                                            <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-sm">
                                                <div className="w-9 h-9 rounded-full bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-serif text-navy-950 font-semibold text-base">{edu.degree}</p>
                                                    <p className="text-gray-500 text-sm mt-0.5">{edu.institution}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Memberships */}
                            {member.memberships.length > 0 && (
                                <div>
                                    <h2 className="font-serif text-navy-950 text-2xl font-bold mb-1">Professional Memberships</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                    <ul className="space-y-3">
                                        {member.memberships.map(m => (
                                            <li key={m} className="flex items-start gap-3 text-gray-600">
                                                <span className="text-gold-500 text-lg leading-none mt-0.5">›</span>
                                                <span className="text-base">{m}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="space-y-6">

                            {/* Contact card */}
                            <div className="bg-gold-500 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">Get in Touch</h3>
                                <p className="text-navy-800 text-sm mb-5 leading-relaxed">
                                    Schedule a consultation with {member.name.split(' ')[0]} or contact our team directly.
                                </p>
                                <Link href="/book-consultation"
                                    className="block w-full text-center bg-navy-950 hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide mb-3">
                                    Book a Consultation
                                </Link>
                                {member.email && (
                                    <a href={`mailto:${member.email}`}
                                        className="block w-full text-center border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold px-5 py-3 rounded-sm transition-all text-sm uppercase tracking-wide">
                                        Email Directly
                                    </a>
                                )}
                            </div>

                            {/* Languages */}
                            {member.languages.length > 0 && (
                                <div className="bg-gray-50 border border-gray-100 rounded-sm p-6">
                                    <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Languages</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {member.languages.map(lang => (
                                            <span key={lang} className="text-sm bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* General contact */}
                            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Firm Contact</h3>
                                <a href="tel:+255718694863" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors mb-3">
                                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-sm">+255 718 694 863</span>
                                </a>
                                <a href="mailto:info@trill.co.tz" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">info@trill.co.tz</span>
                                </a>
                            </div>

                            <Link href="/team" className="block text-center text-sm text-gold-600 hover:text-gold-500 transition-colors font-medium">
                                ← Back to Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-navy-950">
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-white text-3xl font-bold mb-4">Need Legal Assistance?</h2>
                    <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
                        Our advocates are ready to help you navigate your legal challenges with expertise and dedication.
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
