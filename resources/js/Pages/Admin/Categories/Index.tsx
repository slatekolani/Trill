import { Head, Link, router, useForm } from '@inertiajs/react'
import { FormEventHandler, useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Category {
    id: number
    name: string
    slug: string
    articles_count: number
}

interface Props { categories: Category[] }

export default function CategoriesIndex({ categories }: Props) {
    const [creating, setCreating] = useState(false)
    const { data, setData, post, processing, errors, reset } = useForm({ name: '' })

    const handleCreate: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/categories', { onSuccess: () => { reset(); setCreating(false) } })
    }

    const handleDelete = (id: number, name: string, count: number) => {
        if (count > 0) { alert(`Cannot delete "${name}" — it has ${count} article(s). Reassign them first.`); return }
        if (!confirm(`Delete category "${name}"?`)) return
        router.delete(`/admin/categories/${id}`)
    }

    return (
        <AdminLayout title="Categories">
            <Head title="Categories — Admin" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{categories.length} categor{categories.length !== 1 ? 'ies' : 'y'}</p>
                <button
                    onClick={() => setCreating(!creating)}
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    New Category
                </button>
            </div>

            {/* Inline create form */}
            {creating && (
                <form onSubmit={handleCreate} className="bg-white rounded-sm shadow-sm p-5 mb-5 flex gap-3">
                    <div className="flex-1">
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Category name (e.g. Corporate Law)"
                            autoFocus
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <button type="submit" disabled={processing}
                        className="bg-navy-950 hover:bg-navy-900 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors">
                        {processing ? 'Creating…' : 'Create'}
                    </button>
                    <button type="button" onClick={() => setCreating(false)}
                        className="border border-gray-200 text-gray-500 text-sm px-4 py-2.5 rounded-sm hover:border-gray-300 transition-colors">
                        Cancel
                    </button>
                </form>
            )}

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                {categories.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-gray-400 text-sm">No categories yet. Add one above.</p>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Slug</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Articles</th>
                                <th className="px-5 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {categories.map((cat) => (
                                <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4 font-medium text-navy-950">{cat.name}</td>
                                    <td className="px-5 py-4 hidden md:table-cell">
                                        <code className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{cat.slug}</code>
                                    </td>
                                    <td className="px-5 py-4 text-gray-500">{cat.articles_count}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3 justify-end">
                                            <Link href={`/admin/categories/${cat.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium">Edit</Link>
                                            <button onClick={() => handleDelete(cat.id, cat.name, cat.articles_count)}
                                                className="text-red-400 hover:text-red-600 transition-colors">
                                                Delete
                                            </button>
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
