import { Link } from '@inertiajs/react'
import { useRef, useState } from 'react'

export interface HeroSlideFormData {
    badge: string
    title: string
    description: string
    image_url: string
    image_file: File | null
    cta_label: string
    cta_href: string
    sort_order: string
    is_active: boolean
    [key: string]: string | boolean | File | null
}

interface Props {
    data: HeroSlideFormData
    setData: (key: string, value: string | boolean | File | null) => void
    errors: Partial<Record<string, string>>
    processing: boolean
    submitLabel: string
    cancelHref: string
    currentImage?: string | null
}

export default function HeroSlideForm({ data, setData, errors, processing, submitLabel, cancelHref, currentImage }: Props) {
    const fileRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const previewSrc = preview ?? data.image_url ?? currentImage ?? null

    const pickFile = (file: File | null) => {
        setData('image_file', file)
        if (!file) {
            setPreview(null)
            return
        }

        const reader = new FileReader()
        reader.onload = () => setPreview(reader.result as string)
        reader.readAsDataURL(file)
    }

    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-sm shadow-sm p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Badge</label>
                        <input value={data.badge} onChange={e => setData('badge', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Display Order</label>
                        <input type="number" min="0" value={data.sort_order} onChange={e => setData('sort_order', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Title <span className="text-red-500">*</span></label>
                    <input value={data.title} onChange={e => setData('title', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea rows={5} value={data.description} onChange={e => setData('description', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Button Label</label>
                        <input value={data.cta_label} onChange={e => setData('cta_label', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Button Link</label>
                        <input value={data.cta_href} onChange={e => setData('cta_href', e.target.value)} placeholder="/contact" className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                <div className="bg-white rounded-sm shadow-sm p-5">
                    <h3 className="font-medium text-navy-950 text-sm mb-4">Publishing</h3>
                    <label className="flex items-center gap-2.5 cursor-pointer mb-5">
                        <input type="checkbox" checked={data.is_active} onChange={e => setData('is_active', e.target.checked)} className="w-4 h-4 accent-gold-500" />
                        <span className="text-sm text-gray-700">Show on website</span>
                    </label>
                    <div className="flex gap-2">
                        <button type="submit" disabled={processing} className="flex-1 bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-sm transition-colors">
                            {processing ? 'Saving...' : submitLabel}
                        </button>
                        <Link href={cancelHref} className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">Cancel</Link>
                    </div>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-5 space-y-4">
                    <h3 className="font-medium text-navy-950 text-sm">Hero Image</h3>
                    {previewSrc && <img src={previewSrc} alt="Preview" className="w-full aspect-video object-cover rounded-sm border border-gray-200" />}
                    <input value={data.image_url} onChange={e => setData('image_url', e.target.value)} placeholder="https://..." className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    <div onClick={() => fileRef.current?.click()} className="border-2 border-dashed border-gray-300 hover:border-gold-400 rounded-sm p-4 text-center cursor-pointer transition-colors">
                        <p className="text-xs text-gray-500">{data.image_file ? data.image_file.name : 'Click to upload image'}</p>
                        <p className="text-xs text-gray-300 mt-0.5">JPG or PNG, max 4 MB</p>
                    </div>
                    <input ref={fileRef} type="file" accept="image/*" onChange={e => pickFile(e.target.files?.[0] ?? null)} className="hidden" />
                    {errors.image_file && <p className="text-red-500 text-xs mt-1">{errors.image_file}</p>}
                </div>
            </div>
        </div>
    )
}
