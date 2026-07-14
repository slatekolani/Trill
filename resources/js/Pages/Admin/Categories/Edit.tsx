import { Head, useForm, Link } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Props {
    category: { id: string; name: string; slug: string }
}

export default function CategoryEdit({ category }: Props) {
    const { data, setData, put, processing, errors } = useForm({ name: category.name })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        put(`/admin/categories/${category.id}`)
    }

    return (
        <AdminLayout title="Edit Category">
            <Head title="Edit Category — Admin" />
            <div className="max-w-md">
                <form onSubmit={submit} className="bg-white rounded-sm shadow-sm p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Category Name</label>
                        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" disabled={processing}
                            className="bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors">
                            {processing ? 'Saving…' : 'Update Category'}
                        </button>
                        <Link href="/admin/categories" className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
