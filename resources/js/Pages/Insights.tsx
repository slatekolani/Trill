import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'

interface Article {
    id:          number
    slug:        string
    title:       string
    excerpt:     string
    category:    string
    hero_img:    string | null
    read_time:   string
    is_featured: boolean
    date:        string
}

interface Props {
    articles:   Article[]
    categories: string[]
}

const fallbackImg = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'

export default function Insights({ articles, categories }: Props) {
    const featured = articles.find(a => a.is_featured)
    const rest = articles.filter(a => !a.is_featured)

    return (
        <MainLayout>
            <Seo
                title="Legal Insights & Publications – Trill & Associates Advocates"
                description="Read legal insights, analysis, and publications from the advocates at Trill & Associates. Stay informed on Tanzania law, business regulations, and legal developments."
            />

            {/* ── PAGE HERO ── */}
            <section className="relative min-h-[55vh] flex items-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
                    alt="Legal library"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/97 via-navy-950/85 to-navy-900/60" />
                <div className="absolute inset-0 bg-navy-950/50" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-gold-400" />
                            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Knowledge Hub</span>
                        </div>
                        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Legal Insights &amp;<br />
                            <span className="text-gold-400 italic">Publications</span>
                        </h1>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10">
                            Legal updates, regulatory alerts, and thought leadership from the advocates of
                            Trill &amp; Associates — keeping you informed on the law that affects your business.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link>
                            <span className="text-gold-500">›</span>
                            <span className="text-gray-300">Legal Insights</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ARTICLE ── */}
            {featured && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium mb-6 flex items-center gap-2">
                            <span className="h-px w-8 bg-gold-500" />
                            Featured Article
                        </p>
                        <Link
                            href={`/insights/${featured.slug}`}
                            className="group grid lg:grid-cols-2 gap-0 bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative min-h-64 lg:min-h-0 overflow-hidden">
                                <img
                                    src={featured.hero_img ?? fallbackImg}
                                    alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/15 transition-colors duration-300" />
                            </div>
                            <div className="p-10 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-gold-600 text-xs tracking-[0.25em] uppercase font-medium border border-gold-400 px-3 py-1 rounded-full">
                                        {featured.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">{featured.date}</span>
                                    <span className="text-gray-400 text-xs">· {featured.read_time}</span>
                                </div>
                                <h2 className="font-serif text-navy-950 text-3xl font-bold leading-snug mb-5 group-hover:text-gold-700 transition-colors duration-300">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-500 leading-relaxed mb-8">{featured.excerpt}</p>
                                <span className="text-gold-600 text-sm font-medium tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                    Read Full Article
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* ── CATEGORY FILTER ── */}
            {categories.length > 0 && (
                <section className="py-8 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full bg-navy-950 text-white">
                                All
                            </span>
                            {categories.map((cat) => (
                                <span key={cat} className="text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gold-100 hover:text-gold-700 cursor-pointer transition-colors">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── ARTICLES GRID ── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {rest.length === 0 && !featured ? (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No articles published yet.</p>
                            <p className="text-gray-400 text-sm mt-2">Check back soon for legal insights and updates.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rest.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/insights/${article.slug}`}
                                    className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    <div className="h-44 overflow-hidden relative">
                                        <img
                                            src={article.hero_img ?? fallbackImg}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-navy-950/25 group-hover:bg-navy-950/10 transition-colors duration-300" />
                                        <span className="absolute top-4 left-4 text-xs bg-navy-950/80 backdrop-blur-sm text-gold-400 tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-gray-400 text-xs mb-4">
                                            <span>{article.date}</span>
                                            <span>·</span>
                                            <span>{article.read_time}</span>
                                        </div>
                                        <h3 className="font-serif text-navy-950 text-lg font-semibold leading-snug mb-3 group-hover:text-gold-700 transition-colors duration-300 flex-1">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <span className="text-gold-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 mt-auto">
                                            Read Article
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── NEWSLETTER SIGNUP ── */}
            <section className="py-16 bg-navy-950">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium mb-4">Stay Informed</p>
                    <h2 className="font-serif text-white text-3xl font-bold mb-4">Get Legal Updates Delivered</h2>
                    <p className="text-gray-400 text-base mb-8">
                        Receive our latest legal alerts, regulatory updates, and thought leadership directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Your email address"
                            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" />
                        <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-sm transition-colors text-sm uppercase tracking-wide flex-shrink-0">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe at any time.</p>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-500 text-base mb-2">Have a legal question after reading our insights?</p>
                    <h2 className="font-serif text-navy-950 text-3xl font-bold mb-6">Speak with One of Our Advocates</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="btn-primary">Book a Consultation</Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold px-8 py-3 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
