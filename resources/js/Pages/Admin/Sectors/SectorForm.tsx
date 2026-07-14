import { Link } from '@inertiajs/react'
import { useRef, useState } from 'react'

export interface SectorFormData {
    title: string
    slug: string
    tagline: string
    intro: string
    image_url: string
    image_file: File | null
    tags: string
    challenges: string
    services: string
    relevant_areas: string
    sort_order: string
    is_active: boolean
    [key: string]: string | boolean | File | null
}

interface Props {
    data: SectorFormData
    setData: (key: string, value: string | boolean | File | null) => void
    errors: Partial<Record<string, string>>
    processing: boolean
    submitLabel: string
    cancelHref: string
    currentImage?: string | null
}

export default function SectorForm({ data, setData, errors, processing, submitLabel, cancelHref, currentImage }: Props) {
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
            <div className="lg:col-span-2 space-y-5">
                <div className="bg-white rounded-sm shadow-sm p-6 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Title <span className="text-red-500">*</span></label>
                            <input value={data.title} onChange={e => setData('title', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug</label>
                            <input value={data.slug} onChange={e => setData('slug', e.target.value)} placeholder="auto-generated when blank" className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tagline</label>
                        <input value={data.tagline} onChange={e => setData('tagline', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Intro</label>
                        <textarea rows={6} value={data.intro} onChange={e => setData('intro', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                    </div>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tags <span className="text-gray-400 font-normal">(one per line)</span></label>
                        <textarea rows={3} value={data.tags} onChange={e => setData('tags', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Common Legal Challenges <span className="text-gray-400 font-normal">(one per line)</span></label>
                        <textarea rows={5} value={data.challenges} onChange={e => setData('challenges', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Services <span className="text-gray-400 font-normal">(one per line)</span></label>
                        <textarea rows={5} value={data.services} onChange={e => setData('services', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Relevant Practice Areas <span className="text-gray-400 font-normal">(Title | /practice-areas/slug)</span></label>
                        <textarea rows={4} value={data.relevant_areas} onChange={e => setData('relevant_areas', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
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
                    <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                    <input type="number" min="0" value={data.sort_order} onChange={e => setData('sort_order', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 mb-5" />
                    <div className="flex gap-2">
                        <button type="submit" disabled={processing} className="flex-1 bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-sm transition-colors">{processing ? 'Saving...' : submitLabel}</button>
                        <Link href={cancelHref} className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">Cancel</Link>
                    </div>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-5 space-y-4">
                    <h3 className="font-medium text-navy-950 text-sm">Sector Image</h3>
                    {previewSrc && <img src={previewSrc} alt="Preview" className="w-full aspect-video object-cover rounded-sm border border-gray-200" />}
                    <input value={data.image_url} onChange={e => setData('image_url', e.target.value)} placeholder="https://..." className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    <div onClick={() => fileRef.current?.click()} className="border-2 border-dashed border-gray-300 hover:border-gold-400 rounded-sm p-4 text-center cursor-pointer transition-colors">
                        <p className="text-xs text-gray-500">{data.image_file ? data.image_file.name : 'Click to upload image'}</p>
                    </div>
                    <input ref={fileRef} type="file" accept="image/*" onChange={e => pickFile(e.target.files?.[0] ?? null)} className="hidden" />
                </div>
            </div>
        </div>
    )
}
