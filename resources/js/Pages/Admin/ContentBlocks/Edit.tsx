import { Head, Link, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Block {
    id: string
    key: string
    label: string
    value: string | null
    group: string
}

export default function EditContentBlock({ block }: { block: Block }) {
    const { data, setData, put, processing, errors } = useForm({
        label: block.label,
        value: block.value ?? '',
        group: block.group,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        put(`/admin/content-blocks/${block.id}`)
    }

    return (
        <AdminLayout title={`Edit: ${block.label}`}>
            <Head title="Edit Content Block - Admin" />
            <form onSubmit={submit} className="max-w-3xl bg-white rounded-sm shadow-sm p-6 space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Label</label>
                    <input value={data.label} onChange={e => setData('label', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    {errors.label && <p className="text-red-500 text-xs mt-1">{errors.label}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Group</label>
                    <input value={data.group} onChange={e => setData('group', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Text</label>
                    <textarea rows={8} value={data.value} onChange={e => setData('value', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                </div>
                <div className="flex gap-2">
                    <button disabled={processing} className="bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors">{processing ? 'Saving...' : 'Update Block'}</button>
                    <Link href="/admin/content-blocks" className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">Cancel</Link>
                </div>
            </form>
        </AdminLayout>
    )
}
