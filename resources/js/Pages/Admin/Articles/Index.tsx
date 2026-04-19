import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Article {
    id: number
    title: string
    slug: string
    category: string
    author: string
    is_featured: boolean
    is_published: boolean
    created_at: string
}

interface Props {
    articles: Article[]
}

export default function ArticlesIndex({ articles }: Props) {
    const handleDelete = (id: number, title: string) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
        router.delete(`/admin/articles/${id}`)
    }

    return (
        <AdminLayout title="Articles">
            <Head title="Articles — Admin" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{articles.length} article{articles.length !== 1 ? 's' : ''}</p>
                <Link
                    href="/admin/articles/create"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    New Article
                </Link>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                {articles.length === 0 ? (
                    <div className="py-16 text-center">
                        <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <p className="text-gray-400 text-sm mb-3">No articles yet</p>
                        <Link href="/admin/articles/create" className="text-gold-600 text-sm hover:underline">Create your first article →</Link>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Category</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Date</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                                <th className="px-5 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4">
                                        <div>
                                            <p className="font-medium text-navy-950 leading-snug">{article.title}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{article.author}</p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 hidden md:table-cell">
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{article.category}</span>
                                    </td>
                                    <td className="px-5 py-4 hidden lg:table-cell text-gray-400">{article.created_at}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.is_published ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                                {article.is_published ? 'Published' : 'Draft'}
                                            </span>
                                            {article.is_featured && (
                                                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gold-50 text-gold-700">Featured</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3 justify-end">
                                            <a href={`/insights/${article.slug}`} target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors" title="Preview">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <Link href={`/admin/articles/${article.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium">Edit</Link>
                                            <button onClick={() => handleDelete(article.id, article.title)} className="text-red-400 hover:text-red-600 transition-colors">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </AdminLayout>
    )
}
