import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { confirmDelete } from '@/lib/confirm'

interface Membership {
    id: string
    name: string
    acronym: string | null
    description: string | null
    url: string | null
    logo_url: string | null
    sort_order: number
    is_active: boolean
}

export default function MembershipsIndex({ memberships }: { memberships: Membership[] }) {
    const remove = async (membership: Membership) => {
        const confirmed = await confirmDelete({
            title: `Remove "${membership.name}"?`,
            confirmButtonText: 'Yes, remove membership',
        })
        if (confirmed) router.delete(`/admin/memberships/${membership.id}`)
    }

    return (
        <AdminLayout title="Memberships & Affiliations">
            <Head title="Memberships & Affiliations - Admin" />
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{memberships.length} membership{memberships.length !== 1 ? 's' : ''}</p>
                <Link href="/admin/memberships/create" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors">Add Membership</Link>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                            <th className="text-left px-5 py-3">Membership</th>
                            <th className="text-left px-5 py-3 hidden md:table-cell">Order</th>
                            <th className="text-left px-5 py-3 hidden md:table-cell">Status</th>
                            <th className="px-5 py-3" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {memberships.map(membership => (
                            <tr key={membership.id}>
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 bg-gold-50 border border-gold-200 rounded-sm flex items-center justify-center text-gold-700 text-xs font-bold overflow-hidden">
                                            {membership.logo_url ? (
                                                <img src={membership.logo_url} alt={membership.name} className="h-full w-full object-contain p-1.5" />
                                            ) : (
                                                membership.acronym || membership.name.slice(0, 2).toUpperCase()
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-navy-950">{membership.name}</p>
                                            {membership.description && <p className="text-xs text-gray-500 line-clamp-1">{membership.description}</p>}
                                            {membership.url && <p className="text-xs text-gray-400">{membership.url}</p>}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4 text-gray-500 hidden md:table-cell">{membership.sort_order}</td>
                                <td className="px-5 py-4 hidden md:table-cell">
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${membership.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                        {membership.is_active ? 'Active' : 'Hidden'}
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-right">
                                    <Link href={`/admin/memberships/${membership.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium mr-4">Edit</Link>
                                    <button onClick={() => remove(membership)} className="text-red-400 hover:text-red-600">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
