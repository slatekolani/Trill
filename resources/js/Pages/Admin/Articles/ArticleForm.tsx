import { Link } from '@inertiajs/react'
import { useState, useRef } from 'react'

interface Category { id: number; name: string }

export interface ArticleFormData {
    title:        string
    category_id:  string
    author:       string
    author_role:  string
    excerpt:      string
    content:      string
    hero_img:     string
    hero_file:    File | null
    read_time:    string
    is_featured:  boolean
    is_published: boolean
    [key: string]: string | boolean | File | null
}

interface Props {
    data:        ArticleFormData
    setData:     (key: string, value: string | boolean | File | null) => void
    errors:      Partial<Record<string, string>>
    processing:  boolean
    categories:  Category[]
    submitLabel: string
    cancelHref:  string
    currentHeroImg?: string | null
}

export default function ArticleForm({ data, setData, errors, processing, categories, submitLabel, cancelHref, currentHeroImg }: Props) {
    const [imgMode, setImgMode] = useState<'url' | 'file'>(
        currentHeroImg && !currentHeroImg.startsWith('http') ? 'file' : 'url'
    )
    const [filePreview, setFilePreview] = useState<string | null>(null)
    const fileRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null
        setData('hero_file', file)
        if (file) {
            const reader = new FileReader()
            reader.onload = () => setFilePreview(reader.result as string)
            reader.readAsDataURL(file)
        } else {
            setFilePreview(null)
        }
    }

    const previewSrc = filePreview ?? (imgMode === 'url' && data.hero_img ? data.hero_img : null) ?? currentHeroImg ?? null

    return (
        <div className="grid lg:grid-cols-3 gap-6">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-5">
                <div className="bg-white rounded-sm shadow-sm p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Title <span className="text-red-500">*</span></label>
                        <input type="text" value={data.title} onChange={e => setData('title', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Article title" />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt / Summary <span className="text-red-500">*</span></label>
                        <textarea value={data.excerpt} onChange={e => setData('excerpt', e.target.value)} rows={3}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                            placeholder="Short description shown on the listings page" />
                        {errors.excerpt && <p className="text-red-500 text-xs mt-1">{errors.excerpt}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Content <span className="text-red-500">*</span>
                            <span className="text-gray-400 font-normal ml-1">(separate paragraphs with a blank line)</span>
                        </label>
                        <textarea value={data.content} onChange={e => setData('content', e.target.value)} rows={18}
                            className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 font-mono leading-relaxed"
                            placeholder={"Write the full article content here.\n\nEach blank line creates a new paragraph."} />
                        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
                    </div>
                </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">

                {/* Publish */}
                <div className="bg-white rounded-sm shadow-sm p-5">
                    <h3 className="font-medium text-navy-950 text-sm mb-4">Publishing</h3>
                    <div className="space-y-3 mb-5">
                        <label className="flex items-center gap-2.5 cursor-pointer">
                            <input type="checkbox" checked={data.is_published} onChange={e => setData('is_published', e.target.checked)} className="w-4 h-4 accent-gold-500" />
                            <span className="text-sm text-gray-700">Published</span>
                        </label>
                        <label className="flex items-center gap-2.5 cursor-pointer">
                            <input type="checkbox" checked={data.is_featured} onChange={e => setData('is_featured', e.target.checked)} className="w-4 h-4 accent-gold-500" />
                            <span className="text-sm text-gray-700">Featured article</span>
                        </label>
                    </div>
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

                {/* Details */}
                <div className="bg-white rounded-sm shadow-sm p-5 space-y-4">
                    <h3 className="font-medium text-navy-950 text-sm">Details</h3>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Category <span className="text-red-500">*</span></label>
                        <select value={data.category_id} onChange={e => setData('category_id', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white">
                            <option value="">Select category…</option>
                            {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                        </select>
                        {errors.category_id && <p className="text-red-500 text-xs mt-1">{errors.category_id}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Author Name <span className="text-red-500">*</span></label>
                        <input type="text" value={data.author} onChange={e => setData('author', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="e.g. Managing Partner" />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Author Role</label>
                        <input type="text" value={data.author_role} onChange={e => setData('author_role', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="e.g. Senior Advocate — Corporate" />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Read Time</label>
                        <input type="text" value={data.read_time} onChange={e => setData('read_time', e.target.value)}
                            className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="5 min read" />
                    </div>

                    {/* ── HERO IMAGE ── */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-2">Hero Image</label>

                        {/* Preview */}
                        {previewSrc && (
                            <div className="mb-3">
                                <img src={previewSrc} alt="Preview" className="w-full h-28 object-cover rounded-sm border border-gray-200" />
                            </div>
                        )}

                        {/* Mode toggle */}
                        <div className="flex border border-gray-200 rounded-sm overflow-hidden mb-3 text-xs font-medium">
                            <button type="button"
                                onClick={() => { setImgMode('url'); setData('hero_file', null); setFilePreview(null) }}
                                className={`flex-1 py-2 transition-colors ${imgMode === 'url' ? 'bg-navy-950 text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                                Enter URL
                            </button>
                            <button type="button"
                                onClick={() => { setImgMode('file'); setData('hero_img', '') }}
                                className={`flex-1 py-2 transition-colors ${imgMode === 'file' ? 'bg-navy-950 text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                                Upload File
                            </button>
                        </div>

                        {/* URL input */}
                        {imgMode === 'url' && (
                            <input type="text" value={data.hero_img} onChange={e => setData('hero_img', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                placeholder="https://images.unsplash.com/…" />
                        )}

                        {/* File upload */}
                        {imgMode === 'file' && (
                            <div>
                                <div onClick={() => fileRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 hover:border-gold-400 rounded-sm p-4 text-center cursor-pointer transition-colors">
                                    {data.hero_file ? (
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="truncate max-w-[160px]">{(data.hero_file as File).name}</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <svg className="w-6 h-6 text-gray-300 mx-auto mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                            </svg>
                                            <p className="text-xs text-gray-400">Click to choose an image</p>
                                            <p className="text-xs text-gray-300 mt-0.5">JPG, PNG, WebP — max 4 MB</p>
                                        </div>
                                    )}
                                </div>
                                <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                {data.hero_file && (
                                    <button type="button"
                                        onClick={() => { setData('hero_file', null); setFilePreview(null); if (fileRef.current) fileRef.current.value = '' }}
                                        className="text-xs text-red-400 hover:text-red-600 mt-1.5 transition-colors">
                                        Remove file
                                    </button>
                                )}
                            </div>
                        )}

                        {errors.hero_file && <p className="text-red-500 text-xs mt-1">{errors.hero_file}</p>}
                        {errors.hero_img  && <p className="text-red-500 text-xs mt-1">{errors.hero_img}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
