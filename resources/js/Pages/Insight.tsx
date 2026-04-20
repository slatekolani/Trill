import { Link, usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

interface RelatedArticle {
    title:    string
    slug:     string
    category: string
}

interface Article {
    id:          number
    slug:        string
    title:       string
    category:    string
    date:        string
    read_time:   string
    author:      string
    author_role: string | null
    hero_img:    string | null
    content:     string[]
    related:     RelatedArticle[]
}

interface Props {
    article: Article
}

const fallbackImg = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80'

export default function Insight({ article }: Props) {
    const { appUrl, currentUrl } = usePage<{ appUrl: string; currentUrl: string }>().props

    const firstParagraph = article.content[0] ?? ''
    const desc = firstParagraph.length > 160
        ? firstParagraph.slice(0, 157) + '...'
        : firstParagraph || article.title

    const articleSchema = {
        '@context':         'https://schema.org',
        '@type':            'Article',
        'headline':         article.title,
        'description':      desc,
        'url':              currentUrl,
        'datePublished':    article.date,
        'author': {
            '@type': 'Person',
            'name':  article.author,
        },
        'publisher': {
            '@type': 'Organization',
            '@id':   `${appUrl}/#organization`,
            'name':  'Trill & Associates Advocates',
            'logo':  { '@type': 'ImageObject', 'url': `${appUrl}/Logo/trill_logo.png` },
        },
        'image':            article.hero_img ?? fallbackImg,
        'articleSection':   article.category,
    }

    return (
        <MainLayout>
            <Seo
                title={`${article.title} – Trill & Associates Advocates`}
                description={desc}
                type="article"
                image={article.hero_img ?? fallbackImg}
                jsonLd={articleSchema}
            />

            {/* ── HERO ── */}
            <section className="relative min-h-[55vh] flex items-end overflow-hidden">
                <img src={article.hero_img ?? fallbackImg} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
                <div className="absolute inset-0 bg-navy-950/45" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm mb-5">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <Link href="/insights" className="text-gray-400 hover:text-gold-400 transition-colors">Legal Insights</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300 truncate max-w-32">{article.category}</span>
                        </div>
                        <span className="inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium border border-gold-500/40 px-3 py-1 rounded-full mb-4">
                            {article.category}
                        </span>
                        <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                            <span>{article.date}</span>
                            <span>·</span>
                            <span>{article.read_time}</span>
                            <span>·</span>
                            <span>By {article.author}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Article body */}
                        <article className="lg:col-span-2 prose prose-lg max-w-none">
                            <div className="space-y-6">
                                {article.content.map((para, i) => (
                                    <p key={i} className="text-gray-600 leading-relaxed text-base">{para}</p>
                                ))}
                            </div>

                            {/* Legal disclaimer */}
                            <div className="mt-12 p-6 bg-gray-50 border-l-4 border-gold-400 rounded-sm">
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <strong className="text-gray-700">Disclaimer:</strong> This publication is provided for general information purposes only and does not constitute legal advice. The content reflects the law as at the date of publication and may not take into account subsequent developments. For specific legal advice on your matter, please contact Trill &amp; Associates Advocates.
                                </p>
                            </div>

                            {/* Author */}
                            <div className="mt-10 p-6 bg-navy-950 rounded-sm flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                                    <span className="font-serif text-white text-xl font-bold">T</span>
                                </div>
                                <div>
                                    <p className="text-white font-serif font-semibold">{article.author}</p>
                                    {article.author_role && (
                                        <p className="text-gold-400 text-xs tracking-wider uppercase mt-0.5">{article.author_role}</p>
                                    )}
                                    <p className="text-gray-400 text-sm mt-1">Trill &amp; Associates Advocates</p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-gold-500 rounded-sm p-7 text-center">
                                <h3 className="font-serif text-navy-950 text-xl font-bold mb-2">Get Legal Advice</h3>
                                <p className="text-navy-800 text-sm mb-5 leading-relaxed">
                                    Have a question about this area of law? Speak with one of our specialist advocates.
                                </p>
                                <Link href="/book-consultation" className="block w-full text-center bg-navy-950 hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide">
                                    Book a Consultation
                                </Link>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-sm p-7">
                                <h3 className="font-serif text-navy-950 text-lg font-semibold mb-4">Contact Our Team</h3>
                                <a href="tel:+255718694863" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors mb-3">
                                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                    <span className="text-sm">+255 7１８ ６９４ ８６３</span>
                                </a>
                                <a href="mailto:info@trill.co.tz" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    <span className="text-sm">info@trill.co.tz</span>
                                </a>
                            </div>

                            <Link href="/insights" className="block text-center text-sm text-gold-600 hover:text-gold-500 transition-colors font-medium">
                                ← Back to All Insights
                            </Link>
                        </div>
                    </div>

                    {/* Related articles */}
                    {article.related.length > 0 && (
                        <div className="mt-16 pt-12 border-t border-gray-100">
                            <h2 className="font-serif text-navy-950 text-2xl font-bold mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {article.related.map((rel) => (
                                    <Link key={rel.slug} href={`/insights/${rel.slug}`} className="group bg-gray-50 border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-medium mb-2 block">{rel.category}</span>
                                        <h3 className="font-serif text-navy-950 text-lg font-semibold leading-snug group-hover:text-gold-700 transition-colors">
                                            {rel.title}
                                        </h3>
                                        <span className="text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 mt-4">
                                            Read Article
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    )
}
