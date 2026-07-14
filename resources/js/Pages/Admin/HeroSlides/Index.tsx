import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { confirmDelete } from '@/lib/confirm'

interface Slide {
    id: string; title: string; badge: string | null; image_url: string | null
    sort_order: number; is_active: boolean
}

export default function HeroSlidesIndex({ slides }: { slides: Slide[] }) {
    const remove = async (slide: Slide) => {
        const confirmed = await confirmDelete({
            title: `Remove "${slide.title}"?`,
            confirmButtonText: 'Yes, remove slide',
        })
        if (confirmed) router.delete(`/admin/hero-slides/${slide.id}`)
    }

    return (
        <AdminLayout title="Hero Slides">
            <Head title="Hero Slides - Admin" />
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">{slides.length} slide{slides.length !== 1 ? 's' : ''}</p>
                <Link href="/admin/hero-slides/create" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors">Add Slide</Link>
            </div>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead><tr className="border-b border-gray-100 bg-gray-50"><th className="text-left px-5 py-3">Slide</th><th className="text-left px-5 py-3">Order</th><th className="text-left px-5 py-3">Status</th><th className="px-5 py-3" /></tr></thead>
                    <tbody className="divide-y divide-gray-50">
                        {slides.map(slide => (
                            <tr key={slide.id}>
                                <td className="px-5 py-4"><div className="flex items-center gap-3">{slide.image_url && <img src={slide.image_url} className="w-16 h-10 object-cover rounded-sm" />}<div><p className="font-medium text-navy-950">{slide.title}</p><p className="text-xs text-gray-400">{slide.badge}</p></div></div></td>
                                <td className="px-5 py-4 text-gray-500">{slide.sort_order}</td>
                                <td className="px-5 py-4"><span className={`text-xs px-2 py-0.5 rounded-full ${slide.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{slide.is_active ? 'Active' : 'Hidden'}</span></td>
                                <td className="px-5 py-4 text-right"><Link href={`/admin/hero-slides/${slide.id}/edit`} className="text-gold-600 hover:text-gold-500 font-medium mr-4">Edit</Link><button onClick={() => remove(slide)} className="text-red-400 hover:text-red-600">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
