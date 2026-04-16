import { Link } from '@inertiajs/react'

const practiceAreas = [
    'Corporate & Commercial Law',
    'Intellectual Property',
    'Land Laws',
    'Taxation',
    'Banking & Finance',
    'Oil & Gas',
    'Immigration',
    'Human Rights',
]

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-gray-300">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/Logo/trill_logo.png"
                                alt="Trill & Associates Advocates"
                                className="h-24 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">
                            One of Tanzania's top law firms, based in Dar-es-Salaam, providing exceptional legal services inland and around the globe.
                        </p>
                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com/trilladvocates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                            {/* X (formerly Twitter) */}
                            <a
                                href="https://twitter.com/trilladvocates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="X"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 1200 1227"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/company/trilladvocates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg font-semibold mb-5 pb-2 border-b border-white/10">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Home',       href: '/'        },
                                { label: 'About Us',   href: '/about'   },
                                { label: 'Contact Us', href: '/contact' },
                            ].map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <span className="text-gold-500">›</span> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-white font-serif text-lg font-semibold mb-5 pb-2 border-b border-white/10">
                            Practice Areas
                        </h4>
                        <ul className="space-y-2">
                            {practiceAreas.map(area => (
                                <li key={area} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-gold-500 mt-0.5">›</span> {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-lg font-semibold mb-5 pb-2 border-b border-white/10">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-gold-400 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    Makunganya / Simu Street, 18th Floor — Rita Tower<br />
                                    P.O. Box 5823, Dar-es-Salaam, Tanzania
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                <a href="tel:+255738600670" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                                    +255 738 600 670
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <a href="mailto:info@trill.co.tz" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                                    info@trill.co.tz
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Trill & Associates Advocates. All Rights Reserved.
                    </p>
                    <p className="text-xs text-gray-600">
                        Licensed Notaries Public & Commissioners for Oath
                    </p>
                </div>
            </div>
        </footer>
    )
}
