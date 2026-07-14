import { useForm, usePage } from '@inertiajs/react'
import Seo from '@/Components/Seo'
import { FormEvent } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import PageHero from '@/Components/PageHero'

const contactDetails = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: 'Office Address',
        lines: [
            'Makunganya / Simu Street',
            '18th Floor — Rita Tower',
            'P.O. Box 5823',
            'Dar-es-Salaam, Tanzania',
        ],
        href: undefined,
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        title: 'Phone',
        lines: ['+255 718 694 863'],
        href: 'tel:+255718694863',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        title: 'Email',
        lines: ['info@trill.co.tz'],
        href: 'mailto:info@trill.co.tz',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Office Hours',
        lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM', 'Sunday: Closed'],
        href: undefined,
    },
]

const practiceAreas = [
    'Corporate & Commercial Law',
    'Intellectual Property',
    'Land Laws',
    'Taxation',
    'Banking & Finance',
    'Oil & Gas',
    'Immigration',
    'Human Rights',
    'Entertainment Law',
    'Insurance Law',
    'Cyber-crime Law',
    'Receivership & Debt Collection',
    'Other',
]

export default function Contact() {
    const { flash, contentBlocks = {}, navPracticeAreas = [] } = usePage<{
        flash: { success?: string; error?: string }
        contentBlocks?: Record<string, string>
        navPracticeAreas?: { label: string; href: string }[]
    }>().props
    const phone = contentBlocks.site_phone ?? '+255 718 694 863'
    const email = contentBlocks.site_email ?? 'info@trill.co.tz'
    const displayedPracticeAreas = navPracticeAreas.length
        ? [...navPracticeAreas.map((area) => area.label), 'Other']
        : practiceAreas
    const displayedContactDetails = contactDetails.map((item) => {
        if (item.title === 'Office Address') {
            return { ...item, lines: (contentBlocks.site_address ?? item.lines.join('\n')).split('\n') }
        }
        if (item.title === 'Phone') {
            return { ...item, lines: [phone], href: `tel:${phone.replace(/[^\d+]/g, '')}` }
        }
        if (item.title === 'Email') {
            return { ...item, lines: [email], href: `mailto:${email}` }
        }
        if (item.title === 'Office Hours') {
            return { ...item, lines: (contentBlocks.site_hours ?? item.lines.join('\n')).split('\n') }
        }
        return item
    })
    const { data, setData, post, processing, errors } = useForm({
        name:     '',
        email:    '',
        phone:    '',
        area:     '',
        subject:  '',
        message:  '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        post('/contact')
    }

    return (
        <MainLayout>
            <Seo
                title="Contact Us – Trill & Associates Advocates"
                description="Contact Trill & Associates Advocates in Dar-es-Salaam, Tanzania. Reach our legal team for consultations, inquiries, and expert legal assistance across all practice areas."
            />

            <PageHero
                eyebrow="Reach Out"
                title="Contact"
                accent="Our Team"
                description={contentBlocks.contact_hero_text ?? 'Whether you need legal advice, wish to schedule a consultation, or have questions about our services, we are here to help. Reach out to us today.'}
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
                imageAlt="Professional consultation"
                current="Contact Us"
            />

            {/* ── CONTACT INFO CARDS ── */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayedContactDetails.map((item) => (
                            <div
                                key={item.title}
                                className="editorial-panel p-6 transition-all duration-300 group hover:border-gold-400"
                            >
                                <div className="w-12 h-12 rounded-sm bg-[#683030] text-white flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-3">{item.title}</h3>
                                <div className="space-y-1">
                                    {item.lines.map((line, i) =>
                                        item.href && i === 0 ? (
                                            <a
                                                key={i}
                                                href={item.href}
                                                className="block text-gray-600 text-sm hover:text-gold-600 transition-colors"
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            <p key={i} className="text-gray-600 text-sm">{line}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORM + MAP ── */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="block">

                        {/* Form — 3 cols */}
                        <div>
                            <div className="editorial-panel p-8 md:p-10">
                                <div className="mb-8">
                                    <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium mb-2">Get in Touch</p>
                                    <h2 className="font-serif text-navy-950 text-3xl font-bold">Send Us a Message</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mt-3" />
                                </div>

                                {flash?.success && (
                                    <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-sm p-4">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-green-800 font-semibold text-sm">Message Sent!</p>
                                            <p className="text-green-700 text-sm mt-0.5">{flash.success}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name + Email */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                placeholder="Your full name"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                placeholder="your@email.com"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone + Area */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                                placeholder="+255 ..."
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                                Practice Area
                                            </label>
                                            <select
                                                value={data.area}
                                                onChange={e => setData('area', e.target.value)}
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm bg-white"
                                            >
                                                <option value="">Select an area...</option>
                                                {displayedPracticeAreas.map(a => (
                                                    <option key={a} value={a}>{a}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={data.subject}
                                            onChange={e => setData('subject', e.target.value)}
                                            placeholder="Brief description of your matter"
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            placeholder="Please describe your legal matter in detail..."
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm resize-none"
                                        />
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        * By submitting this form, you agree that the information provided may be used to respond to your enquiry.
                                        This does not create an attorney-client relationship.
                                    </p>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full btn-primary justify-center py-4 text-sm"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
