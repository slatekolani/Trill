import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import SectorForm, { SectorFormData } from './SectorForm'

export default function CreateSector() {
    const { data, setData, post, processing, errors } = useForm<SectorFormData>({
        title: '', slug: '', tagline: '', intro: '', image_url: '', image_file: null,
        tags: '', challenges: '', services: '', relevant_areas: '', sort_order: '0', is_active: true,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/sectors', { forceFormData: true })
    }

    return (
        <AdminLayout title="Add Sector">
            <Head title="Add Sector - Admin" />
            <form onSubmit={submit}>
                <SectorForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Add Sector" cancelHref="/admin/sectors" />
            </form>
        </AdminLayout>
    )
}
