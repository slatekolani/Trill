import { useState, useEffect, useCallback } from 'react'
import { Link } from '@inertiajs/react'

const slides = [
    {
        image:       'https://i.pinimg.com/1200x/55/9b/0b/559b0b58e9860d4b982bed48748f696e.jpg',
        badge:       'Tanzania\'s Premier Law Firm',
        title:       'Excellence in Legal Representation',
        description: 'Trill & Associates Advocates has been delivering exceptional legal services from the 18th Floor of Rita Tower, Dar-es-Salaam — serving clients across Tanzania and around the globe.',
        cta:         { label: 'Free Consultation', href: '/contact' },
        accent:      'from-navy-950/85 via-navy-900/65 to-transparent',
    },
    {
        image:       'https://i.pinimg.com/736x/b5/c9/3f/b5c93f3f79fd3de51176200cece0914e.jpg',
        badge:       'Corporate & Commercial Law',
        title:       'Powering Businesses Across East Africa',
        description: 'From incorporation and governance to complex mergers and acquisitions — our corporate team provides the legal backbone your business needs to thrive in competitive markets.',
        cta:         { label: 'Learn More', href: '/about' },
        accent:      'from-navy-950/85 via-navy-900/65 to-transparent',
    },
    {
        image:       'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
        badge:       'Intellectual Property',
        title:       'Protecting Your Innovations & Creative Works',
        description: 'Our IP team safeguards trademarks, patents, copyrights, and trade secrets — ensuring your innovations are legally protected both locally and internationally.',
        cta:         { label: 'Protect Your IP', href: '/contact' },
        accent:      'from-navy-950/80 via-navy-900/55 to-transparent',
    },
    {
        image:       'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80',
        badge:       'Oil & Gas Law',
        title:       'Legal Expertise in Tanzania\'s Energy Sector',
        description: 'Specialist legal counsel for exploration agreements, production sharing contracts, regulatory compliance, and all aspects of Tanzania\'s growing oil and gas industry.',
        cta:         { label: 'Energy Sector Services', href: '/contact' },
        accent:      'from-navy-950/85 via-navy-950/60 to-transparent',
    },
    {
        image:       'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1920&q=80',
        badge:       'Justice & Human Rights',
        title:       'Championing Rights & Upholding Justice',
        description: 'We are committed to defending fundamental freedoms. Our advocates stand ready to represent individuals and organisations before the courts of Tanzania and beyond.',
        cta:         { label: 'Seek Justice', href: '/contact' },
        accent:      'from-navy-950/80 via-navy-900/55 to-transparent',
    },
    {
        image:       'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
        badge:       'Banking & Finance',
        title:       'Expert Advice for Financial Institutions',
        description: 'Comprehensive legal services covering banking regulations, loan agreements, financial instruments, debt restructuring, and regulatory compliance for Tanzania\'s financial sector.',
        cta:         { label: 'Financial Legal Services', href: '/contact' },
        accent:      'from-navy-950/80 via-navy-900/50 to-transparent',
    },
]

export default function HeroCarousel() {
    const [current,   setCurrent]   = useState(0)
    const [animating, setAnimating] = useState(false)
    const [paused,    setPaused]    = useState(false)

    const goTo = useCallback((index: number) => {
        if (animating) return
        setAnimating(true)
        setCurrent(index)
        setTimeout(() => setAnimating(false), 700)
    }, [animating])

    const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
    const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

    // Auto-advance
    useEffect(() => {
        if (paused) return
        const timer = setInterval(next, 6000)
        return () => clearInterval(timer)
    }, [next, paused])

    return (
        <section
            className="relative h-screen min-h-[600px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {/* Background image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
                        style={{ transform: i === current ? 'scale(1)' : 'scale(1.05)' }}
                        loading={i === 0 ? 'eager' : 'lazy'}
                    />

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
                    {/* Flat dark layer — ensures text is always readable across all images */}
                    <div className="absolute inset-0 bg-navy-950/45" />

                    {/* Vertical gold line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70 z-20" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div
                            key={`badge-${current}`}
                            className="inline-flex items-center gap-3 mb-6 animate-fade-in-up"
                            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                        >
                            <span className="h-px w-10 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.35em] uppercase font-medium font-sans">
                                {slides[current].badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            key={`title-${current}`}
                            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
                            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                        >
                            {slides[current].title}
                        </h1>

                        {/* Description */}
                        <p
                            key={`desc-${current}`}
                            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
                            style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
                        >
                            {slides[current].description}
                        </p>

                        {/* CTAs */}
                        <div
                            key={`cta-${current}`}
                            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <Link href={slides[current].cta.href} className="btn-primary text-sm px-8 py-4">
                                {slides[current].cta.label}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                            <Link href="/about" className="btn-outline text-sm px-8 py-4">
                                About Our Firm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Arrow navigation */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 border border-white/20 hover:border-gold-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 border border-white/20 hover:border-gold-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                            i === current
                                ? 'w-8 h-2 bg-gold-400'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-8 right-8 z-30 text-white/60 text-sm font-mono hidden md:block">
                <span className="text-gold-400 font-semibold">{String(current + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                {String(slides.length).padStart(2, '0')}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
                {!paused && (
                    <div
                        key={`progress-${current}`}
                        className="h-full bg-gold-400 origin-left"
                        style={{
                            animation: 'progressBar 6s linear forwards',
                        }}
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
