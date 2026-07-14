import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { confirmDelete } from '@/lib/confirm'

interface Sector {
    id: string
    title: string
    slug: string
    image_url: string | null
    sort_order: number
    is_active: boolean
}

export default function SectorsIndex({ sectors }: { sectors: Sector[] }) {
    const remove = async (sector: Sector) => {
        const confirmed = await confirmDelete({
            title: `Remove "${sector.title}"?`,
            confirmButtonText: 'Yes, remove sector',
        })
        if (confirmed) router.delete(`/admin/sectors/${sector.id}`)
    }

    return (
        <AdminLayout title="Sectors">
            <Head title="Sectors - Admin" />
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{sectors.length} sector{sectors.length !== 1 ? 's' : ''}</p>
                <Link href="/admin/sectors/create" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors">Add Sector</Link>
            </div>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead><tr className="border-b border-gray-100 bg-gray-50"><th className="text-left px-5 py-3">Sector</th><th className="text-left px-5 py-3">Order</th><th className="text-left px-5 py-3">Status</th><th className="px-5 py-3" /></tr></thead>
                    <tbody className="divide-y divide-gray-50">
                        {sectors.map(sector => (
                            <tr key={sector.id}>
                                <td className="px-5 py-4"><div className="flex items-center gap-3">{sector.image_url && <img src={sector.image_url} className="w-16 h-10 object-cover rounded-sm" />}<div><p className="font-medium text-navy-950">{sector.title}</p><p className="text-xs text-gray-400">/sectors/{sector.slug}</p></div></div></td>
                                <td className="px-5 py-4 text-gray-500">{sector.sort_order}</td>
                                <td className="px-5 py-4"><span className={`text-xs px-2 py-0.5 rounded-full ${sector.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{sector.is_active ? 'Active' : 'Hidden'}</span></td>
                                <td className="px-5 py-4 text-right"><Link href={`/admin/sectors/${sector.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium mr-4">Edit</Link><button onClick={() => remove(sector)} className="text-red-400 hover:text-red-600">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
