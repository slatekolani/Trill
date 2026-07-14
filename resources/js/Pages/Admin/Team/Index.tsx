import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { confirmDelete } from '@/lib/confirm'

interface Member {
    id: string
    name: string
    role: string
    initials: string
    email: string
    is_active: boolean
    sort_order: number
}

interface Props { members: Member[] }

export default function TeamIndex({ members }: Props) {
    const handleDelete = async (id: string, name: string) => {
        const confirmed = await confirmDelete({
            title: `Remove "${name}" from the team?`,
            confirmButtonText: 'Yes, remove member',
        })
        if (!confirmed) return

        router.delete(`/admin/team/${id}`)
    }

    return (
        <AdminLayout title="Team Members">
            <Head title="Team Members — Admin" />

            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{members.length} member{members.length !== 1 ? 's' : ''}</p>
                <Link
                    href="/admin/team/create"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Member
                </Link>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                {members.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-gray-400 text-sm mb-3">No team members yet</p>
                        <Link href="/admin/team/create" className="text-gold-600 text-sm hover:underline">Add first team member →</Link>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Member</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Role</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Order</th>
                                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                                <th className="px-5 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {members.map((m) => (
                                <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-[#683030] flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-serif font-bold text-xs">{m.initials}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-navy-950">{m.name}</p>
                                                {m.email && <p className="text-xs text-gray-400">{m.email}</p>}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 hidden md:table-cell text-gray-600">{m.role}</td>
                                    <td className="px-5 py-4 hidden lg:table-cell text-gray-400">{m.sort_order}</td>
                                    <td className="px-5 py-4">
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {m.is_active ? 'Active' : 'Hidden'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3 justify-end">
                                            <Link href={`/admin/team/${m.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium">Edit</Link>
                                            <button onClick={() => handleDelete(m.id, m.name)} className="text-red-400 hover:text-red-600 transition-colors">Remove</button>
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
