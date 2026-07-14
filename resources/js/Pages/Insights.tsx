import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'
import PageHero from '@/Components/PageHero'

interface Article {
    id:          string
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
}

const fallbackImg = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'

export default function Insights({ articles }: Props) {
    const featured = articles.find(a => a.is_featured)
    const rest = articles.filter(a => !a.is_featured)

    return (
        <MainLayout>
            <Seo
                title="Legal Insights & Publications – Trill & Associates Advocates"
                description="Read legal insights, analysis, and publications from the advocates at Trill & Associates. Stay informed on Tanzania law, business regulations, and legal developments."
            />

            <PageHero
                eyebrow="Knowledge Hub"
                title="Legal Insights &"
                accent="Publications"
                description="Legal updates, regulatory alerts, and thought leadership from the advocates of Trill & Associates, keeping you informed on the law that affects your business."
                image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
                imageAlt="Legal library"
                current="Legal Insights"
            />

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
                            className="group editorial-panel grid gap-0 overflow-hidden transition-shadow duration-300 lg:grid-cols-2"
                        >
                            <div className="relative min-h-64 lg:min-h-0 overflow-hidden">
                                <img
                                    src={featured.hero_img ?? fallbackImg}
                                    alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#683030]/14 group-hover:bg-[#683030]/8 transition-colors duration-300" />
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
                                    className="group editorial-panel overflow-hidden transition-all duration-300 flex flex-col hover:border-gold-400"
                                >
                                    <div className="h-44 overflow-hidden relative">
                                        <img
                                            src={article.hero_img ?? fallbackImg}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-[#683030]/12 group-hover:bg-[#683030]/10 transition-colors duration-300" />
                                        <span className="absolute top-4 left-4 text-xs bg-[#683030]/80 backdrop-blur-sm text-gold-400 tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full">
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

        </MainLayout>
    )
}
