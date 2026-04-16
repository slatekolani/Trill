import { Head, Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import MainLayout from '@/Layouts/MainLayout'

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
        lines: ['+255 738 600 670'],
        href: 'tel:+255738600670',
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
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        name:     '',
        email:    '',
        phone:    '',
        area:     '',
        subject:  '',
        message:  '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // For a real implementation, you'd post to a controller.
        // For now, we just simulate success by resetting.
        reset()
        alert('Thank you for your message! Our team will be in touch within 24 hours.')
    }

    return (
        <MainLayout>
            <Head title="Contact Us" />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
                    alt="Professional consultation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/90 to-navy-900/70" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Reach Out</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Contact<br />
                            <span className="text-gold-400 italic">Our Team</span>
                        </h1>
                        <p className="text-gray-100 text-xl leading-relaxed max-w-2xl mb-10">
                            Whether you need legal advice, wish to schedule a consultation, or have questions about
                            our services — we are here to help. Reach out to us today.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-200">Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT INFO CARDS ── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactDetails.map((item) => (
                            <div
                                key={item.title}
                                className="bg-gray-50 border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-sm bg-navy-950 text-white flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
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
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Form — 3 cols */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-sm shadow-xl p-8 md:p-10">
                                <div className="mb-8">
                                    <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium mb-2">Get in Touch</p>
                                    <h2 className="font-serif text-navy-950 text-3xl font-bold">Send Us a Message</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mt-3" />
                                </div>

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
                                                {practiceAreas.map(a => (
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

                        {/* Sidebar — 2 cols */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Free consultation box */}
                            <div className="bg-navy-950 rounded-sm p-8 text-white">
                                <div className="w-12 h-12 rounded-sm bg-gold-500/20 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-3">Free Initial Consultation</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We offer a complimentary first consultation to understand your legal matter and determine
                                    how our team can best assist you.
                                </p>
                                <a
                                    href="tel:+255738600670"
                                    className="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white rounded-sm px-5 py-3 font-medium text-sm transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    Call +255 738 600 670
                                </a>
                            </div>

                            {/* Social links */}
                            <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-5">Follow Us</h3>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Facebook', url: 'https://facebook.com/trilladvocates', color: 'bg-blue-600' },
                                        { name: 'Twitter / X', url: 'https://twitter.com/trilladvocates', color: 'bg-gray-900' },
                                        { name: 'LinkedIn', url: 'https://linkedin.com/company/trilladvocates', color: 'bg-blue-700' },
                                    ].map(s => (
                                        <a
                                            key={s.name}
                                            href={s.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-4 ${s.color} text-white px-4 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm font-medium`}
                                        >
                                            {s.name}
                                            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Credentials badge */}
                            <div className="bg-gold-50 border border-gold-200 rounded-sm p-6 text-center">
                                <svg className="w-10 h-10 text-gold-600 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                                <p className="font-serif text-navy-950 font-semibold text-sm">
                                    Licensed Notaries Public
                                </p>
                                <p className="text-gold-700 text-xs mt-1">& Commissioners for Oath</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EMBEDDED MAP ── */}
            <section className="h-80 bg-navy-900 relative overflow-hidden">
                <iframe
                    title="Trill & Associates Advocates Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7!2d39.2785!3d-6.8195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0e7c0b5555%3A0x1!2sRita+Tower%2C+Dar+es+Salaam!5e0!3m2!1sen!2stz!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map overlay badge */}
                <div className="absolute bottom-4 left-4 bg-navy-950/90 backdrop-blur-sm text-white rounded-sm px-4 py-2 text-xs flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.091a8 8 0 10-16 0c0 3.394 1.556 6.088 3.5 8.09a19.079 19.079 0 002.689 2.284 16.975 16.975 0 001.14.74zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Rita Tower, 18th Floor — Dar-es-Salaam
                </div>
            </section>
        </MainLayout>
    )
}
