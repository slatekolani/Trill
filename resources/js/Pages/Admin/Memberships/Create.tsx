import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import MembershipForm, { MembershipFormData } from './MembershipForm'

export default function CreateMembership() {
    const { data, setData, post, processing, errors } = useForm<MembershipFormData>({
        name: '',
        acronym: '',
        description: '',
        url: '',
        logo_url: '',
        logo_file: null,
        sort_order: '0',
        is_active: true,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/memberships', { forceFormData: true })
    }

    return (
        <AdminLayout title="Add Membership">
            <Head title="Add Membership - Admin" />
            <form onSubmit={submit}>
                <MembershipForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Create" />
            </form>
        </AdminLayout>
    )
}
