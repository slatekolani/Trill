import { Link, usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

interface PracticeAreaPayload {
    title: string
    slug: string
    tagline: string | null
    heroImg: string | null
    intro: string | null
    services: string[]
    clientNeeds: { scenario: string; answer: string }[]
    whyTrill: string | null
    relatedAreas: { title: string; href: string }[]
}

interface Props {
    slug?: string
    area?: PracticeAreaPayload
}

const areaData: Record<string, {
    title: string
    tagline: string
    heroImg: string
    intro: string
    services: string[]
    clientNeeds: { scenario: string; answer: string }[]
    whyTrill: string
    relatedAreas: { title: string; href: string }[]
}> = {
    'corporate-commercial': {
        title:   'Corporate & Commercial Law',
        tagline: 'Strategic legal counsel for businesses at every stage of growth',
        heroImg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
        intro:   'Our Corporate & Commercial Law practice provides comprehensive legal support to businesses operating in Tanzania and across East Africa. Whether you are establishing a new company, structuring a joint venture, or navigating a complex acquisition, our team provides practical, commercially sound advice that helps you achieve your objectives.',
        services: [
            'Company incorporation and business structuring',
            'Corporate governance and board advisory',
            'Mergers, acquisitions, and restructurings',
            'Joint ventures and partnership agreements',
            'Commercial contracts and supply agreements',
            'Shareholder agreements and shareholder disputes',
            'Due diligence for transactions',
            'Company secretarial services',
            'Franchising and licensing arrangements',
        ],
        clientNeeds: [
            { scenario: 'Setting up a business in Tanzania', answer: 'We guide you through the entire incorporation process — from selecting the right legal structure to completing all regulatory filings, tax registrations, and obtaining relevant licences.' },
            { scenario: 'Acquiring or merging with another business', answer: 'Our team conducts thorough legal due diligence and advises on transaction structuring, warranties, and post-completion integration to protect your interests at every stage.' },
            { scenario: 'Drafting or reviewing commercial contracts', answer: 'We draft, review, and negotiate contracts to ensure your commercial relationships are properly documented, enforceable, and protective of your position.' },
        ],
        whyTrill: 'Our corporate team combines deep knowledge of Tanzanian business law with genuine commercial awareness. We speak the language of business — delivering practical advice that is grounded in legal rigour but focused on your commercial outcomes.',
        relatedAreas: [
            { title: 'Investment & Business Advisory', href: '/practice-areas/investment-advisory' },
            { title: 'Regulatory Compliance',          href: '/practice-areas/regulatory-compliance' },
            { title: 'Banking & Finance',              href: '/practice-areas/banking-finance' },
            { title: 'Taxation',                       href: '/practice-areas/taxation' },
        ],
    },
    'dispute-resolution': {
        title:   'Dispute Resolution',
        tagline: 'Vigorous advocacy in courts and tribunals across Tanzania',
        heroImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
        intro:   'Our Dispute Resolution practice represents clients in civil and commercial litigation before all levels of Tanzanian courts — from the Magistrates Court to the High Court and Court of Appeal. We combine rigorous legal analysis with strategic case management to achieve the best possible outcomes for our clients.',
        services: [
            'Civil and commercial litigation',
            'Contract disputes and enforcement',
            'Property and land disputes',
            'Employment dispute litigation',
            'Debt recovery and enforcement',
            'Judicial review and constitutional matters',
            'Injunctions and urgent relief',
            'Expert witness coordination',
            'Appeals before the Court of Appeal',
        ],
        clientNeeds: [
            { scenario: 'A contractual dispute with a business partner', answer: 'We assess your legal position, advise on the strengths of your claim, and pursue resolution — through negotiation first, and litigation where necessary.' },
            { scenario: 'Recovering a debt or enforcing a judgment', answer: 'We identify the most effective enforcement strategy and pursue recovery through formal legal proceedings, attachment orders, and other enforcement mechanisms.' },
            { scenario: 'Challenging an unlawful decision by a public authority', answer: 'Our team handles judicial review proceedings and constitutional matters before the High Court, protecting your rights against government overreach.' },
        ],
        whyTrill: 'Our litigators are known for thorough preparation, clear legal thinking, and persuasive advocacy. We have represented clients in landmark cases across Tanzania and are recognised for delivering results in complex, high-value disputes.',
        relatedAreas: [
            { title: 'Alternative Dispute Resolution', href: '/practice-areas/alternative-dispute-resolution' },
            { title: 'Debt Recovery & Enforcement',   href: '/practice-areas/debt-recovery' },
            { title: 'Employment & Labour Law',        href: '/practice-areas/employment-labour' },
            { title: 'Human Rights',                   href: '/practice-areas/human-rights' },
        ],
    },
    'intellectual-property': {
        title:   'Intellectual Property',
        tagline: 'Protecting your innovations, brands, and creative works',
        heroImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
        intro:   'Our Intellectual Property practice safeguards the most valuable intangible assets of your business — your brand, innovations, and creative works. We advise clients across a wide range of industries on protecting, managing, and enforcing their IP rights in Tanzania and internationally.',
        services: [
            'Trademark registration and prosecution',
            'Copyright registration and protection',
            'Patent advisory and filings',
            'IP due diligence for transactions',
            'IP licensing and technology transfer agreements',
            'Domain name disputes',
            'Anti-counterfeiting enforcement',
            'Trade secret protection',
            'IP portfolio management and strategy',
        ],
        clientNeeds: [
            { scenario: 'Registering a trademark in Tanzania', answer: 'We handle the entire trademark registration process at BRELA, advise on the strength of your mark, conduct prior art searches, and respond to any official objections.' },
            { scenario: 'Someone is using your brand without permission', answer: 'We assess your legal position and pursue enforcement through cease-and-desist letters, customs seizures, civil litigation, or criminal prosecution as appropriate.' },
            { scenario: 'Licensing your IP to a third party', answer: 'We draft comprehensive licensing and technology transfer agreements that protect your rights, define permitted uses, and establish appropriate royalty structures.' },
        ],
        whyTrill: 'We understand that your intellectual property is often your most valuable asset. Our IP team combines deep legal knowledge with practical commercial advice to ensure your IP strategy delivers real business value.',
        relatedAreas: [
            { title: 'Entertainment Law',      href: '/practice-areas/entertainment' },
            { title: 'Cyber-crime Law',        href: '/practice-areas/cyber-crime' },
            { title: 'Corporate & Commercial', href: '/practice-areas/corporate-commercial' },
            { title: 'Regulatory Compliance',  href: '/practice-areas/regulatory-compliance' },
        ],
    },
    'employment-labour': {
        title:   'Employment & Labour Law',
        tagline: 'Protecting rights and managing workforce relationships',
        heroImg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80',
        intro:   'Our Employment & Labour Law practice advises employers, employees, and institutions on all aspects of Tanzanian employment law. We help organisations build legally compliant workforces and resolve employment disputes efficiently — protecting both business interests and employee rights.',
        services: [
            'Employment contracts and service agreements',
            'HR policy development and review',
            'Disciplinary and grievance procedures',
            'Redundancy and retrenchment processes',
            'Employment tribunal representation',
            'Expatriate employment and work permit advisory',
            'Collective bargaining and trade union matters',
            'Executive compensation and benefit structures',
            'Employment due diligence for transactions',
        ],
        clientNeeds: [
            { scenario: 'Terminating an employee in compliance with Tanzanian law', answer: 'We advise on the correct legal process for termination — including notice requirements, severance entitlements, and how to minimise the risk of wrongful dismissal claims.' },
            { scenario: 'Building a legally compliant HR framework', answer: 'We review your employment contracts, policies, and procedures to ensure full compliance with the Employment and Labour Relations Act and associated regulations.' },
            { scenario: 'Resolving an employment dispute', answer: 'We represent employers before the Commission for Mediation and Arbitration (CMA) and the Labour Division of the High Court, pursuing efficient resolution of workplace disputes.' },
        ],
        whyTrill: 'We advise some of Tanzania\'s leading employers across multiple sectors. Our employment team understands the complexity of managing people in a regulated environment — delivering advice that is practical, compliant, and commercially realistic.',
        relatedAreas: [
            { title: 'Dispute Resolution',    href: '/practice-areas/dispute-resolution' },
            { title: 'Immigration',           href: '/practice-areas/immigration' },
            { title: 'Regulatory Compliance', href: '/practice-areas/regulatory-compliance' },
            { title: 'Corporate Law',         href: '/practice-areas/corporate-commercial' },
        ],
    },
    'real-estate': {
        title:   'Real Estate & Conveyancing',
        tagline: 'Comprehensive property law services across Tanzania',
        heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
        intro:   'Our Real Estate & Conveyancing practice provides full-service property law support for buyers, sellers, developers, lenders, and investors. We handle property transactions across mainland Tanzania and Zanzibar, navigating the unique legal frameworks governing land ownership in each jurisdiction.',
        services: [
            'Property purchase and sale transactions',
            'Title investigations and due diligence',
            'Land registration and certificate of title',
            'Commercial leases and tenancy agreements',
            'Mortgage and charge documentation',
            'Property development agreements',
            'Land dispute resolution',
            'Right of occupancy applications',
            'Zanzibar property transactions',
        ],
        clientNeeds: [
            { scenario: 'Buying land or property in Tanzania', answer: 'We conduct thorough title due diligence, verify the vendor\'s right to sell, and manage the entire conveyancing process to ensure a legally secure transfer of title.' },
            { scenario: 'Developing a property project', answer: 'We advise on development agreements, construction contracts, regulatory approvals, and financing documentation to support your project from inception to completion.' },
            { scenario: 'Resolving a land dispute', answer: 'Our property litigators handle land disputes before the Land Division of the High Court and other specialised tribunals, pursuing efficient resolution to protect your property rights.' },
        ],
        whyTrill: 'Property law in Tanzania has unique characteristics — from the distinction between granted right of occupancy and customary land rights to the separate legal framework in Zanzibar. Our experienced team navigates these complexities to deliver secure, efficient property transactions.',
        relatedAreas: [
            { title: 'Corporate & Commercial', href: '/practice-areas/corporate-commercial' },
            { title: 'Banking & Finance',      href: '/practice-areas/banking-finance' },
            { title: 'Dispute Resolution',     href: '/practice-areas/dispute-resolution' },
            { title: 'Regulatory Compliance',  href: '/practice-areas/regulatory-compliance' },
        ],
    },
}

// Default fallback for areas not yet in the data map
const defaultArea = (slug: string) => ({
    title:   slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    tagline: 'Expert legal counsel tailored to your specific needs',
    heroImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
    intro:   'Trill & Associates Advocates provides specialised legal services in this area, combining deep Tanzanian legal expertise with commercial awareness and a client-first approach. Our team of experienced advocates delivers practical, results-oriented advice across all aspects of this practice.',
    services: [
        'Specialist advisory and consultancy',
        'Transaction support and documentation',
        'Compliance and regulatory guidance',
        'Dispute resolution and litigation',
        'Risk assessment and mitigation',
    ],
    clientNeeds: [
        { scenario: 'You need specialist legal advice in this area', answer: 'Contact our team and we will connect you with the right advocate for your specific matter, ensuring you receive expert advice tailored to your situation.' },
    ],
    whyTrill: 'Our team brings deep expertise, commercial awareness, and a genuine commitment to delivering outcomes for our clients. We combine legal rigour with practical, business-focused thinking.',
    relatedAreas: [
        { title: 'Corporate & Commercial Law', href: '/practice-areas/corporate-commercial' },
        { title: 'Dispute Resolution',         href: '/practice-areas/dispute-resolution' },
    ],
})

export default function PracticeArea({ slug, area: managedArea }: Props) {
    const activeSlug = slug ?? managedArea?.slug ?? ''
    const area = managedArea ?? areaData[activeSlug] ?? defaultArea(activeSlug)
    const intro = area.intro ?? 'Trill & Associates Advocates provides focused legal services in this practice area, combining Tanzanian legal expertise with clear, practical advice.'
    const { appUrl, currentUrl } = usePage<{ appUrl: string; currentUrl: string }>().props

    const serviceSchema = {
        '@context':    'https://schema.org',
        '@type':       'Service',
        'name':        area.title,
        'description': intro,
        'url':         currentUrl,
        'provider': {
            '@type': 'LegalService',
            '@id':   `${appUrl}/#organization`,
            'name':  'Trill & Associates Advocates',
        },
        'areaServed': 'Tanzania',
    }

    const faqSchema = area.clientNeeds.length > 0 ? {
        '@context':   'https://schema.org',
        '@type':      'FAQPage',
        'mainEntity': area.clientNeeds.map(cn => ({
            '@type':          'Question',
            'name':           cn.scenario,
            'acceptedAnswer': { '@type': 'Answer', 'text': cn.answer },
        })),
    } : null

    return (
        <MainLayout>
            <Seo
                title={`${area.title} – Trill & Associates Advocates`}
                description={intro.length > 160 ? intro.slice(0, 157) + '...' : intro}
                image={area.heroImg ?? undefined}
                jsonLd={faqSchema ? [serviceSchema, faqSchema] : serviceSchema}
            />

            {/* ── HERO ── */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <img
                    src={area.heroImg || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80'}
                    alt={area.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,19,19,0.82)_0%,rgba(36,19,19,0.44)_46%,rgba(36,19,19,0.10)_76%),linear-gradient(to_top,rgba(104,48,48,0.88)_0%,rgba(104,48,48,0.36)_44%,transparent_78%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-sm mb-5">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <Link href="/practice-areas" className="text-gray-400 hover:text-gold-400 transition-colors">Practice Areas</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">{area.title}</span>
                        </div>
                        <div className="inline-flex items-center gap-3 mb-5">
                            <span className="h-px w-10 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium">Practice Area</span>
                        </div>
                        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            {area.title}
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
                            {area.tagline ?? 'Expert legal counsel tailored to your specific needs'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Main content — 2 cols */}
                        <div className="lg:col-span-2 space-y-14">

                            {/* Introduction */}
                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">Overview</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <p className="text-gray-600 leading-relaxed text-lg">{intro}</p>
                            </div>

                            {/* Services */}
                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">Scope of Services</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {area.services.map((service) => (
                                        <div key={service} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-sm px-4 py-3">
                                            <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Client Needs */}
                            <div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold mb-2">Common Client Scenarios</h2>
                                <span className="block w-12 h-0.5 bg-gold-500 mb-6" />
                                <div className="space-y-6">
                                    {area.clientNeeds.map((need) => (
                                        <div key={need.scenario} className="border-l-2 border-gold-400 pl-6 py-2">
                                            <h3 className="font-serif text-navy-950 text-lg font-semibold mb-2">{need.scenario}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{need.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Trill */}
                            <div className="bg-[#683030] rounded-sm p-8">
                                <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">Why Choose Trill</p>
                                <p className="text-white font-serif text-xl font-semibold leading-relaxed mb-0">
                                    {area.whyTrill ?? 'Our team brings deep expertise, commercial awareness, and a genuine commitment to delivering outcomes for our clients.'}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar — 1 col */}
                        <div className="space-y-6">

                            {/* CTA Card */}
                            <div className="bg-gold-500 rounded-sm p-7 text-center">
                                <svg className="w-10 h-10 text-navy-950 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">Book a Consultation</h3>
                                <p className="text-navy-800 text-sm mb-5 leading-relaxed">
                                    Speak directly with a specialist in {area.title.split(' ')[0]} law today.
                                </p>
                                <Link href="/book-consultation" className="block w-full text-center bg-[#683030] hover:bg-[#572929] text-white font-semibold px-5 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide">
                                    Schedule Now
                                </Link>
                            </div>

                            {/* Contact */}
                            <div className="bg-white border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Contact Us</h3>
                                <div className="space-y-3">
                                    <a href="tel:+255718694863" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors group">
                                        <div className="w-9 h-9 rounded-sm bg-[#683030] group-hover:bg-gold-500 flex items-center justify-center transition-colors flex-shrink-0">
                                            <svg className="w-4 h-4 text-gold-400 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">+255 7１８ ６９４ ８６３</span>
                                    </a>
                                    <a href="mailto:info@trill.co.tz" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors group">
                                        <div className="w-9 h-9 rounded-sm bg-[#683030] group-hover:bg-gold-500 flex items-center justify-center transition-colors flex-shrink-0">
                                            <svg className="w-4 h-4 text-gold-400 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">info@trill.co.tz</span>
                                    </a>
                                </div>
                            </div>

                            {/* Related areas */}
                            <div className="bg-gray-50 border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Related Practice Areas</h3>
                                <div className="space-y-2">
                                    {area.relatedAreas.map((related) => (
                                        <Link
                                            key={related.href}
                                            href={related.href}
                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1"
                                        >
                                            <span className="text-gold-500">›</span>
                                            {related.title}
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/practice-areas" className="mt-4 block text-xs text-gold-600 tracking-wider uppercase font-medium hover:text-gold-500 transition-colors">
                                    View All Practice Areas →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    )
}
