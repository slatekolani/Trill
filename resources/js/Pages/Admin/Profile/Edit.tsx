import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

interface Profile {
    name: string
    email: string
    is_admin: boolean
    created_at: string | null
}

interface Props {
    profile: Profile
}

export default function EditProfile({ profile }: Props) {
    const { flash } = usePage<{ flash?: { success?: string; error?: string } }>().props
    const { data, setData, put, processing, errors, reset } = useForm({
        name: profile.name,
        email: profile.email,
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        put('/admin/profile', {
            preserveScroll: true,
            onSuccess: () => reset('current_password', 'password', 'password_confirmation'),
        })
    }

    return (
        <AdminLayout title="Profile">
            <Head title="Profile — Admin" />

            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <aside className="bg-white rounded-sm shadow-sm p-6 self-start">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-full bg-gold-500 flex items-center justify-center">
                            <span className="text-white font-serif text-2xl font-semibold">{profile.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                            <h2 className="font-serif text-navy-950 text-xl font-semibold">{profile.name}</h2>
                            <p className="text-sm text-gray-500">{profile.email}</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-5 space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Role</span>
                            <span className="font-medium text-navy-950">{profile.is_admin ? 'Administrator' : 'User'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Joined</span>
                            <span className="font-medium text-navy-950">{profile.created_at ?? 'Not available'}</span>
                        </div>
                    </div>
                </aside>

                <form onSubmit={submit} className="bg-white rounded-sm shadow-sm p-6 space-y-6">
                    <div>
                        <h2 className="font-serif text-navy-950 text-lg font-semibold">Account Details</h2>
                        <p className="text-sm text-gray-500 mt-1">Update your personal admin account information.</p>
                    </div>

                    {flash?.success && (
                        <div className="border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                            {flash.success}
                        </div>
                    )}

                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                autoComplete="name"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                autoComplete="email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h2 className="font-serif text-navy-950 text-lg font-semibold">Change Password</h2>
                        <p className="text-sm text-gray-500 mt-1">Leave these fields blank to keep your current password.</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                            <input
                                type="password"
                                value={data.current_password}
                                onChange={e => setData('current_password', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                autoComplete="current-password"
                            />
                            {errors.current_password && <p className="text-red-500 text-xs mt-1">{errors.current_password}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                autoComplete="new-password"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-gray-100 pt-6 sm:flex-row">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#683030] hover:bg-[#572929] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
                        >
                            {processing ? 'Saving...' : 'Save Profile'}
                        </button>
                        <Link href="/admin" className="px-4 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-500 hover:border-gray-300 transition-colors text-center">
                            Back to Dashboard
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}
