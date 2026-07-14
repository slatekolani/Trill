import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import PracticeAreaForm, { PracticeAreaFormData } from './PracticeAreaForm'

export default function CreatePracticeArea() {
    const { data, setData, post, processing, errors } = useForm<PracticeAreaFormData>({
        title: '', slug: '', tagline: '', summary: '', intro: '', image_url: '', image_file: null,
        services: '', client_needs: '', why_trill: '', related_areas: '', sort_order: '0',
        show_in_nav: true, is_active: true,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/practice-areas', { forceFormData: true })
    }

    return (
        <AdminLayout title="Add Practice Area">
            <Head title="Add Practice Area - Admin" />
            <form onSubmit={submit}>
                <PracticeAreaForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Add Area" cancelHref="/admin/practice-areas" />
            </form>
        </AdminLayout>
    )
}
