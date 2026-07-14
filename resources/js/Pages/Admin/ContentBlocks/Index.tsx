import { Head, Link } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Block {
    id: string
    key: string
    label: string
    value: string | null
    group: string
}

export default function ContentBlocksIndex({ blocks }: { blocks: Block[] }) {
    return (
        <AdminLayout title="Content Blocks">
            <Head title="Content Blocks - Admin" />
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Block</th>
                            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Group</th>
                            <th className="px-5 py-3" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {blocks.map(block => (
                            <tr key={block.id}>
                                <td className="px-5 py-4">
                                    <p className="font-medium text-navy-950">{block.label}</p>
                                    <p className="text-xs text-gray-400">{block.key}</p>
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{block.value}</p>
                                </td>
                                <td className="px-5 py-4 text-gray-500 hidden md:table-cell">{block.group}</td>
                                <td className="px-5 py-4 text-right">
                                    <Link href={`/admin/content-blocks/${block.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
