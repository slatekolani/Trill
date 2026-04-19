import { Link } from '@inertiajs/react'

const practiceAreaLinks = [
    { label: 'Corporate & Commercial Law',    href: '/practice-areas/corporate-commercial' },
    { label: 'Dispute Resolution',            href: '/practice-areas/dispute-resolution' },
    { label: 'Employment & Labour Law',       href: '/practice-areas/employment-labour' },
    { label: 'Intellectual Property',         href: '/practice-areas/intellectual-property' },
    { label: 'Real Estate & Conveyancing',    href: '/practice-areas/real-estate' },
    { label: 'Taxation',                      href: '/practice-areas/taxation' },
    { label: 'Banking & Finance',             href: '/practice-areas/banking-finance' },
    { label: 'Immigration',                   href: '/practice-areas/immigration' },
    { label: 'Debt Recovery & Enforcement',   href: '/practice-areas/debt-recovery' },
    { label: 'Oil & Gas',                     href: '/practice-areas/oil-gas' },
]

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-gray-300">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            {/* Pre-footer CTA strip */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-serif text-white text-2xl font-bold mb-1">
                                Ready to Work with Us?
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Our specialist advocates are ready to help. Get in touch today.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <Link
                                href="/book-consultation"
                                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                Book a Consultation
                            </Link>
                            <a
                                href="tel:+255738600670"
                                className="inline-flex items-center gap-2 border border-white/20 hover:border-gold-400 text-gray-300 hover:text-gold-400 font-medium px-6 py-3 rounded-sm transition-colors text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +255 738 600 670
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                    {/* Brand column — 2 cols */}
                    <div className="lg:col-span-2">
                        <div className="mb-5">
                            <img
                                src="/Logo/trill_logo.png"
                                alt="Trill & Associates Advocates"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-3">
                            A modern Tanzanian law firm providing strategic, practical, and commercially sound
                            legal solutions to businesses, institutions, investors, and private clients.
                        </p>
                        <p className="text-xs text-gray-500 mb-6">
                            Licensed Notaries Public &amp; Commissioners for Oath.<br />
                            Members of the Tanganyika Law Society.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            <a href="https://facebook.com/trilladvocates" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="Facebook">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                            <a href="https://twitter.com/trilladvocates" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="X / Twitter">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 1200 1227"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
                            </a>
                            <a href="https://linkedin.com/company/trilladvocates" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="LinkedIn">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-base font-semibold mb-5 pb-2 border-b border-white/10">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Home',              href: '/'                  },
                                { label: 'About the Firm',    href: '/about'             },
                                { label: 'Our Team',          href: '/team'              },
                                { label: 'Practice Areas',    href: '/practice-areas'    },
                                { label: 'Legal Insights',    href: '/insights'          },
                                { label: 'Contact Us',        href: '/contact'           },
                                { label: 'Book a Consultation', href: '/book-consultation' },
                            ].map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2">
                                        <span className="text-gold-500">›</span> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-white font-serif text-base font-semibold mb-5 pb-2 border-b border-white/10">
                            Practice Areas
                        </h4>
                        <ul className="space-y-2">
                            {practiceAreaLinks.map(area => (
                                <li key={area.href}>
                                    <Link href={area.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-start gap-2">
                                        <span className="text-gold-500 mt-0.5">›</span> {area.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/practice-areas" className="text-xs text-gold-500 hover:text-gold-400 transition-colors mt-1 block">
                                    View All 17 Areas →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-base font-semibold mb-5 pb-2 border-b border-white/10">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-gold-400 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    18th Floor, Rita Tower<br />
                                    Mkunyanga – Simu Street<br />
                                    P.O. Box 5823<br />
                                    Dar-es-Salaam, Tanzania
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <a href="tel:+255738600670" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                                    +255 738 600 670
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <a href="mailto:info@trill.co.tz" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                                    info@trill.co.tz
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    Mon – Fri: 8:00 AM – 5:00 PM<br />
                                    Sat: 9:00 AM – 1:00 PM
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Trill &amp; Associates Advocates. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                        <Link href="/about" className="hover:text-gold-400 transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
                        <Link href="/insights" className="hover:text-gold-400 transition-colors">Legal Insights</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
