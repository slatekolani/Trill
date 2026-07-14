import { ReactNode, useState } from 'react'
import { Link, router, usePage } from '@inertiajs/react'

interface Props {
    children: ReactNode
    title?: string
}

const navItems = [
    {
        label: 'Dashboard',
        href:  '/admin',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        label: 'Profile',
        href:  '/admin/profile',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0" />
            </svg>
        ),
    },
    {
        label: 'Articles',
        href:  '/admin/articles',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
    },
    {
        label: 'Team Members',
        href:  '/admin/team',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        label: 'Hero Slides',
        href:  '/admin/hero-slides',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.5zm3-1.5l3.75-3.75 2.25 2.25 3.75-4.5L18 12" />
            </svg>
        ),
    },
    {
        label: 'Practice Areas',
        href:  '/admin/practice-areas',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m5.25-5.25H6.75M4.5 4.5h15v15h-15z" />
            </svg>
        ),
    },
    {
        label: 'Sectors',
        href:  '/admin/sectors',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M6.75 6.75h10.5M6.75 11.25h10.5M6.75 15.75h10.5" />
            </svg>
        ),
    },
    {
        label: 'Memberships',
        href:  '/admin/memberships',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75M12 3.75l7.5 3v5.25c0 4.739-3.13 8.96-7.5 10.25-4.37-1.29-7.5-5.511-7.5-10.25V6.75l7.5-3z" />
            </svg>
        ),
    },
    {
        label: 'Content Blocks',
        href:  '/admin/content-blocks',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15M4.5 12h15M4.5 17.25h9" />
            </svg>
        ),
    },
    {
        label: 'Categories',
        href:  '/admin/categories',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
        ),
    },
]

export default function AdminLayout({ children, title }: Props) {
    const { url, props } = usePage<{
        auth?: {
            user?: {
                name: string
                email: string
                is_admin: boolean
            } | null
        }
    }>()
    const user = props.auth?.user
    const userInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || 'A'
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleLogout = () => {
        router.post('/admin/logout')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* ── SIDEBAR ── */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#2f2526] flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Brand */}
                <div className="px-5 py-5 border-b border-white/10">
                    <Link href="/" className="block bg-white border border-gold-100 px-4 py-3 rounded-sm shadow-sm transition-shadow hover:shadow-md">
                        <img src="/Logo/trill_logo.png" alt="Trill" className="h-11 w-full object-contain" />
                    </Link>
                    <p className="text-gold-200 text-xs mt-3 tracking-widest uppercase">Admin Panel</p>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const active = url === item.href || (item.href !== '/admin' && url.startsWith(item.href))
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                                    active
                                        ? 'bg-gold-500 text-white'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer */}
                <div className="px-4 py-4 border-t border-white/10 space-y-2">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2 rounded-sm text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Website
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-sm text-xs text-gray-500 hover:text-red-400 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* ── MAIN ── */}
            <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">

                {/* Top bar */}
                <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {title && (
                            <h1 className="font-serif text-navy-950 text-lg font-semibold">{title}</h1>
                        )}
                    </div>
                    <Link href="/admin/profile" className="flex items-center gap-2 rounded-sm px-2 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-50 hover:text-navy-950">
                        <div className="w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">{userInitial}</span>
                        </div>
                        <span className="hidden sm:block">{user?.name ?? 'Admin'}</span>
                    </Link>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
