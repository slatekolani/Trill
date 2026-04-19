import { Link } from '@inertiajs/react'
import { useState, useRef } from 'react'

export interface TeamFormData {
    name:           string
    role:           string
    bio:            string
    avatar_url:     string
    avatar_file:    File | null
    initials:       string
    email:          string
    languages:      string
    practice_areas: string
    education:      string
    memberships:    string
    sort_order:     string
    is_active:      boolean
    [key: string]:  string | boolean | File | null
}

interface Props {
    data:           TeamFormData
    setData:        (key: string, value: string | boolean | File | null) => void
    errors:         Partial<Record<string, string>>
    processing:     boolean
    submitLabel:    string
    cancelHref:     string
    currentAvatar?: string | null   // existing saved photo (edit mode)
}

export default function TeamForm({ data, setData, errors, processing, submitLabel, cancelHref, currentAvatar }: Props) {
    const [photoMode, setPhotoMode] = useState<'url' | 'file'>(
        currentAvatar && !currentAvatar.startsWith('http') ? 'file' : 'url'
    )
    const [filePreview, setFilePreview] = useState<string | null>(null)
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null
        setData('avatar_file', file)
        if (file) {
            const reader = new FileReader()
            reader.onload = () => setFilePreview(reader.result as string)
            reader.readAsDataURL(file)
        } else {
            setFilePreview(null)
        }
    }

    // Resolve preview: file preview > typed URL > saved avatar
    const previewSrc = filePreview ?? (photoMode === 'url' && data.avatar_url ? data.avatar_url : null) ?? currentAvatar ?? null

    return (
        <div className="grid lg:grid-cols-3 gap-6">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-5">
                <div className="bg-white rounded-sm shadow-sm p-6 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="e.g. Amina Rashid" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Title / Role <span className="text-red-500">*</span></label>
                            <input type="text" value={data.role} onChange={e => setData('role', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="e.g. Managing Partner" />
                            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Biography <span className="text-red-500">*</span></label>
                        <textarea value={data.bio} onChange={e => setData('bio', e.target.value)} rows={5}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                            placeholder="Professional biography…" />
                        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Languages <span className="text-gray-400 font-normal">(one per line)</span>
                            </label>
                            <textarea value={data.languages} onChange={e => setData('languages', e.target.value)} rows={3}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                                placeholder={"English\nSwahili\nFrench"} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Memberships <span className="text-gray-400 font-normal">(one per line)</span>
                            </label>
                            <textarea value={data.memberships} onChange={e => setData('memberships', e.target.value)} rows={3}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                                placeholder={"Tanganyika Law Society\nEast African Law Society"} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Practice Areas <span className="text-gray-400 font-normal">(one per line)</span>
                        </label>
                        <textarea value={data.practice_areas} onChange={e => setData('practice_areas', e.target.value)} rows={4}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                            placeholder={"Corporate & Commercial Law\nDispute Resolution\nIntellectual Property"} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Education <span className="text-gray-400 font-normal">(Degree | Institution, one per line)</span>
                        </label>
                        <textarea value={data.education} onChange={e => setData('education', e.target.value)} rows={3}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 font-mono resize-none"
                            placeholder={"LLB | University of Dar es Salaam\nLLM | University of London"} />
                    </div>
                </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">

                {/* Save */}
                <div className="bg-white rounded-sm shadow-sm p-5">
                    <h3 className="font-medium text-navy-950 text-sm mb-4">Settings</h3>
                    <label className="flex items-center gap-2.5 cursor-pointer mb-5">
                        <input type="checkbox" checked={data.is_active} onChange={e => setData('is_active', e.target.checked)} className="w-4 h-4 accent-gold-500" />
                        <span className="text-sm text-gray-700">Show on website</span>
                    </label>
                    <div className="flex gap-2">
                        <button type="submit" disabled={processing}
                            className="flex-1 bg-navy-950 hover:bg-navy-900 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-sm transition-colors">
                            {processing ? 'Saving…' : submitLabel}
                        </button>
                        <Link href={cancelHref} className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors">
                            Cancel
                        </Link>
                    </div>
                </div>

                {/* Profile details */}
                <div className="bg-white rounded-sm shadow-sm p-5 space-y-4">
                    <h3 className="font-medium text-navy-950 text-sm">Profile Details</h3>

                    {/* Initials */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Initials <span className="text-red-500">*</span></label>
                        <input type="text" value={data.initials} onChange={e => setData('initials', e.target.value)} maxLength={5}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 uppercase"
                            placeholder="AR" />
                        {errors.initials && <p className="text-red-500 text-xs mt-1">{errors.initials}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Email Address</label>
                        <input type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="member@trill.co.tz" />
                    </div>

                    {/* ── PHOTO UPLOAD ── */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-2">Profile Photo</label>

                        {/* Preview */}
                        {previewSrc && (
                            <div className="mb-3 flex items-center gap-3">
                                <img src={previewSrc} alt="Preview" className="w-16 h-16 rounded-full object-cover border-2 border-gold-300" />
                                <span className="text-xs text-gray-400">Current photo</span>
                            </div>
                        )}

                        {/* Mode toggle tabs */}
                        <div className="flex border border-gray-200 rounded-sm overflow-hidden mb-3 text-xs font-medium">
                            <button type="button"
                                onClick={() => { setPhotoMode('url'); setData('avatar_file', null); setFilePreview(null) }}
                                className={`flex-1 py-2 transition-colors ${photoMode === 'url' ? 'bg-navy-950 text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                                Enter URL
                            </button>
                            <button type="button"
                                onClick={() => { setPhotoMode('file'); setData('avatar_url', '') }}
                                className={`flex-1 py-2 transition-colors ${photoMode === 'file' ? 'bg-navy-950 text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                                Upload File
                            </button>
                        </div>

                        {/* URL input */}
                        {photoMode === 'url' && (
                            <input type="text" value={data.avatar_url} onChange={e => setData('avatar_url', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="https://…" />
                        )}

                        {/* File upload */}
                        {photoMode === 'file' && (
                            <div>
                                <div
                                    onClick={() => fileRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 hover:border-gold-400 rounded-sm p-4 text-center cursor-pointer transition-colors"
                                >
                                    {data.avatar_file ? (
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="truncate max-w-[140px]">{(data.avatar_file as File).name}</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <svg className="w-6 h-6 text-gray-300 mx-auto mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                            </svg>
                                            <p className="text-xs text-gray-400">Click to choose a photo</p>
                                            <p className="text-xs text-gray-300 mt-0.5">JPG, PNG — max 2 MB</p>
                                        </div>
                                    )}
                                </div>
                                <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                {data.avatar_file && (
                                    <button type="button" onClick={() => { setData('avatar_file', null); setFilePreview(null); if (fileRef.current) fileRef.current.value = '' }}
                                        className="text-xs text-red-400 hover:text-red-600 mt-1.5 transition-colors">
                                        Remove file
                                    </button>
                                )}
                            </div>
                        )}

                        {errors.avatar_file && <p className="text-red-500 text-xs mt-1">{errors.avatar_file}</p>}
                        {errors.avatar_url  && <p className="text-red-500 text-xs mt-1">{errors.avatar_url}</p>}
                    </div>

                    {/* Display Order */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                        <input type="number" value={data.sort_order} onChange={e => setData('sort_order', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="0" min="0" />
                        <p className="text-xs text-gray-400 mt-1">Lower number = appears first</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
