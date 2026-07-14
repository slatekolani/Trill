import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import PracticeAreaForm, { PracticeAreaFormData } from './PracticeAreaForm'

interface Area extends Omit<PracticeAreaFormData, 'image_file' | 'sort_order'> {
    id: string
    sort_order: number
}

export default function EditPracticeArea({ area }: { area: Area }) {
    const { data, setData, post, processing, errors } = useForm<PracticeAreaFormData & { _method: string }>({
        _method: 'PUT',
        title: area.title, slug: area.slug, tagline: area.tagline ?? '', summary: area.summary ?? '',
        intro: area.intro ?? '', image_url: area.image_url ?? '', image_file: null,
        services: area.services ?? '', client_needs: area.client_needs ?? '', why_trill: area.why_trill ?? '',
        related_areas: area.related_areas ?? '', sort_order: String(area.sort_order),
        show_in_nav: area.show_in_nav, is_active: area.is_active,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/practice-areas/${area.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title={`Edit: ${area.title}`}>
            <Head title="Edit Practice Area - Admin" />
            <form onSubmit={submit}>
                <PracticeAreaForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Update Area" cancelHref="/admin/practice-areas" currentImage={area.image_url} />
            </form>
        </AdminLayout>
    )
}
