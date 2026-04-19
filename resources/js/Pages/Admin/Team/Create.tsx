import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import TeamForm from './TeamForm'

export default function TeamCreate() {
    const { data, setData, post, processing, errors } = useForm<{
        name:           string
        role:           string
        bio:            string
        avatar_url:     string
        avatar_file:    File | null
        initials:       string
        email:          string
        languages:      string
        practice_areas: string
        education:      string
        memberships:    string
        sort_order:     string
        is_active:      boolean
        [key: string]:  string | boolean | File | null
    }>({
        name:           '',
        role:           '',
        bio:            '',
        avatar_url:     '',
        avatar_file:    null,
        initials:       '',
        email:          '',
        languages:      '',
        practice_areas: '',
        education:      '',
        memberships:    '',
        sort_order:     '0',
        is_active:      true,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/team', { forceFormData: true })
    }

    return (
        <AdminLayout title="Add Team Member">
            <Head title="Add Team Member — Admin" />
            <form onSubmit={submit}>
                <TeamForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    submitLabel="Add Member"
                    cancelHref="/admin/team"
                />
            </form>
        </AdminLayout>
    )
}
