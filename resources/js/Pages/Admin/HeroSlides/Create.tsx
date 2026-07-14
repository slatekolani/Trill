import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import HeroSlideForm, { HeroSlideFormData } from './HeroSlideForm'

export default function CreateHeroSlide() {
    const { data, setData, post, processing, errors } = useForm<HeroSlideFormData>({
        badge: '', title: '', description: '', image_url: '', image_file: null,
        cta_label: '', cta_href: '', sort_order: '0', is_active: true,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/hero-slides', { forceFormData: true })
    }

    return (
        <AdminLayout title="Add Hero Slide">
            <Head title="Add Hero Slide - Admin" />
            <form onSubmit={submit}>
                <HeroSlideForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Add Slide" cancelHref="/admin/hero-slides" />
            </form>
        </AdminLayout>
    )
}
