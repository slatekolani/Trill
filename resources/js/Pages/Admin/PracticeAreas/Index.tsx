import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { confirmDelete } from '@/lib/confirm'

interface Area {
    id: string; title: string; slug: string; image_url: string | null
    sort_order: number; show_in_nav: boolean; is_active: boolean
}

export default function PracticeAreasIndex({ areas }: { areas: Area[] }) {
    const remove = async (area: Area) => {
        const confirmed = await confirmDelete({
            title: `Remove "${area.title}"?`,
            confirmButtonText: 'Yes, remove area',
        })
        if (confirmed) router.delete(`/admin/practice-areas/${area.id}`)
    }

    return (
        <AdminLayout title="Practice Areas">
            <Head title="Practice Areas - Admin" />
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{areas.length} practice area{areas.length !== 1 ? 's' : ''}</p>
                <Link href="/admin/practice-areas/create" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors">Add Practice Area</Link>
            </div>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead><tr className="border-b border-gray-100 bg-gray-50"><th className="text-left px-5 py-3">Area</th><th className="text-left px-5 py-3">Order</th><th className="text-left px-5 py-3">Nav</th><th className="text-left px-5 py-3">Status</th><th className="px-5 py-3" /></tr></thead>
                    <tbody className="divide-y divide-gray-50">
                        {areas.map(area => (
                            <tr key={area.id}>
                                <td className="px-5 py-4"><div className="flex items-center gap-3">{area.image_url && <img src={area.image_url} className="w-16 h-10 object-cover rounded-sm" />}<div><p className="font-medium text-navy-950">{area.title}</p><p className="text-xs text-gray-400">/practice-areas/{area.slug}</p></div></div></td>
                                <td className="px-5 py-4 text-gray-500">{area.sort_order}</td>
                                <td className="px-5 py-4 text-gray-500">{area.show_in_nav ? 'Shown' : 'Hidden'}</td>
                                <td className="px-5 py-4"><span className={`text-xs px-2 py-0.5 rounded-full ${area.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{area.is_active ? 'Active' : 'Hidden'}</span></td>
                                <td className="px-5 py-4 text-right"><Link href={`/admin/practice-areas/${area.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium mr-4">Edit</Link><button onClick={() => remove(area)} className="text-red-400 hover:text-red-600">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
