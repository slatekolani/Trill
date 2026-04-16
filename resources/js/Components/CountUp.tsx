import { useState, useEffect, useRef } from 'react'

interface Props {
    target: number
    suffix?: string
    prefix?: string
    duration?: number
}

export default function CountUp({ target, suffix = '', prefix = '', duration = 2200 }: Props) {
    const [count,   setCount]   = useState(0)
    const [started, setStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    // Start counting when element scrolls into view
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
            { threshold: 0.5 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Animate the count with ease-out-cubic
    useEffect(() => {
        if (!started) return
        const steps = 80
        const interval = duration / steps
        let step = 0

        const timer = setInterval(() => {
            step++
            const progress = step / steps
            // ease-out-cubic: decelerates as it approaches the target
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(target * eased))
            if (step >= steps) { setCount(target); clearInterval(timer) }
        }, interval)

        return () => clearInterval(timer)
    }, [started, target, duration])

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    )
}
