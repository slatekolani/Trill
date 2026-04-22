import { useState, useEffect, useRef } from 'react'
import { Link, usePage } from '@inertiajs/react'

const practiceAreaLinks = [
    { label: 'Corporate & Commercial Law',   href: '/practice-areas/corporate-commercial' },
    { label: 'Dispute Resolution',           href: '/practice-areas/dispute-resolution' },
    { label: 'Alternative Dispute Resolution', href: '/practice-areas/alternative-dispute-resolution' },
    { label: 'Employment & Labour Law',      href: '/practice-areas/employment-labour' },
    { label: 'Intellectual Property',        href: '/practice-areas/intellectual-property' },
    { label: 'Real Estate & Conveyancing',   href: '/practice-areas/real-estate' },
    { label: 'Regulatory Compliance',        href: '/practice-areas/regulatory-compliance' },
    { label: 'Debt Recovery & Enforcement',  href: '/practice-areas/debt-recovery' },
    { label: 'Investment & Business Advisory', href: '/practice-areas/investment-advisory' },
    { label: 'Banking & Finance',            href: '/practice-areas/banking-finance' },
    { label: 'Taxation',                     href: '/practice-areas/taxation' },
    { label: 'Immigration',                  href: '/practice-areas/immigration' },
    { label: 'Oil & Gas',                    href: '/practice-areas/oil-gas' },
    { label: 'Entertainment Law',            href: '/practice-areas/entertainment' },
    { label: 'Insurance Law',                href: '/practice-areas/insurance' },
    { label: 'Cyber-crime Law',              href: '/practice-areas/cyber-crime' },
    { label: 'Human Rights',                 href: '/practice-areas/human-rights' },
]

const sectorLinks = [
    { label: 'Energy & Infrastructure',          href: '/sectors/energy-infrastructure' },
    { label: 'Real Estate & Construction',       href: '/sectors/real-estate-construction' },
    { label: 'Startups & Technology',            href: '/sectors/startups-technology' },
    { label: 'NGOs & Non-Profit Organizations',  href: '/sectors/ngos-nonprofits' },
    { label: 'Trade & Distribution',             href: '/sectors/trade-distribution' },
    { label: 'Professional Services',            href: '/sectors/professional-services' },
    { label: 'Employment-Intensive Businesses',  href: '/sectors/employment-businesses' },
    { label: 'Brands, Media & Creative Enterprises', href: '/sectors/brands-media' },
]

export default function Navbar() {
    const { url } = usePage()
    const [scrolled,       setScrolled]       = useState(false)
    const [menuOpen,       setMenuOpen]       = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
    const navRef = useRef<HTMLElement>(null)

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

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href)

    const toggleDropdown = (key: string) =>
        setActiveDropdown(prev => prev === key ? null : key)

    const toggleMobileExpand = (key: string) =>
        setMobileExpanded(prev => prev === key ? null : key)

    const linkCls = (active: boolean) =>
        active
            ? 'text-gold-500'
            : scrolled
                ? 'text-navy-950 hover:text-navy-700'
                : 'text-gray-300 hover:text-white'

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
                scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                    <img
                        src="/Logo/trill_logo.png"
                        alt="Trill & Associates Advocates"
                        className="h-16 w-auto object-contain drop-shadow-lg"
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
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('about')}
                            className={`flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/about') || isActive('/team'))}`}
                        >
                            About
                            <ChevronIcon open={activeDropdown === 'about'} />
                        </button>
                        {activeDropdown === 'about' && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-navy-950 border border-white/10 shadow-2xl rounded-sm overflow-hidden">
                                <Link
                                    href="/about"
                                    className="flex flex-col px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/10 group"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    <span className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">About the Firm</span>
                                    <span className="text-gray-500 text-xs mt-0.5">Our story, mission &amp; values</span>
                                </Link>
                                <Link
                                    href="/team"
                                    className="flex flex-col px-5 py-4 hover:bg-white/5 transition-colors group"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    <span className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">Our Team</span>
                                    <span className="text-gray-500 text-xs mt-0.5">Meet our dedicated advocates</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Practice Areas mega dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('practice')}
                            className={`flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/practice-areas'))}`}
                        >
                            Practice Areas
                            <ChevronIcon open={activeDropdown === 'practice'} />
                        </button>
                        {activeDropdown === 'practice' && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-navy-950 border border-white/10 shadow-2xl rounded-sm overflow-hidden">
                                <div className="grid grid-cols-2 gap-0">
                                    {/* Practice Areas column */}
                                    <div className="p-6 border-r border-white/10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="h-px w-6 bg-gold-500" />
                                            <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium">Practice Areas</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1">
                                            {practiceAreaLinks.slice(0, 9).map(link => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className="text-gray-400 text-xs py-1 hover:text-gold-400 transition-colors flex items-center gap-2"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <span className="text-gold-600 text-base leading-none">›</span>
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 gap-1 mb-4">
                                            {practiceAreaLinks.slice(9).map(link => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className="text-gray-400 text-xs py-1 hover:text-gold-400 transition-colors flex items-center gap-2"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <span className="text-gold-600 text-base leading-none">›</span>
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t border-white/10 pt-4 mt-2">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="h-px w-6 bg-gold-500" />
                                                <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium">Sectors</p>
                                            </div>
                                            {sectorLinks.slice(0, 4).map(link => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className="text-gray-400 text-xs py-1 hover:text-gold-400 transition-colors flex items-center gap-2 block"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <span className="text-gold-600 text-base leading-none">›</span>
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-navy-900 border-t border-white/10 px-6 py-3 flex items-center justify-between">
                                    <span className="text-gray-500 text-xs">Serving clients across Tanzania &amp; East Africa</span>
                                    <Link
                                        href="/practice-areas"
                                        className="text-gold-400 text-xs font-medium hover:text-gold-300 transition-colors flex items-center gap-1"
                                        onClick={() => setActiveDropdown(null)}
                                    >
                                        View All Areas
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Legal Insights */}
                    <Link
                        href="/insights"
                        className={`text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/insights'))}`}
                    >
                        Legal Insights
                    </Link>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        className={`text-xs font-medium tracking-widest uppercase px-3 py-2 transition-colors duration-300 ${linkCls(isActive('/contact'))}`}
                    >
                        Contact
                    </Link>

                    {/* Book Consultation CTA */}
                    <Link
                        href="/book-consultation"
                        className="ml-2 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-2.5 rounded-sm transition-all duration-300 tracking-wide uppercase text-xs"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        Book Consultation
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-navy-950' : 'text-white'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy-950' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy-950' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy-950' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="bg-navy-950/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1 overflow-y-auto max-h-[75vh]">

                    <Link href="/" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-white/10 ${url === '/' ? 'text-gold-400' : 'text-gray-300'}`}>
                        Home
                    </Link>

                    {/* About accordion */}
                    <div className="border-b border-white/10">
                        <button
                            onClick={() => toggleMobileExpand('about')}
                            className={`w-full flex items-center justify-between text-sm font-medium tracking-widest uppercase py-3 ${isActive('/about') || isActive('/team') ? 'text-gold-400' : 'text-gray-300'}`}
                        >
                            About
                            <ChevronIcon open={mobileExpanded === 'about'} />
                        </button>
                        {mobileExpanded === 'about' && (
                            <div className="pl-4 pb-3 flex flex-col gap-2">
                                <Link href="/about" className="text-sm text-gray-400 hover:text-gold-400 py-1.5 flex items-center gap-2">
                                    <span className="text-gold-500">›</span> About the Firm
                                </Link>
                                <Link href="/team" className="text-sm text-gray-400 hover:text-gold-400 py-1.5 flex items-center gap-2">
                                    <span className="text-gold-500">›</span> Our Team
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Practice Areas accordion */}
                    <div className="border-b border-white/10">
                        <button
                            onClick={() => toggleMobileExpand('practice')}
                            className={`w-full flex items-center justify-between text-sm font-medium tracking-widest uppercase py-3 ${isActive('/practice-areas') ? 'text-gold-400' : 'text-gray-300'}`}
                        >
                            Practice Areas
                            <ChevronIcon open={mobileExpanded === 'practice'} />
                        </button>
                        {mobileExpanded === 'practice' && (
                            <div className="pl-4 pb-3 flex flex-col gap-1">
                                <Link href="/practice-areas" className="text-xs text-gold-400 tracking-wider uppercase py-1 mb-1">View All Practice Areas →</Link>
                                {practiceAreaLinks.map(link => (
                                    <Link key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-gold-400 py-1 flex items-center gap-2">
                                        <span className="text-gold-500">›</span> {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/insights" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-white/10 ${isActive('/insights') ? 'text-gold-400' : 'text-gray-300'}`}>
                        Legal Insights
                    </Link>
                    <Link href="/contact" className={`text-sm font-medium tracking-widest uppercase py-3 border-b border-white/10 ${isActive('/contact') ? 'text-gold-400' : 'text-gray-300'}`}>
                        Contact Us
                    </Link>

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
