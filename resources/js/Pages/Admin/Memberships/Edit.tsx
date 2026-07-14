import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import MembershipForm, { MembershipFormData } from './MembershipForm'

interface Membership {
    id: string
    name: string
    acronym: string | null
    description: string | null
    url: string | null
    logo_url: string | null
    sort_order: number
    is_active: boolean
}

export default function EditMembership({ membership }: { membership: Membership }) {
    const { data, setData, post, processing, errors } = useForm<MembershipFormData & { _method: string }>({
        _method: 'PUT',
        name: membership.name,
        acronym: membership.acronym ?? '',
        description: membership.description ?? '',
        url: membership.url ?? '',
        logo_url: membership.logo_url ?? '',
        logo_file: null,
        sort_order: String(membership.sort_order ?? 0),
        is_active: membership.is_active,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/memberships/${membership.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title="Edit Membership">
            <Head title="Edit Membership - Admin" />
            <form onSubmit={submit}>
                <MembershipForm data={data} setData={setData} errors={errors} processing={processing} submitLabel="Save" currentLogo={membership.logo_url} />
            </form>
        </AdminLayout>
    )
}
