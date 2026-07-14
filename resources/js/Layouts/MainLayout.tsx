import { ReactNode, useEffect, useRef } from 'react'
import { usePage } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

interface Props {
    children: ReactNode
}

export default function MainLayout({ children }: Props) {
    const mainRef = useRef<HTMLElement>(null)
    const { url } = usePage()

    useEffect(() => {
        const main = mainRef.current
        if (!main || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        document.documentElement.classList.add('reveal-ready')
        let frame = 0
        let fallbackTimer = 0

        const revealTargets = new Set<Element>()
        const selectors = [
            '.page-hero .page-hero-kicker',
            '.page-hero h1',
            '.page-hero p',
            '.page-hero .mt-9',
            'main > section:not(.page-hero) > div',
            'section:not(.page-hero) h2',
            'section:not(.page-hero) h3',
            'section:not(.page-hero) p',
            '.editorial-panel',
            '.image-ready-frame',
            '.practice-card',
            '.grid > a.group',
            '.grid > div.group',
            '.grid > div:not([data-reveal])',
            '.grid > a:not([data-reveal])',
            'article',
            'aside',
            'form',
            'form > div',
            'ul > li',
            'ol > li',
        ]

        const revealElement = (element: Element) => {
            element.setAttribute('data-reveal', 'in')
        }

        const observer = 'IntersectionObserver' in window
            ? new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            revealElement(entry.target)
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
            )
            : null

        frame = window.requestAnimationFrame(() => {
            selectors.forEach((selector) => {
                main.querySelectorAll(selector).forEach((element) => {
                    if (!element.closest('[data-no-reveal]')) {
                        revealTargets.add(element)
                    }
                })
            })

            revealTargets.forEach((element) => {
                element.removeAttribute('data-reveal')

                const siblings = Array.from(element.parentElement?.children ?? [])
                const siblingIndex = Math.max(0, siblings.indexOf(element))
                const stagger = Math.min(siblingIndex, 5) * 70

                ;(element as HTMLElement).style.setProperty('--reveal-delay', `${stagger}ms`)
                element.setAttribute('data-reveal', 'pending')

                if (!observer) {
                    revealElement(element)
                } else {
                    observer.observe(element)
                }
            })

            fallbackTimer = window.setTimeout(() => {
                revealTargets.forEach(revealElement)
            }, 6000)
        })

        return () => {
            window.cancelAnimationFrame(frame)
            window.clearTimeout(fallbackTimer)
            observer?.disconnect()
            revealTargets.forEach(revealElement)
        }
    }, [url])

    return (
        <div className="min-h-screen flex flex-col bg-gold-50">
            <Navbar />
            <main ref={mainRef} className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
