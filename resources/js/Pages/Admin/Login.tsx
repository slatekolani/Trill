import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email:    '',
        password: '',
        remember: false,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/login')
    }

    return (
        <>
            <Head title="Admin Login — Trill & Associates Advocates" />

            <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
                <div className="w-full max-w-md">

                    {/* Logo */}
                    <div className="text-center mb-10">
                        <img src="/Logo/trill_logo.png" alt="Trill & Associates Advocates" className="h-16 mx-auto mb-4 object-contain" />
                        <p className="text-gray-400 text-sm">Admin Portal</p>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-sm shadow-2xl p-8">
                        <div className="mb-6">
                            <h1 className="font-serif text-navy-950 text-2xl font-bold">Sign In</h1>
                            <p className="text-gray-500 text-sm mt-1">Access the content management panel</p>
                        </div>

                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="admin@trill.co.tz"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="••••••••"
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={e => setData('remember', e.target.checked)}
                                    className="w-4 h-4 accent-gold-500"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-navy-950 hover:bg-navy-900 disabled:opacity-60 text-white font-semibold py-3 rounded-sm transition-colors text-sm uppercase tracking-wide"
                            >
                                {processing ? 'Signing in…' : 'Sign In'}
                            </button>
                        </form>
                    </div>

                    <p className="text-center text-gray-600 text-xs mt-6">
                        &copy; {new Date().getFullYear()} Trill &amp; Associates Advocates
                    </p>
                </div>
            </div>
        </>
    )
}
