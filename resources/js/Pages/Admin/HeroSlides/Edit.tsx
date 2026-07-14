import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import HeroSlideForm, { HeroSlideFormData } from './HeroSlideForm'

interface Slide {
    id: string; badge: string | null; title: string; description: string | null
    image_url: string | null; cta_label: string | null; cta_href: string | null
    sort_order: number; is_active: boolean
}

export default function EditHeroSlide({ slide }: { slide: Slide }) {
    const { data, setData, post, processing, errors } = useForm<HeroSlideFormData & { _method: string }>({
        _method: 'PUT',
        badge: slide.badge ?? '', title: slide.title, description: slide.description ?? '',
        image_url: slide.image_url ?? '', image_file: null, cta_label: slide.cta_label ?? '',
        cta_href: slide.cta_href ?? '', sort_order: String(slide.sort_order), is_active: slide.is_active,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/hero-slides/${slide.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title={`Edit: ${slide.title}`}>
            <Head title="Edit Hero Slide - Admin" />
            <form onSubmit={submit}>
                <HeroSlideForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Update Slide" cancelHref="/admin/hero-slides" currentImage={slide.image_url} />
            </form>
        </AdminLayout>
    )
}
