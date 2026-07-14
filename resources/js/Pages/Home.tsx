import { Link, usePage } from '@inertiajs/react'
import { useEffect, useMemo, useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroCarousel from '@/Components/HeroCarousel'
import MembershipsSection, { PublicMembership } from '@/Components/MembershipsSection'
import Seo from '@/Components/Seo'
import { block } from '@/lib/content'

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

interface HomeArticle {
    id: string; slug: string; title: string; excerpt: string
    category: string; hero_img: string | null; read_time: string; date: string
}
interface HomeHeroSlide {
    image: string | null
    badge: string | null
    title: string
    description: string | null
    cta: { label: string; href: string }
}
interface HomePracticeArea {
    id: string
    type?: string
    title: string
    desc: string | null
    href: string
    image_url: string | null
}
interface HomeFeatureItem extends HomePracticeArea {
    type: 'Practice Area' | 'Sector'
}
interface Props {
    latestArticles: HomeArticle[]
    heroSlides?:    HomeHeroSlide[]
    practiceAreas?: HomePracticeArea[]
    sectors?:       HomeFeatureItem[]
    memberships?: PublicMembership[]
    contentBlocks?: Record<string, string>
}

export default function Home({ latestArticles, heroSlides = [], practiceAreas: managedPracticeAreas = [], sectors = [], memberships = [], contentBlocks = {} }: Props) {
    const { appUrl } = usePage<{ appUrl: string }>().props
    const displayedPracticeAreas = managedPracticeAreas.length
        ? managedPracticeAreas
        : practiceAreas.map((area) => ({ ...area, image_url: null }))
    const practiceIntroFeatures = useMemo(
        () => managedPracticeAreas
            .map((area) => ({ ...area, type: 'Practice Area' as const }))
            .filter((item) => item.image_url),
        [managedPracticeAreas],
    )
    const sectorIntroFeatures = useMemo(
        () => sectors
            .map((sector) => ({ ...sector, type: 'Sector' as const }))
            .filter((item) => item.image_url),
        [sectors],
    )
    const [practiceIntroFeatureIndex, setPracticeIntroFeatureIndex] = useState(0)
    const [sectorIntroFeatureIndex, setSectorIntroFeatureIndex] = useState(0)
    const primaryIntroFeature = practiceIntroFeatures[practiceIntroFeatureIndex % Math.max(practiceIntroFeatures.length, 1)]
    const secondaryIntroFeature = sectorIntroFeatures[sectorIntroFeatureIndex % Math.max(sectorIntroFeatures.length, 1)]

    useEffect(() => {
        setPracticeIntroFeatureIndex(0)
    }, [practiceIntroFeatures.length])

    useEffect(() => {
        setSectorIntroFeatureIndex(0)
    }, [sectorIntroFeatures.length])

    useEffect(() => {
        if (practiceIntroFeatures.length < 2) {
            return
        }

        const timer = window.setInterval(() => {
            setPracticeIntroFeatureIndex((current) => (current + 1) % practiceIntroFeatures.length)
        }, 6200)

        return () => window.clearInterval(timer)
    }, [practiceIntroFeatures.length])

    useEffect(() => {
        if (sectorIntroFeatures.length < 2) {
            return
        }

        const timer = window.setInterval(() => {
            setSectorIntroFeatureIndex((current) => (current + 1) % sectorIntroFeatures.length)
        }, 8300)

        return () => window.clearInterval(timer)
    }, [sectorIntroFeatures.length])

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type':    'WebSite',
        '@id':      `${appUrl}/#website`,
        'url':      appUrl,
        'name':     'Trill & Associates Advocates',
        'description': 'Tanzania\'s leading law firm providing expert legal services in corporate law, dispute resolution, real estate, IP, and employment law from Dar-es-Salaam.',
    }
    return (
        <MainLayout>
            <Seo
                title="Trill & Associates Advocates – Leading Law Firm in Tanzania"
                description="Tanzania's leading law firm. Trill & Associates Advocates provides expert legal services in corporate law, dispute resolution, real estate, intellectual property, and employment law from Dar-es-Salaam."
                jsonLd={websiteSchema}
            />

            {/* ── HERO CAROUSEL ── */}
            <HeroCarousel slides={heroSlides} />

            {/* ── FIRM INTRODUCTION ── */}
            <section className="bg-[#241313] py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
                        <div>
                            <p className="text-gold-300 text-sm tracking-[0.24em] uppercase font-medium mb-4">{block(contentBlocks, 'home_intro_eyebrow', 'Who We Are')}</p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-normal text-white mb-2 text-balance">
                                {block(contentBlocks, 'home_intro_heading', 'Strategic Legal Counsel')}
                                {' '}
                                <span className="block text-gold-300">{block(contentBlocks, 'home_intro_subheading', 'For Businesses & Individuals')}</span>
                            </h2>
                            <span className="mt-5 mb-7 block h-px w-16 bg-gold-400" />
                            <p className="text-white/80 leading-relaxed mb-6 text-lg">
                                {block(contentBlocks, 'home_intro_1', 'Trill & Associates Advocates is a modern Tanzanian law firm providing strategic, practical, and commercially sound legal solutions to businesses, institutions, investors, and private clients.')}
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8">
                                {block(contentBlocks, 'home_intro_2', 'Based on the 18th Floor of Rita Tower in Dar-es-Salaam, we have built a reputation for delivering high-quality legal representation across 17 practice areas, serving clients throughout Tanzania, East Africa, and beyond.')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/about" className="btn-primary">
                                    About Our Firm
                                </Link>
                                <a href="tel:+255718694863" className="inline-flex items-center gap-3 text-white font-semibold hover:text-gold-300 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-gold-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-normal">{block(contentBlocks, 'home_phone_label', 'Call Us Today')}</p>
                                        <p>{block(contentBlocks, 'site_phone', '+255 718 694 863')}</p>
                                    </div>
                                </a>
                            </div>
                            {(primaryIntroFeature || secondaryIntroFeature) && (
                                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
                                    {[primaryIntroFeature, secondaryIntroFeature].filter(Boolean).map((feature) => (
                                        <Link
                                            key={`${feature!.type}-${feature!.id}`}
                                            href={feature!.href}
                                            className="group overflow-hidden border border-gold-300/30 bg-white/5"
                                        >
                                            <div className="relative aspect-[4/3] overflow-hidden bg-[#683030]">
                                                <img
                                                    src={feature!.image_url ?? ''}
                                                    alt={feature!.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#241313]/90 via-[#241313]/20 to-transparent" />
                                                <span className="absolute left-4 top-4 border border-gold-300/50 bg-[#241313]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-200">
                                                    {feature!.type}
                                                </span>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-serif text-lg font-semibold leading-tight text-white">
                                                    {feature!.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/65">
                                                    {feature!.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Visual collage */}
                        <div className="relative hidden h-[470px] lg:block">
                            {primaryIntroFeature ? (
                                <Link
                                    href={primaryIntroFeature.href}
                                    className="image-ready-frame group absolute top-0 left-0 h-80 w-[72%]"
                                >
                                    <img
                                        src={primaryIntroFeature.image_url ?? ''}
                                        alt={primaryIntroFeature.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#241313]/88 via-[#241313]/18 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                                        <span className="mb-3 inline-flex border border-gold-300/50 bg-[#241313]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-200">
                                            {primaryIntroFeature.type}
                                        </span>
                                        <h3 className="font-serif text-xl font-semibold leading-tight text-white">
                                            {primaryIntroFeature.title}
                                        </h3>
                                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                                            {primaryIntroFeature.desc}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="image-ready-frame absolute top-0 left-0 h-80 w-[72%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                                        alt="Legal expertise"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#683030]/16" />
                                </div>
                            )}
                            {secondaryIntroFeature ? (
                                <Link
                                    href={secondaryIntroFeature.href}
                                    className="image-ready-frame group absolute bottom-0 right-0 h-64 w-[64%]"
                                >
                                    <img
                                        src={secondaryIntroFeature.image_url ?? ''}
                                        alt={secondaryIntroFeature.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#241313]/90 via-[#241313]/16 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                                        <span className="mb-2 inline-flex border border-gold-300/50 bg-[#241313]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-200">
                                            {secondaryIntroFeature.type}
                                        </span>
                                        <h3 className="font-serif text-lg font-semibold leading-tight text-white">
                                            {secondaryIntroFeature.title}
                                        </h3>
                                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/75">
                                            {secondaryIntroFeature.desc}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="image-ready-frame absolute bottom-0 right-0 h-64 w-[64%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                                        alt="Client partnership"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#683030]/10" />
                                </div>
                            )}
                            <div className="absolute -top-5 right-12 h-28 w-28 border border-gold-400/50" />
                        </div>
                    </div>
                </div>
            </section>

            <MembershipsSection memberships={memberships} variant="white" />

            {/* ── PRACTICE AREAS ── */}
            <section className="py-20 bg-white border-y border-gold-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <p className="text-gold-700 text-sm tracking-[0.24em] uppercase font-medium mb-4">{block(contentBlocks, 'home_practice_eyebrow', 'What We Do')}</p>
                            <h2 className="section-title">{block(contentBlocks, 'home_practice_heading', 'Areas of Practice')}</h2>
                            <span className="signature-rule mt-5 block" />
                        </div>
                        <p className="text-gray-500 max-w-3xl text-lg leading-8 lg:justify-self-end">
                            {block(contentBlocks, 'practice_intro', 'Comprehensive legal services across 17 specialised practice areas, with expert guidance for every legal challenge your business or personal matter may present.')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 border-l border-t border-gold-200 sm:grid-cols-2 lg:grid-cols-4">
                        {displayedPracticeAreas.slice(0, 4).map((area, index) => (
                            <Link key={area.title} href={area.href} className="group relative min-h-[310px] overflow-hidden border-b border-r border-gold-200 bg-white p-7 transition-colors duration-300 hover:bg-gold-50">
                                <span className="absolute right-6 top-6 font-serif text-5xl text-gold-100 transition-colors duration-300 group-hover:text-gold-200">{String(index + 1).padStart(2, '0')}</span>
                                {area.image_url ? (
                                    <img src={area.image_url} alt={area.title} className="relative z-10 mb-5 aspect-[4/3] w-full object-cover border border-gold-100" />
                                ) : (
                                    <div className="relative z-10 inline-flex items-center justify-center w-13 h-13 bg-gold-100 text-navy-950 mb-5 p-3.5 group-hover:bg-[#683030] group-hover:text-white transition-colors duration-300">
                                        {'icon' in area ? area.icon : null}
                                    </div>
                                )}
                                <h3 className="relative z-10 font-serif text-base font-semibold text-navy-950 mb-3 leading-snug">
                                    {area.title}
                                </h3>
                                <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-4">
                                    {area.desc}
                                </p>
                                <span className="relative z-10 text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
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
                            {block(contentBlocks, 'home_practice_button', 'View All Practice Areas')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── LEGAL INSIGHTS PREVIEW ── */}
            <section className="py-20 bg-gold-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                        <div>
                            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase font-medium mb-4">{block(contentBlocks, 'home_insights_eyebrow', 'Knowledge & Thought Leadership')}</p>
                            <h2 className="section-title">
                                {block(contentBlocks, 'home_insights_heading', 'Legal Insights')}{' '}
                                <span className="text-gold-500">{block(contentBlocks, 'home_insights_subheading', '& Publications')}</span>
                            </h2>
                            <span className="gold-line" />
                        </div>
                        <Link href="/insights" className="btn-primary self-start md:self-auto flex-shrink-0">
                            {block(contentBlocks, 'home_insights_button', 'View All Insights')}
                        </Link>
                    </div>

                    {latestArticles.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-sm border border-gold-200">
                            <p className="text-gray-400 text-sm">{block(contentBlocks, 'home_insights_empty', 'Latest insights coming soon.')}</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {latestArticles.slice(0, 3).map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/insights/${article.slug}`}
                                    className="group bg-white border border-gold-200 rounded-sm overflow-hidden hover:border-gold-500 transition-all duration-300"
                                >
                                    <div className="relative h-44 overflow-hidden bg-[#683030]">
                                        {article.hero_img && (
                                            <img
                                                src={article.hero_img}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-[#683030]/16 group-hover:bg-[#683030]/14 transition-colors duration-300" />
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
            <section className="py-20 bg-white relative overflow-hidden border-t border-gold-100">
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <p className="text-navy-800 text-sm tracking-[0.3em] uppercase font-medium mb-4">{block(contentBlocks, 'home_cta_eyebrow', 'Ready to Begin?')}</p>
                    <h2 className="font-serif text-navy-950 text-4xl md:text-5xl font-bold mb-5">
                        {block(contentBlocks, 'home_cta_heading', 'Need Expert Legal Advice?')}
                    </h2>
                    <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
                        {block(contentBlocks, 'home_cta_text', 'Schedule a consultation with one of our specialist advocates. We are ready to help you navigate your legal challenges with confidence and clarity.')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-[#683030] hover:bg-[#572929] text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            Book a Consultation
                        </Link>
                        <a href="tel:+255718694863" className="inline-flex items-center justify-center gap-2 border border-navy-950 text-navy-950 hover:bg-[#683030] hover:text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +255 718 694 863
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
