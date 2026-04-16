import { useState, useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'

const navLinks = [
    { label: 'Home',       href: '/'        },
    { label: 'About Us',   href: '/about'   },
    { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
    const { url } = usePage()
    const [scrolled,     setScrolled]     = useState(false)
    const [menuOpen,     setMenuOpen]     = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href)

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-navy-950/98 backdrop-blur-md shadow-2xl py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/Logo/trill_logo.png"
                        alt="Trill & Associates Advocates"
                        className="h-20 w-auto object-contain drop-shadow-lg"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 pb-1 ${
                                isActive(link.href)
                                    ? 'text-gold-400'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold-400" />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn-primary text-xs px-6 py-2.5"
                    >
                        Free Consultation
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="bg-navy-950/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-medium tracking-widest uppercase py-2 border-b border-white/10 last:border-0 ${
                                isActive(link.href) ? 'text-gold-400' : 'text-gray-300'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="btn-primary justify-center mt-2"
                    >
                        Free Consultation
                    </Link>
                </nav>
            </div>
        </header>
    )
}
