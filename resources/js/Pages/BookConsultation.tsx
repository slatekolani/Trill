import { useForm, usePage } from '@inertiajs/react'
import Seo from '@/Components/Seo'
import { FormEvent } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import PageHero from '@/Components/PageHero'
import { block } from '@/lib/content'

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

export default function BookConsultation() {
    const { flash, contentBlocks = {}, navPracticeAreas = [] } = usePage<{
        flash: { success?: string; error?: string }
        contentBlocks?: Record<string, string>
        navPracticeAreas?: { label: string; href: string }[]
    }>().props
    const displayedPracticeAreas = navPracticeAreas.length
        ? [...navPracticeAreas.map((area) => area.label), 'Not sure / General inquiry']
        : practiceAreas
    const { data, setData, post, processing, errors, reset } = useForm({
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
        post('/book-consultation', {
            preserveScroll: true,
            onSuccess: (page) => {
                if ((page.props.flash as { success?: string } | undefined)?.success) {
                    reset()
                }
            },
        })
    }

    return (
        <MainLayout>
            <Seo
                title="Book a Consultation – Trill & Associates Advocates"
                description="Schedule a legal consultation with Trill & Associates Advocates. Book time with our experienced attorneys in Dar-es-Salaam, Tanzania for expert advice on your legal matter."
            />

            <PageHero
                eyebrow={block(contentBlocks, 'consultation_hero_eyebrow', 'Get Started')}
                title={block(contentBlocks, 'consultation_hero_heading', 'Book a')}
                accent={block(contentBlocks, 'consultation_hero_subheading', 'Consultation')}
                description={block(contentBlocks, 'consultation_hero_text', 'Take the first step. Complete the form below and one of our specialist advocates will be in touch within 24 hours to schedule your consultation.')}
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
                imageAlt="Legal consultation"
                current="Book a Consultation"
            />

            {/* ── MAIN FORM SECTION ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Form — 2 cols */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-sm shadow-xl p-8 md:p-10">
                                <div className="mb-8">
                                    <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium mb-2">{block(contentBlocks, 'consultation_form_eyebrow', 'Consultation Request')}</p>
                                    <h2 className="font-serif text-navy-950 text-3xl font-bold">{block(contentBlocks, 'consultation_form_heading', 'Tell Us About Your Matter')}</h2>
                                    <span className="block w-12 h-0.5 bg-gold-500 mt-3 mb-1" />
                                    <p className="text-gray-500 text-sm mt-3">{block(contentBlocks, 'consultation_form_note', 'All information is treated with strict confidentiality. Fields marked * are required.')}</p>
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

                                {flash?.error && (
                                    <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-sm p-4">
                                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM10.29 3.86L1.82 18a2.25 2.25 0 001.93 3.38h16.5A2.25 2.25 0 0022.18 18L13.71 3.86a2 2 0 00-3.42 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-red-800 font-semibold text-sm">Request Not Sent</p>
                                            <p className="text-red-700 text-sm mt-0.5">{flash.error}</p>
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
                                                    {displayedPracticeAreas.map(a => <option key={a} value={a}>{a}</option>)}
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
                                        <strong className="text-gray-600">{block(contentBlocks, 'consultation_disclaimer_label', 'Confidentiality Notice:')}</strong> {block(contentBlocks, 'consultation_disclaimer_text', 'The information you provide is protected by legal privilege and will be used solely to prepare for your consultation. Submitting this form does not create an attorney-client relationship. A formal engagement will only commence upon execution of a retainer agreement.')}
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
                                                {block(contentBlocks, 'consultation_submit_label', 'Request Consultation')}
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                            {/* Direct contact */}
                            <div className="bg-white border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">{block(contentBlocks, 'consultation_direct_heading', 'Prefer to Call Directly?')}</h3>
                                <a
                                    href={`tel:${block(contentBlocks, 'site_phone', '+255 718 694 863').replace(/[^\d+]/g, '')}`}
                                    className="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white rounded-sm px-5 py-3.5 transition-colors mb-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-white/70 font-normal leading-none mb-0.5">{block(contentBlocks, 'consultation_call_label', 'Call Us')}</p>
                                        <p className="font-semibold text-sm">{block(contentBlocks, 'site_phone', '+255 718 694 863')}</p>
                                    </div>
                                </a>
                                <a
                                    href={`mailto:${block(contentBlocks, 'site_email', 'info@trill.co.tz')}`}
                                    className="flex items-center gap-3 border border-gray-200 text-gray-700 hover:border-gold-400 hover:text-gold-600 rounded-sm px-5 py-3.5 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-400 font-normal leading-none mb-0.5">{block(contentBlocks, 'consultation_email_label', 'Email Us')}</p>
                                        <p className="font-semibold text-sm">{block(contentBlocks, 'site_email', 'info@trill.co.tz')}</p>
                                    </div>
                                </a>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{block(contentBlocks, 'consultation_hours_label', 'Office Hours')}</p>
                                    {block(contentBlocks, 'site_hours', 'Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM').split('\n').map((line) => (
                                        <p key={line} className="text-xs text-gray-500">{line}</p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
