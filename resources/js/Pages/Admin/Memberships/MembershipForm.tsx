import { Link } from '@inertiajs/react'
import { useRef, useState } from 'react'

export interface MembershipFormData {
    name: string
    acronym: string
    description: string
    url: string
    logo_url: string
    logo_file: File | null
    sort_order: string
    is_active: boolean
    [key: string]: string | boolean | File | null
}

interface Props {
    data: MembershipFormData
    setData: (key: string, value: string | boolean | File | null) => void
    errors: Partial<Record<string, string>>
    processing: boolean
    submitLabel: string
    currentLogo?: string | null
}

export default function MembershipForm({ data, setData, errors, processing, submitLabel, currentLogo }: Props) {
    const [logoMode, setLogoMode] = useState<'url' | 'file'>(
        currentLogo && !currentLogo.startsWith('http') ? 'file' : 'url'
    )
    const [filePreview, setFilePreview] = useState<string | null>(null)
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null
        setData('logo_file', file)
        if (!file) {
            setFilePreview(null)
            return
        }

        const reader = new FileReader()
        reader.onload = () => setFilePreview(reader.result as string)
        reader.readAsDataURL(file)
    }

    const previewSrc = filePreview ?? (logoMode === 'url' && data.logo_url ? data.logo_url : null) ?? currentLogo ?? null

    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-sm shadow-sm p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name <span className="text-red-500">*</span></label>
                        <input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Tanganyika Law Society" className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Acronym</label>
                        <input value={data.acronym} onChange={e => setData('acronym', e.target.value)} placeholder="TLS" className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea rows={5} value={data.description} onChange={e => setData('description', e.target.value)} placeholder="Professional body, bar association, or institutional affiliation." className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Website URL</label>
                    <input value={data.url} onChange={e => setData('url', e.target.value)} placeholder="https://..." className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
                </div>
            </div>

            <div className="space-y-5">
                <div className="bg-white rounded-sm shadow-sm p-5 h-fit">
                    <h3 className="font-medium text-navy-950 text-sm mb-4">Publishing</h3>
                    <label className="flex items-center gap-2.5 cursor-pointer mb-5">
                        <input type="checkbox" checked={data.is_active} onChange={e => setData('is_active', e.target.checked)} className="w-4 h-4 accent-gold-500" />
                        <span className="text-sm text-gray-700">Show on website</span>
                    </label>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                    <input type="number" min="0" value={data.sort_order} onChange={e => setData('sort_order', e.target.value)} className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 mb-5" />
                    <div className="flex gap-2">
                        <button type="submit" disabled={processing} className="flex-1 bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-sm transition-colors">{processing ? 'Saving...' : submitLabel}</button>
                        <Link href="/admin/memberships" className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">Cancel</Link>
                    </div>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-5 space-y-4">
                    <h3 className="font-medium text-navy-950 text-sm">Membership Logo</h3>

                    {previewSrc && (
                        <div className="border border-gray-200 rounded-sm bg-gray-50 p-4">
                            <img src={previewSrc} alt="Logo preview" className="h-16 w-full object-contain" />
                        </div>
                    )}

                    <div className="flex border border-gray-200 rounded-sm overflow-hidden text-xs font-medium">
                        <button
                            type="button"
                            onClick={() => { setLogoMode('url'); setData('logo_file', null); setFilePreview(null) }}
                            className={`flex-1 py-2 transition-colors ${logoMode === 'url' ? 'bg-[#683030] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                        >
                            Enter URL
                        </button>
                        <button
                            type="button"
                            onClick={() => { setLogoMode('file'); setData('logo_url', '') }}
                            className={`flex-1 py-2 transition-colors ${logoMode === 'file' ? 'bg-[#683030] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                        >
                            Upload File
                        </button>
                    </div>

                    {logoMode === 'url' && (
                        <input value={data.logo_url} onChange={e => setData('logo_url', e.target.value)} placeholder="https://..." className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                    )}

                    {logoMode === 'file' && (
                        <div>
                            <div onClick={() => fileRef.current?.click()} className="border-2 border-dashed border-gray-300 hover:border-gold-400 rounded-sm p-4 text-center cursor-pointer transition-colors">
                                <p className="text-xs text-gray-500">{data.logo_file ? data.logo_file.name : 'Click to upload logo'}</p>
                                <p className="text-xs text-gray-300 mt-0.5">PNG, JPG, SVG-safe image formats — max 2 MB</p>
                            </div>
                            <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                            {data.logo_file && (
                                <button type="button" onClick={() => { setData('logo_file', null); setFilePreview(null); if (fileRef.current) fileRef.current.value = '' }} className="text-xs text-red-400 hover:text-red-600 mt-1.5 transition-colors">
                                    Remove file
                                </button>
                            )}
                        </div>
                    )}

                    {errors.logo_url && <p className="text-red-500 text-xs mt-1">{errors.logo_url}</p>}
                    {errors.logo_file && <p className="text-red-500 text-xs mt-1">{errors.logo_file}</p>}
                </div>
            </div>
        </div>
    )
}
