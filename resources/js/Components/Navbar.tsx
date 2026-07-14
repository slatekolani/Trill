import { useState, useEffect, useRef } from 'react'
import { Link, usePage } from '@inertiajs/react'

interface NavFeatureLink {
    label: string
    href: string
    description?: string | null
    image_url?: string | null
    img?: string | null
    fallback_image_url?: string | null
}

const practiceAreaLinks: NavFeatureLink[] = [
    { label: 'Corporate & Commercial Law', href: '/practice-areas/corporate-commercial', description: 'Legal backbone for businesses, investors, institutions, and transactions.', image_url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80' },
    { label: 'Dispute Resolution', href: '/practice-areas/dispute-resolution', description: 'Strategic advocacy before courts, tribunals, arbitration panels, and regulators.', image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80' },
    { label: 'Alternative Dispute Resolution', href: '/practice-areas/alternative-dispute-resolution', description: 'Arbitration, mediation, and negotiation for commercially sensible outcomes.', image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80' },
    { label: 'Employment & Labour Law', href: '/practice-areas/employment-labour', description: 'Workforce advisory, contracts, policies, terminations, and labour disputes.', image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80' },
    { label: 'Intellectual Property', href: '/practice-areas/intellectual-property', description: 'Trademark, copyright, patent, licensing, and anti-counterfeiting support.', image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80' },
    { label: 'Real Estate & Conveyancing', href: '/practice-areas/real-estate', description: 'Property transactions, leases, title review, development, and land disputes.', image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
    { label: 'Regulatory Compliance', href: '/practice-areas/regulatory-compliance', description: 'Licensing, compliance frameworks, government relations, and sector regulation.', image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80' },
    { label: 'Debt Recovery & Enforcement', href: '/practice-areas/debt-recovery', description: 'Debt collection, insolvency, enforcement, and recovery strategy.', image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80' },
    { label: 'Investment & Business Advisory', href: '/practice-areas/investment-advisory', description: 'Market entry, structuring, due diligence, and investor support.', image_url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80' },
    { label: 'Banking & Finance', href: '/practice-areas/banking-finance', description: 'Loan documentation, banking regulation, securities, and financial transactions.', image_url: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=900&q=80' },
    { label: 'Taxation', href: '/practice-areas/taxation', description: 'Tax planning, compliance, audits, and Tanzania Revenue Authority disputes.', image_url: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80' },
    { label: 'Immigration', href: '/practice-areas/immigration', description: 'Work permits, residence permits, investor visas, and immigration compliance.', image_url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80' },
    { label: 'Oil & Gas', href: '/practice-areas/oil-gas', description: 'Energy-sector contracts, exploration, production, regulation, and compliance.', image_url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80' },
    { label: 'Entertainment Law', href: '/practice-areas/entertainment', description: 'Contracts, royalties, rights management, and creative-sector legal protection.', image_url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80' },
    { label: 'Insurance Law', href: '/practice-areas/insurance', description: 'Insurance regulation, claims, policy interpretation, and risk advisory.', image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80' },
    { label: 'Cyber-crime Law', href: '/practice-areas/cyber-crime', description: 'Digital offences, online fraud, privacy, evidence, and cybersecurity advisory.', image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80' },
    { label: 'Human Rights', href: '/practice-areas/human-rights', description: 'Rights-based litigation, advocacy, constitutional matters, and community support.', image_url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80' },
]

const sectorLinks: NavFeatureLink[] = [
    { label: 'Energy & Infrastructure', href: '/sectors/energy-infrastructure', description: 'Legal support for energy, transport, construction, and infrastructure-led investments.', image_url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80' },
    { label: 'Real Estate & Construction', href: '/sectors/real-estate-construction', description: 'Property, development, construction, leases, and land-related legal support.', image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
    { label: 'Startups & Technology', href: '/sectors/startups-technology', description: 'Company setup, technology contracts, privacy, IP, and scale-up advisory.', image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80' },
    { label: 'NGOs & Non-Profit Organizations', href: '/sectors/ngos-nonprofits', description: 'Registration, governance, compliance, employment, and donor-facing agreements.', image_url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80' },
    { label: 'Trade & Distribution', href: '/sectors/trade-distribution', description: 'Commercial contracts, supply chains, distribution structures, and regulatory compliance.', image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80' },
    { label: 'Professional Services', href: '/sectors/professional-services', description: 'Advisory for consultants, agencies, and service firms managing legal and commercial risk.', image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80' },
    { label: 'Employment-Intensive Businesses', href: '/sectors/employment-businesses', description: 'Workforce policies, labour disputes, workplace compliance, and HR-facing legal support.', image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80' },
    { label: 'Brands, Media & Creative Enterprises', href: '/sectors/brands-media', description: 'Brand protection, media contracts, licensing, rights, royalties, and creative-sector support.', image_url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80' },
]

const normalizeImageUrl = (url?: string | null) => {
    const value = url?.trim()

    if (!value) {
        return null
    }

    if (/^(https?:)?\/\//.test(value) || value.startsWith('data:') || value.startsWith('blob:')) {
        return value
    }

    const cleaned = value
        .replace(/\\/g, '/')
        .replace(/^public\//, '')
        .replace(/^\.?\//, '')

    return `/${cleaned}`
}

const mergeNavFallbacks = (items: NavFeatureLink[], fallbacks: NavFeatureLink[]) =>
    items.map((item) => {
        const fallback = fallbacks.find((candidate) => candidate.href === item.href)
        const fallbackImage = normalizeImageUrl(fallback?.image_url)

        return {
            ...item,
            description: item.description || fallback?.description || null,
            image_url: normalizeImageUrl(item.image_url || item.img) || fallbackImage,
            fallback_image_url: fallbackImage,
        }
    })

export default function Navbar() {
    const { url, props } = usePage<{
        auth?: { canAccessDashboard?: boolean }
        navPracticeAreas?: typeof practiceAreaLinks
        navSectors?: typeof sectorLinks
    }>()
    const managedPracticeAreaLinks = props.navPracticeAreas?.length
        ? mergeNavFallbacks(props.navPracticeAreas, practiceAreaLinks)
        : mergeNavFallbacks(practiceAreaLinks, practiceAreaLinks)
    const managedSectorLinks = props.navSectors?.length
        ? mergeNavFallbacks(props.navSectors, sectorLinks)
        : mergeNavFallbacks(sectorLinks, sectorLinks)
    const canAccessDashboard = Boolean(props.auth?.canAccessDashboard)
    const [scrolled,       setScrolled]       = useState(false)
    const [menuOpen,       setMenuOpen]       = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
    const [practicePreviewIndex, setPracticePreviewIndex] = useState(0)
    const [sectorPreviewIndex, setSectorPreviewIndex] = useState(0)
    const navRef = useRef<HTMLElement>(null)
    const dropdownCloseTimer = useRef<number | null>(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false)
        setActiveDropdown(null)
        setMobileExpanded(null)
    }, [url])

    useEffect(() => {
        setPracticePreviewIndex(0)
    }, [managedPracticeAreaLinks.length])

    useEffect(() => {
        setSectorPreviewIndex(0)
    }, [managedSectorLinks.length])

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href)

    const openDropdown = (key: string) => {
        if (dropdownCloseTimer.current) {
            window.clearTimeout(dropdownCloseTimer.current)
        }

        setActiveDropdown(key)
    }

    const closeDropdown = () => {
        if (dropdownCloseTimer.current) {
            window.clearTimeout(dropdownCloseTimer.current)
        }

        dropdownCloseTimer.current = window.setTimeout(() => {
            setActiveDropdown(null)
        }, 120)
    }

    const toggleMobileExpand = (key: string) =>
        setMobileExpanded(prev => prev === key ? null : key)

    const linkCls = (active: boolean) =>
        active
            ? 'text-navy-950'
            : 'text-navy-800/75 hover:text-navy-950'

    const dropdownPanelCls = (open: boolean, width: string, position: string) =>
        `absolute top-full mt-3 ${position} ${width} bg-white border border-gold-200 shadow-xl rounded-sm overflow-hidden origin-top transition-all duration-200 ease-out ${
            open
                ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
                : 'opacity-0 invisible -translate-y-2 scale-[0.98] pointer-events-none'
        }`

    const PreviewCard = ({
        item,
        eyebrow,
        fallback,
        viewAllHref,
        viewAllLabel,
    }: {
        item?: NavFeatureLink
        eyebrow: string
        fallback: string
        viewAllHref: string
        viewAllLabel: string
    }) => (
        <div className="h-full bg-gold-50 p-5">
            <div className="relative mb-5 h-44 overflow-hidden border border-gold-200 bg-[#683030]">
                {item?.image_url ? (
                    <img
                        key={item.href}
                        src={item.image_url}
                        alt={item.label}
                        className="h-full w-full object-cover transition-transform duration-500"
                        onError={(event) => {
                            if (item.fallback_image_url && event.currentTarget.dataset.fallbackApplied !== 'true') {
                                event.currentTarget.dataset.fallbackApplied = 'true'
                                event.currentTarget.src = item.fallback_image_url
                            }
                        }}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#2f2526] px-8 text-center">
                        <span className="font-serif text-2xl font-semibold leading-tight text-gold-200">{item?.label ?? eyebrow}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241313]/85 via-[#241313]/10 to-transparent" />
                <span className="absolute left-4 top-4 border border-gold-300/50 bg-[#241313]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-200">
                    {eyebrow}
                </span>
            </div>
            <h3 className="font-serif text-xl font-semibold leading-snug text-navy-950">
                {item?.label ?? viewAllLabel}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                {item?.description || fallback}
            </p>
            <Link
                href={item?.href ?? viewAllHref}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-navy-950 transition-colors"
                onClick={() => setActiveDropdown(null)}
            >
                Open Topic
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </Link>
            <div className="mt-5 border-t border-gold-200 pt-4">
                <Link
                    href={viewAllHref}
                    className="text-navy-950 text-xs font-medium hover:text-gold-700 transition-colors flex items-center gap-1"
                    onClick={() => setActiveDropdown(null)}
                >
                    {viewAllLabel}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )

    const ChevronIcon = ({ open }: { open: boolean }) => (
        <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    )

    return (
        <header
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-gold-50 border-b border-gold-200 shadow-sm py-2'
                    : 'bg-gold-100 border-b border-gold-200 shadow-sm py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                    <img
                        src="/Logo/trill_logo.png"
                        alt="Trill & Associates Advocates"
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1">

                    {/* Home */}
                    <Link
                        href="/"
                        className={`relative text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(url === '/')}`}
                    >
                        Home
                    </Link>

                    {/* About dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => openDropdown('about')}
                        onMouseLeave={closeDropdown}
                        onFocus={() => openDropdown('about')}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                                closeDropdown()
                            }
                        }}
                    >
                        <button
                            className={`flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/about') || isActive('/team'))}`}
                            aria-expanded={activeDropdown === 'about'}
                        >
                            About
                            <ChevronIcon open={activeDropdown === 'about'} />
                        </button>
                        <span className="absolute left-0 top-full h-3 w-full" />
                        <div className={dropdownPanelCls(activeDropdown === 'about', 'w-56', 'left-0')}>
                                <Link
                                    href="/about"
                                    className="flex flex-col px-5 py-4 hover:bg-gold-50 transition-colors border-b border-gold-100 group"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    <span className="text-navy-950 text-sm font-medium group-hover:text-gold-700 transition-colors">About the Firm</span>
                                    <span className="text-gray-500 text-xs mt-0.5">Our story, mission &amp; values</span>
                                </Link>
                                <Link
                                    href="/team"
                                    className="flex flex-col px-5 py-4 hover:bg-gold-50 transition-colors border-b border-gold-100 group"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    <span className="text-navy-950 text-sm font-medium group-hover:text-gold-700 transition-colors">Our Team</span>
                                    <span className="text-gray-500 text-xs mt-0.5">Meet our dedicated advocates</span>
                                </Link>
                                <Link
                                    href="/memberships"
                                    className="flex flex-col px-5 py-4 hover:bg-gold-50 transition-colors group"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    <span className="text-navy-950 text-sm font-medium group-hover:text-gold-700 transition-colors">Memberships</span>
                                    <span className="text-gray-500 text-xs mt-0.5">Professional bodies &amp; affiliations</span>
                                </Link>
                            </div>
                    </div>

                    {/* Practice Areas mega dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => openDropdown('practice')}
                        onMouseLeave={closeDropdown}
                        onFocus={() => openDropdown('practice')}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                                closeDropdown()
                            }
                        }}
                    >
                        <button
                            className={`flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/practice-areas'))}`}
                            aria-expanded={activeDropdown === 'practice'}
                        >
                            Practice Areas
                            <ChevronIcon open={activeDropdown === 'practice'} />
                        </button>
                        <span className="absolute left-0 top-full h-3 w-full" />
                        <div className={dropdownPanelCls(activeDropdown === 'practice', 'w-[760px]', 'left-1/2 -translate-x-1/2')}>
                                <div className="grid grid-cols-[0.9fr_1.1fr] gap-0">
                                    <div className="max-h-[430px] overflow-y-auto border-r border-gold-100 p-5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="h-px w-6 bg-gold-500" />
                                            <p className="text-gold-700 text-xs tracking-[0.25em] uppercase font-medium">Practice Areas</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1">
                                            {managedPracticeAreaLinks.map((link, index) => {
                                                const active = index === practicePreviewIndex

                                                return (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onMouseEnter={() => setPracticePreviewIndex(index)}
                                                        onFocus={() => setPracticePreviewIndex(index)}
                                                        className={`text-xs py-2 px-2 transition-colors flex items-center gap-2 border-l-2 ${
                                                            active
                                                                ? 'border-gold-500 bg-gold-50 text-navy-950'
                                                                : 'border-transparent text-gray-600 hover:bg-gold-50 hover:text-navy-950'
                                                        }`}
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        <span className="text-gold-600 text-base leading-none">›</span>
                                                        {link.label}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <PreviewCard
                                        item={managedPracticeAreaLinks[practicePreviewIndex] ?? managedPracticeAreaLinks[0]}
                                        eyebrow="Practice Area"
                                        fallback="Explore how this practice area supports clients with practical, commercially aware legal guidance."
                                        viewAllHref="/practice-areas"
                                        viewAllLabel="View All Practice Areas"
                                    />
                                </div>
                            </div>
                    </div>

                    {/* Sectors dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => openDropdown('sectors')}
                        onMouseLeave={closeDropdown}
                        onFocus={() => openDropdown('sectors')}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                                closeDropdown()
                            }
                        }}
                    >
                        <button
                            className={`flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/sectors'))}`}
                            aria-expanded={activeDropdown === 'sectors'}
                        >
                            Sectors
                            <ChevronIcon open={activeDropdown === 'sectors'} />
                        </button>
                        <span className="absolute left-0 top-full h-3 w-full" />
                        <div className={dropdownPanelCls(activeDropdown === 'sectors', 'w-[720px]', 'left-1/2 -translate-x-1/2')}>
                            <div className="grid grid-cols-[0.85fr_1.15fr] gap-0">
                                <div className="max-h-[430px] overflow-y-auto border-r border-gold-100 p-5">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="h-px w-6 bg-gold-500" />
                                        <p className="text-gold-700 text-xs tracking-[0.25em] uppercase font-medium">Industry Sectors</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {managedSectorLinks.map((link, index) => {
                                            const active = index === sectorPreviewIndex

                                            return (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    onMouseEnter={() => setSectorPreviewIndex(index)}
                                                    onFocus={() => setSectorPreviewIndex(index)}
                                                    className={`text-xs py-2 px-2 transition-colors flex items-center gap-2 border-l-2 ${
                                                        active
                                                            ? 'border-gold-500 bg-gold-50 text-navy-950'
                                                            : 'border-transparent text-gray-600 hover:bg-gold-50 hover:text-navy-950'
                                                    }`}
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <span className="text-gold-600 text-base leading-none">›</span>
                                                    {link.label}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                                <PreviewCard
                                    item={managedSectorLinks[sectorPreviewIndex] ?? managedSectorLinks[0]}
                                    eyebrow="Sector"
                                    fallback="Explore the industries and client contexts where the firm provides focused legal support."
                                    viewAllHref="/sectors"
                                    viewAllLabel="View All Sectors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Legal Insights */}
                    <Link
                        href="/insights"
                        className={`text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/insights'))}`}
                    >
                        Legal Insights
                    </Link>

                    {canAccessDashboard && (
                        <Link
                            href="/admin"
                            className={`text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/admin'))}`}
                        >
                            Dashboard
                        </Link>
                    )}

                    {/* Book Consultation CTA */}
                    <Link
                        href="/book-consultation"
                        className="ml-2 inline-flex items-center gap-2 bg-[#683030] hover:bg-[#572929] text-white font-semibold px-5 py-2.5 rounded-sm transition-all duration-300 tracking-wide uppercase text-xs"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        Book Consultation
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 text-navy-950 transition-colors duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 bg-[#683030] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 bg-[#683030] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 bg-[#683030] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="bg-gold-100 border-t border-gold-200 px-4 py-4 flex flex-col gap-1 overflow-y-auto max-h-[75vh] shadow-sm">

                    <Link href="/" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-gold-200 ${url === '/' ? 'text-navy-950' : 'text-gray-600'}`}>
                        Home
                    </Link>

                    {/* About accordion */}
                    <div className="border-b border-gold-200">
                        <button
                            onClick={() => toggleMobileExpand('about')}
                            className={`w-full flex items-center justify-between text-sm font-medium tracking-widest uppercase py-3 ${isActive('/about') || isActive('/team') ? 'text-navy-950' : 'text-gray-600'}`}
                        >
                            About
                            <ChevronIcon open={mobileExpanded === 'about'} />
                        </button>
                        {mobileExpanded === 'about' && (
                            <div className="pl-4 pb-3 flex flex-col gap-2">
                                <Link href="/about" className="text-sm text-gray-600 hover:text-navy-950 py-1.5 flex items-center gap-2">
                                    <span className="text-gold-500">›</span> About the Firm
                                </Link>
                                <Link href="/team" className="text-sm text-gray-600 hover:text-navy-950 py-1.5 flex items-center gap-2">
                                    <span className="text-gold-500">›</span> Our Team
                                </Link>
                                <Link href="/memberships" className="text-sm text-gray-600 hover:text-navy-950 py-1.5 flex items-center gap-2">
                                    <span className="text-gold-500">›</span> Memberships
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Practice Areas accordion */}
                    <div className="border-b border-gold-200">
                        <button
                            onClick={() => toggleMobileExpand('practice')}
                            className={`w-full flex items-center justify-between text-sm font-medium tracking-widest uppercase py-3 ${isActive('/practice-areas') ? 'text-navy-950' : 'text-gray-600'}`}
                        >
                            Practice Areas
                            <ChevronIcon open={mobileExpanded === 'practice'} />
                        </button>
                        {mobileExpanded === 'practice' && (
                            <div className="pl-4 pb-3 flex flex-col gap-1">
                                <Link href="/practice-areas" className="text-xs text-navy-950 tracking-wider uppercase py-1 mb-1">View All Practice Areas →</Link>
                                {managedPracticeAreaLinks.map(link => (
                                    <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-navy-950 py-1 flex items-center gap-2">
                                        <span className="text-gold-500">›</span> {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sectors accordion */}
                    <div className="border-b border-gold-200">
                        <button
                            onClick={() => toggleMobileExpand('sectors')}
                            className={`w-full flex items-center justify-between text-sm font-medium tracking-widest uppercase py-3 ${isActive('/sectors') ? 'text-navy-950' : 'text-gray-600'}`}
                        >
                            Sectors
                            <ChevronIcon open={mobileExpanded === 'sectors'} />
                        </button>
                        {mobileExpanded === 'sectors' && (
                            <div className="pl-4 pb-3 flex flex-col gap-1">
                                <Link href="/sectors" className="text-xs text-navy-950 tracking-wider uppercase py-1 mb-1">View All Sectors →</Link>
                                {managedSectorLinks.map(link => (
                                    <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-navy-950 py-1 flex items-center gap-2">
                                        <span className="text-gold-500">›</span> {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/insights" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-gold-200 ${isActive('/insights') ? 'text-navy-950' : 'text-gray-600'}`}>
                        Legal Insights
                    </Link>

                    {canAccessDashboard && (
                        <Link href="/admin" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-gold-200 ${isActive('/admin') ? 'text-navy-950' : 'text-gray-600'}`}>
                            Dashboard
                        </Link>
                    )}

                    <Link
                        href="/book-consultation"
                        className="btn-primary justify-center mt-3"
                    >
                        Book a Consultation
                    </Link>
                </nav>
            </div>
        </header>
    )
}
