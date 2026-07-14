import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import SectorForm, { SectorFormData } from './SectorForm'

interface Sector extends Omit<SectorFormData, 'image_file' | 'sort_order'> {
    id: string
    sort_order: number
}

export default function EditSector({ sector }: { sector: Sector }) {
    const { data, setData, post, processing, errors } = useForm<SectorFormData & { _method: string }>({
        _method: 'PUT',
        title: sector.title, slug: sector.slug, tagline: sector.tagline ?? '', intro: sector.intro ?? '',
        image_url: sector.image_url ?? '', image_file: null, tags: sector.tags ?? '',
        challenges: sector.challenges ?? '', services: sector.services ?? '', relevant_areas: sector.relevant_areas ?? '',
        sort_order: String(sector.sort_order), is_active: sector.is_active,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/sectors/${sector.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title={`Edit: ${sector.title}`}>
            <Head title="Edit Sector - Admin" />
            <form onSubmit={submit}>
                <SectorForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Update Sector" cancelHref="/admin/sectors" currentImage={sector.image_url} />
            </form>
        </AdminLayout>
    )
}
