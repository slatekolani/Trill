import { Link } from '@inertiajs/react'

export interface PublicMembership {
    id: string
    name: string
    acronym: string | null
    description: string | null
    url: string | null
    logo_url: string | null
}

interface Props {
    memberships: PublicMembership[]
    variant?: 'light' | 'white'
    showCta?: boolean
    ctaHref?: string
    ctaLabel?: string
}

export default function MembershipsSection({
    memberships,
    variant = 'light',
    showCta = true,
    ctaHref = '/memberships',
    ctaLabel = 'View All Memberships',
}: Props) {
    if (memberships.length === 0) return null

    return (
        <section id="memberships" className={`py-20 ${variant === 'white' ? 'bg-white' : 'bg-gold-50'} border-y border-gold-100`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <p className="text-gold-700 text-sm tracking-[0.24em] uppercase font-medium mb-4">Professional Standing</p>
                        <h2 className="section-title">Memberships &amp; Affiliations</h2>
                        <span className="signature-rule mt-5 block" />
                    </div>
                    <p className="text-gray-500 max-w-3xl text-lg leading-8 lg:justify-self-end">
                        The firm and its advocates maintain professional connections with recognised legal bodies and institutions that support ethical practice, continuing professional development, and responsible advocacy.
                    </p>
                </div>

                <div className="grid gap-0 border-l border-t border-gold-200 sm:grid-cols-2 lg:grid-cols-3">
                    {memberships.map((membership) => {
                        const content = (
                            <div className="group relative min-h-[230px] border-b border-r border-gold-200 bg-white p-7 transition-colors duration-300 hover:bg-gold-50">
                                <div className="mb-6 flex h-16 w-20 items-center justify-center border border-gold-300 bg-white text-sm font-bold tracking-wider text-[#683030]">
                                    {membership.logo_url ? (
                                        <img src={membership.logo_url} alt={`${membership.name} logo`} className="h-full w-full object-contain p-2" />
                                    ) : (
                                        membership.acronym || membership.name.slice(0, 2).toUpperCase()
                                    )}
                                </div>
                                <h3 className="font-serif text-xl font-semibold leading-snug text-navy-950 group-hover:text-gold-700 transition-colors">
                                    {membership.name}
                                </h3>
                                {membership.description && (
                                    <p className="mt-4 text-sm leading-7 text-gray-500">{membership.description}</p>
                                )}
                                {membership.url && (
                                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gold-600">
                                        Visit Body
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5H21m0 0v7.5m0-7.5L10.5 15M6 6h3.75M6 18h12" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        )

                        return membership.url ? (
                            <a key={membership.id} href={membership.url} target="_blank" rel="noreferrer" className="block">
                                {content}
                            </a>
                        ) : (
                            <div key={membership.id}>{content}</div>
                        )
                    })}
                </div>

                {showCta && (
                    <div className="mt-10">
                        <Link href={ctaHref} className="btn-outline text-[#683030]">
                            {ctaLabel}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
