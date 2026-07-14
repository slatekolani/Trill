import { Link } from '@inertiajs/react'

interface PageHeroProps {
    eyebrow: string
    title: string
    accent?: string
    description: string
    image: string
    imageAlt: string
    current: string
}

export default function PageHero({
    eyebrow,
    title,
    accent,
    description,
    image,
    imageAlt,
    current,
}: PageHeroProps) {
    return (
        <section className="page-hero">
            <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,19,19,0.82)_0%,rgba(36,19,19,0.44)_46%,rgba(36,19,19,0.10)_76%),linear-gradient(to_top,rgba(104,48,48,0.88)_0%,rgba(104,48,48,0.36)_44%,transparent_78%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-20">
                <div className="max-w-4xl lg:pl-8">
                    <div className="page-hero-kicker">
                        <span className="h-px w-12 bg-gold-300" />
                        <span>{eyebrow}</span>
                    </div>
                    <h1 className="page-hero-title">
                        {title}
                        {accent && <span className="text-gold-300"> {accent}</span>}
                    </h1>
                    <p className="page-hero-copy">{description}</p>
                    <div className="mt-9 flex items-center gap-2 text-sm text-white/70">
                        <Link href="/" className="hover:text-gold-300 transition-colors">Home</Link>
                        <span className="text-gold-400">/</span>
                        <span className="text-white/90">{current}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
