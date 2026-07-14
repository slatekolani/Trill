import { useCallback, useEffect, useState } from 'react'
import { Link } from '@inertiajs/react'

interface HeroSlide {
    image: string | null
    badge: string | null
    title: string
    description: string | null
    cta: { label: string; href: string }
    accent?: string
}

const fallbackSlides: HeroSlide[] = [
    {
        image:       'https://i.pinimg.com/1200x/55/9b/0b/559b0b58e9860d4b982bed48748f696e.jpg',
        badge:       'Dar-es-Salaam Counsel',
        title:       'Serious Legal Work, Clear Commercial Judgment',
        description: 'Trill & Associates Advocates advises businesses, investors, institutions, and private clients from Rita Tower in Dar-es-Salaam across Tanzania and beyond.',
        cta:         { label: 'Book Consultation', href: '/book-consultation' },
    },
    {
        image:       'https://i.pinimg.com/736x/b5/c9/3f/b5c93f3f79fd3de51176200cece0914e.jpg',
        badge:       'Corporate & Commercial Law',
        title:       'Commercial Law with Boardroom Clarity',
        description: 'From incorporation and governance to complex mergers and acquisitions, our corporate team provides the legal backbone your business needs to thrive in competitive markets.',
        cta:         { label: 'Explore Services', href: '/practice-areas' },
    },
    {
        image:       'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
        badge:       'Intellectual Property',
        title:       'Protecting Ideas, Brands, and Creative Work',
        description: 'Our IP team safeguards trademarks, patents, copyrights, and trade secrets, ensuring your innovations are legally protected both locally and internationally.',
        cta:         { label: 'Protect Your IP', href: '/contact' },
    },
    {
        image:       'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80',
        badge:       'Oil & Gas Law',
        title:       'Legal Expertise in Tanzania\'s Energy Sector',
        description: 'Specialist legal counsel for exploration agreements, production sharing contracts, regulatory compliance, and all aspects of Tanzania\'s growing oil and gas industry.',
        cta:         { label: 'Energy Sector Services', href: '/contact' },
    },
    {
        image:       'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1920&q=80',
        badge:       'Justice & Human Rights',
        title:       'Championing Rights and Upholding Justice',
        description: 'We are committed to defending fundamental freedoms. Our advocates stand ready to represent individuals and organisations before the courts of Tanzania and beyond.',
        cta:         { label: 'Seek Justice', href: '/contact' },
    },
    {
        image:       'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
        badge:       'Banking & Finance',
        title:       'Expert Advice for Financial Institutions',
        description: 'Comprehensive legal services covering banking regulations, loan agreements, financial instruments, debt restructuring, and regulatory compliance for Tanzania\'s financial sector.',
        cta:         { label: 'Financial Legal Services', href: '/contact' },
    },
]

export default function HeroCarousel({ slides = [] }: { slides?: HeroSlide[] }) {
    const activeSlides = slides.length > 0 ? slides : fallbackSlides
    const [current,   setCurrent]   = useState(0)
    const [animating, setAnimating] = useState(false)
    const [paused,    setPaused]    = useState(false)

    const goTo = useCallback((index: number) => {
        if (animating) return
        setAnimating(true)
        setCurrent(index)
        setTimeout(() => setAnimating(false), 700)
    }, [animating])

    const next = useCallback(() => goTo((current + 1) % activeSlides.length), [current, goTo, activeSlides.length])
    const prev = useCallback(() => goTo((current - 1 + activeSlides.length) % activeSlides.length), [current, goTo, activeSlides.length])

    useEffect(() => {
        if (paused) return
        const timer = setInterval(next, 6500)
        return () => clearInterval(timer)
    }, [next, paused])

    return (
        <section
            className="relative min-h-[720px] overflow-hidden bg-[#683030] pt-24 lg:min-h-screen lg:pt-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {activeSlides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <img
                        src={slide.image || fallbackSlides[0].image || ''}
                        alt={slide.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[9000ms] ease-out"
                        style={{ transform: i === current ? 'scale(1)' : 'scale(1.04)' }}
                        loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-[#241313]/55 sm:bg-[#241313]/45 lg:bg-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(68,28,28,0.94)_0%,rgba(104,48,48,0.70)_36%,rgba(104,48,48,0.30)_62%,rgba(28,23,20,0.10)_82%,transparent_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,23,20,0.62)_0%,rgba(28,23,20,0.34)_34%,rgba(28,23,20,0.10)_62%,transparent_84%)]" />
                </div>
            ))}

            <div className="relative z-20 flex min-h-[720px] items-center lg:min-h-screen">
                <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
                    <div className="max-w-3xl lg:pl-8">
                        <div
                            key={`badge-${current}`}
                            className="mb-5 inline-flex items-center gap-3 animate-fade-in-up md:mb-7"
                            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                        >
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-300 text-[0.68rem] font-semibold uppercase tracking-[0.28em] sm:text-xs">
                                {activeSlides[current].badge}
                            </span>
                        </div>

                        <h1
                            key={`title-${current}`}
                            className="max-w-3xl font-serif text-[2.65rem] font-semibold leading-[1.03] text-white animate-fade-in-up sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
                            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                        >
                            {activeSlides[current].title}
                        </h1>

                        <div className="mt-6 h-px w-28 bg-gold-500 md:mt-7" />

                        <p
                            key={`desc-${current}`}
                            className="mt-5 max-w-2xl text-base leading-8 text-white/90 animate-fade-in-up md:mt-6 md:text-lg"
                            style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
                        >
                            {activeSlides[current].description}
                        </p>

                        <div
                            key={`cta-${current}`}
                            className="mt-6 flex flex-col gap-3 animate-fade-in-up sm:flex-row md:mt-8"
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <Link href={activeSlides[current].cta.href} className="btn-primary text-sm px-8 py-4">
                                {activeSlides[current].cta.label}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                            <Link href="/practice-areas" className="inline-flex items-center justify-center gap-2 border border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#572929]">
                                View Expertise
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute right-20 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold-300 bg-gold-50/85 text-[#683030] backdrop-blur-md transition-all duration-300 hover:bg-white lg:flex"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-8 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold-300 bg-gold-50/85 text-[#683030] backdrop-blur-md transition-all duration-300 hover:bg-white lg:flex"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <div className="absolute bottom-12 right-8 z-30 hidden items-center gap-3 lg:flex">
                {activeSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            i === current
                                ? 'w-8 h-2 bg-gold-300'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>

            <div className="absolute bottom-8 left-4 z-30 text-sm font-mono text-white/70 sm:left-6 lg:left-auto lg:right-8 lg:bottom-24">
                <span className="font-semibold text-gold-300">{String(current + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                {String(activeSlides.length).padStart(2, '0')}
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/20">
                {!paused && (
                    <div
                        key={`progress-${current}`}
                        className="h-full bg-gold-400 origin-left"
                        style={{ animation: 'progressBar 6.5s linear forwards' }}
                    />
                )}
            </div>

            <style>{`
                @keyframes progressBar {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }
            `}</style>
        </section>
    )
}
