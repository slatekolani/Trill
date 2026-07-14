import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import ArticleForm from './ArticleForm'

interface Category { id: string; name: string }
interface Props { categories: Category[] }

export default function ArticleCreate({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm<{
        title:        string
        category_id:  string
        author:       string
        author_role:  string
        excerpt:      string
        content:      string
        hero_img:     string
        hero_file:    File | null
        read_time:    string
        is_featured:  boolean
        is_published: boolean
        [key: string]: string | boolean | File | null
    }>({
        title:        '',
        category_id:  '',
        author:       'Trill & Associates Advocates',
        author_role:  '',
        excerpt:      '',
        content:      '',
        hero_img:     '',
        hero_file:    null,
        read_time:    '5 min read',
        is_featured:  false,
        is_published: false,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/admin/articles', { forceFormData: true })
    }

    return (
        <AdminLayout title="New Article">
            <Head title="New Article — Admin" />
            <form onSubmit={submit}>
                <ArticleForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    categories={categories}
                    submitLabel="Create Article"
                    cancelHref="/admin/articles"
                />
            </form>
        </AdminLayout>
    )
}
