import { Head, Link } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Stats {
    articles: number
    published: number
    drafts: number
    team_members: number
    categories: number
}

interface RecentArticle {
    id: number
    title: string
    slug: string
    category: string
    is_published: boolean
    created_at: string
}

interface Props {
    stats: Stats
    recentArticles: RecentArticle[]
}

const statCards = (stats: Stats) => [
    {
        label: 'Total Articles',
        value: stats.articles,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
        color: 'bg-blue-50 text-blue-600',
        href: '/admin/articles',
    },
    {
        label: 'Published',
        value: stats.published,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'bg-green-50 text-green-600',
        href: '/admin/articles',
    },
    {
        label: 'Drafts',
        value: stats.drafts,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        color: 'bg-yellow-50 text-yellow-600',
        href: '/admin/articles',
    },
    {
        label: 'Team Members',
        value: stats.team_members,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: 'bg-purple-50 text-purple-600',
        href: '/admin/team',
    },
]

export default function Dashboard({ stats, recentArticles }: Props) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Dashboard — Admin" />

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statCards(stats).map((card) => (
                    <Link key={card.label} href={card.href} className="bg-white rounded-sm shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className={`w-10 h-10 rounded-full ${card.color} flex items-center justify-center mb-3`}>
                            {card.icon}
                        </div>
                        <p className="text-2xl font-serif font-bold text-navy-950">{card.value}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{card.label}</p>
                    </Link>
                ))}
            </div>

            {/* Quick actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-sm shadow-sm p-6">
                    <h2 className="font-serif text-navy-950 font-semibold text-base mb-4">Quick Actions</h2>
                    <div className="space-y-2">
                        <Link href="/admin/articles/create" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1.5">
                            <span className="w-7 h-7 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 text-lg font-bold">+</span>
                            New Article
                        </Link>
                        <Link href="/admin/team/create" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1.5">
                            <span className="w-7 h-7 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 text-lg font-bold">+</span>
                            Add Team Member
                        </Link>
                        <Link href="/admin/categories/create" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1.5">
                            <span className="w-7 h-7 bg-gold-50 rounded-full flex items-center justify-center text-gold-600 text-lg font-bold">+</span>
                            New Category
                        </Link>
                        <Link href="/" target="_blank" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors py-1.5">
                            <span className="w-7 h-7 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                            View Live Website
                        </Link>
                    </div>
                </div>

                <div className="bg-navy-950 rounded-sm shadow-sm p-6">
                    <h2 className="font-serif text-white font-semibold text-base mb-1">Content Summary</h2>
                    <p className="text-gray-400 text-xs mb-4">Trill &amp; Associates Admin Portal</p>
                    <div className="space-y-3">
                        {[
                            { label: 'Articles', value: stats.articles },
                            { label: 'Published', value: stats.published },
                            { label: 'Categories', value: stats.categories },
                            { label: 'Team Members', value: stats.team_members },
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">{item.label}</span>
                                <span className="text-gold-400 font-semibold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent articles */}
            <div className="bg-white rounded-sm shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-serif text-navy-950 font-semibold text-base">Recent Articles</h2>
                    <Link href="/admin/articles" className="text-gold-600 text-sm hover:text-gold-500">View all →</Link>
                </div>
                <div className="divide-y divide-gray-50">
                    {recentArticles.length === 0 ? (
                        <p className="px-6 py-8 text-gray-400 text-sm text-center">No articles yet. <Link href="/admin/articles/create" className="text-gold-600 hover:underline">Create one →</Link></p>
                    ) : recentArticles.map((article) => (
                        <div key={article.id} className="px-6 py-4 flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-navy-950 truncate">{article.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{article.category} · {article.created_at}</p>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.is_published ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                    {article.is_published ? 'Published' : 'Draft'}
                                </span>
                                <Link href={`/admin/articles/${article.id}/edit`} className="text-xs text-gold-600 hover:text-gold-500">Edit</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    )
}
