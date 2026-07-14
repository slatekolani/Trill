import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import TeamForm from './TeamForm'

interface MemberData {
    id:             string
    name:           string
    role:           string
    bio:            string
    avatar_url:     string
    initials:       string
    email:          string
    languages:      string
    practice_areas: string
    education:      string
    memberships:    string
    sort_order:     number
    is_active:      boolean
}

interface Props { member: MemberData }

export default function TeamEdit({ member }: Props) {
    const { data, setData, post, processing, errors } = useForm<{
        _method:        string
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
        _method:        'PUT',
        name:           member.name,
        role:           member.role,
        bio:            member.bio,
        avatar_url:     member.avatar_url ?? '',
        avatar_file:    null,
        initials:       member.initials,
        email:          member.email ?? '',
        languages:      member.languages,
        practice_areas: member.practice_areas,
        education:      member.education,
        memberships:    member.memberships,
        sort_order:     String(member.sort_order),
        is_active:      member.is_active,
    })

    // File uploads require POST + _method spoofing (PUT can't carry multipart)
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/team/${member.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title={`Edit: ${member.name}`}>
            <Head title={`Edit ${member.name} — Admin`} />
            <form onSubmit={submit}>
                <TeamForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    submitLabel="Update Member"
                    cancelHref="/admin/team"
                    currentAvatar={member.avatar_url || null}
                />
            </form>
        </AdminLayout>
    )
}
