import { Link, useForm, usePage } from '@inertiajs/react'
import Seo from '@/Components/Seo'
import { FormEvent } from 'react'
import MainLayout from '@/Layouts/MainLayout'

const practiceAreas = [
    'Corporate & Commercial Law',
    'Dispute Resolution',
    'Alternative Dispute Resolution',
    'Employment & Labour Law',
    'Intellectual Property',
    'Real Estate & Conveyancing',
    'Regulatory Compliance',
    'Debt Recovery & Enforcement',
    'Investment & Business Advisory',
    'Banking & Finance',
    'Taxation',
    'Immigration',
    'Oil & Gas',
    'Entertainment Law',
    'Insurance Law',
    'Cyber-crime Law',
    'Human Rights',
    'Not sure / General inquiry',
]

const benefits = [
    {
        title: 'Right Specialist',
        desc:  'You will be matched with the advocate whose expertise is most relevant to your specific legal matter.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        title: 'Confidential',
        desc:  'Everything you share with us is protected by attorney-client privilege. Your matter is treated with complete discretion.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        title: 'Rapid Response',
        desc:  'We respond to all consultation requests within 24 hours during business days. Urgent matters are prioritised.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'No Obligation',
        desc:  'Your initial consultation is about understanding your matter. There is no obligation to engage us further.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
]

const steps = [
    { number: '01', title: 'Submit Your Request', desc: 'Complete the form with details about your legal matter and preferred contact method.' },
    { number: '02', title: 'We Review & Match', desc: 'Our team reviews your request and identifies the most suitable advocate within 24 hours.' },
    { number: '03', title: 'Consultation Scheduled', desc: 'We contact you to schedule a consultation at a time that suits you — in person, by phone, or via video call.' },
    { number: '04', title: 'Your Consultation', desc: 'Meet with your specialist advocate to discuss your matter and determine the best legal strategy.' },
]

export default function BookConsultation() {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>().props
    const { data, setData, post, processing, errors } = useForm({
        name:           '',
        email:          '',
        phone:          '',
        organisation:   '',
        area:           '',
        preferred_date: '',
        preferred_time: '',
        method:         'in-person',
        matter:         '',
        how_heard:      '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        post('/book-consultation')
    }

    return (
        <MainLayout>
            <Seo
                title="Book a Consultation – Trill & Associates Advocates"
                description="Schedule a legal consultation with Trill & Associates Advocates. Book time with our experienced attorneys in Dar-es-Salaam, Tanzania for expert advice on your legal matter."
            />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[55vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
                    alt="Legal consultation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/88 to-navy-900/65" />
                <div className="absolute inset-0 bg-navy-950/50" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Get Started</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Book a<br />
                            <span className="text-gold-400 italic">Consultation</span>
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
                            Take the first step. Complete the form below and one of our specialist advocates
                            will be in touch within 24 hours to schedule your consultation.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">Book a Consultation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BENEFITS STRIP ── */}
            <section className="py-14 bg-gold-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {benefits.map((b) => (
                            <div key={b.title} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-navy-950/20 flex items-center justify-center text-navy-950 mx-auto mb-3">
                                    {b.icon}
                                </div>
                                <h3 className="font-serif text-navy-950 font-bold text-base mb-1">{b.title}</h3>
                                <p className="text-navy-800 text-xs leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MAIN FORM SECTION ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Form — 2 cols */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-sm shadow-xl p-8 md:p-10">
                                <div className="mb-8">
                                    <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium mb-2">Consultation Request</p>
                                    <h2 className="font-serif text-navy-950 text-3xl font-bold">Tell Us About Your Matter</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mt-3 mb-1" />
                                    <p className="text-gray-500 text-sm mt-3">All information is treated with strict confidentiality. Fields marked * are required.</p>
                                </div>

                                {flash?.success && (
                                    <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-sm p-4">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-green-800 font-semibold text-sm">Request Submitted!</p>
                                            <p className="text-green-700 text-sm mt-0.5">{flash.success}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Personal details */}
                                    <div>
                                        <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4 pb-2 border-b border-gray-100">Your Details</h3>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Full Name *</label>
                                                <input
                                                    type="text" required
                                                    value={data.name}
                                                    onChange={e => setData('name', e.target.value)}
                                                    placeholder="Your full name"
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Email Address *</label>
                                                <input
                                                    type="email" required
                                                    value={data.email}
                                                    onChange={e => setData('email', e.target.value)}
                                                    placeholder="your@email.com"
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Phone Number *</label>
                                                <input
                                                    type="tel" required
                                                    value={data.phone}
                                                    onChange={e => setData('phone', e.target.value)}
                                                    placeholder="+255 ..."
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Company / Organisation</label>
                                                <input
                                                    type="text"
                                                    value={data.organisation}
                                                    onChange={e => setData('organisation', e.target.value)}
                                                    placeholder="If applicable"
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Consultation details */}
                                    <div>
                                        <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4 pb-2 border-b border-gray-100">Consultation Details</h3>
                                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Practice Area *</label>
                                                <select
                                                    required
                                                    value={data.area}
                                                    onChange={e => setData('area', e.target.value)}
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm bg-white"
                                                >
                                                    <option value="">Select a practice area...</option>
                                                    {practiceAreas.map(a => <option key={a} value={a}>{a}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Preferred Consultation Method</label>
                                                <select
                                                    value={data.method}
                                                    onChange={e => setData('method', e.target.value)}
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm bg-white"
                                                >
                                                    <option value="in-person">In Person (Dar-es-Salaam)</option>
                                                    <option value="phone">Phone Call</option>
                                                    <option value="video">Video Call (Zoom / Teams)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Preferred Date</label>
                                                <input
                                                    type="date"
                                                    value={data.preferred_date}
                                                    onChange={e => setData('preferred_date', e.target.value)}
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Preferred Time</label>
                                                <select
                                                    value={data.preferred_time}
                                                    onChange={e => setData('preferred_time', e.target.value)}
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm bg-white"
                                                >
                                                    <option value="">Any time</option>
                                                    <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                                                    <option value="afternoon">Afternoon (12:00 PM – 5:00 PM)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">Brief Description of Your Matter *</label>
                                            <textarea
                                                required rows={5}
                                                value={data.matter}
                                                onChange={e => setData('matter', e.target.value)}
                                                placeholder="Please briefly describe your legal matter. The more detail you provide, the better we can prepare for your consultation..."
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm resize-none"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="block text-xs font-medium text-gray-700 tracking-wider uppercase mb-2">How Did You Hear About Us?</label>
                                            <select
                                                value={data.how_heard}
                                                onChange={e => setData('how_heard', e.target.value)}
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-sm bg-white"
                                            >
                                                <option value="">Please select...</option>
                                                <option value="referral">Referral from a colleague or friend</option>
                                                <option value="search">Internet search</option>
                                                <option value="linkedin">LinkedIn</option>
                                                <option value="social">Social media</option>
                                                <option value="event">Event or conference</option>
                                                <option value="previous">Previous client</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 border border-gray-100 rounded-sm p-4">
                                        <strong className="text-gray-600">Confidentiality Notice:</strong> The information you provide is protected by legal privilege and will be used solely to prepare for your consultation. Submitting this form does not create an attorney-client relationship. A formal engagement will only commence upon execution of a retainer agreement.
                                    </p>

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
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                </svg>
                                                Request Consultation
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                            {/* Process steps */}
                            <div className="bg-navy-950 rounded-sm p-8">
                                <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-5">How It Works</p>
                                <div className="space-y-6">
                                    {steps.map((step) => (
                                        <div key={step.number} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                                                <span className="text-gold-400 text-xs font-bold">{step.number}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-serif font-semibold text-sm mb-1">{step.title}</h4>
                                                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Direct contact */}
                            <div className="bg-white border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Prefer to Call Directly?</h3>
                                <a
                                    href="tel:+255718694863"
                                    className="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white rounded-sm px-5 py-3.5 transition-colors mb-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-white/70 font-normal leading-none mb-0.5">Call Us</p>
                                        <p className="font-semibold text-sm">+255 718 694 863</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:info@trill.co.tz"
                                    className="flex items-center gap-3 border border-gray-200 text-gray-700 hover:border-gold-400 hover:text-gold-600 rounded-sm px-5 py-3.5 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-400 font-normal leading-none mb-0.5">Email Us</p>
                                        <p className="font-semibold text-sm">info@trill.co.tz</p>
                                    </div>
                                </a>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Office Hours</p>
                                    <p className="text-xs text-gray-500">Mon – Fri: 8:00 AM – 5:00 PM</p>
                                    <p className="text-xs text-gray-500">Saturday: 9:00 AM – 1:00 PM</p>
                                </div>
                            </div>

                            {/* Credentials */}
                            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6 text-center">
                                <svg className="w-10 h-10 text-gold-600 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                                <p className="font-serif text-navy-950 font-semibold text-sm">Licensed Notaries Public</p>
                                <p className="text-gold-700 text-xs mt-1">& Commissioners for Oath</p>
                                <p className="text-gray-400 text-xs mt-2">Members of the Tanganyika Law Society</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
