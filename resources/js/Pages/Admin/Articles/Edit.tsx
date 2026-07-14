import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import ArticleForm from './ArticleForm'

interface Category { id: string; name: string }
interface ArticleData {
    id:           string
    title:        string
    category_id:  string
    author:       string
    author_role:  string
    excerpt:      string
    content:      string
    hero_img:     string
    read_time:    string
    is_featured:  boolean
    is_published: boolean
}

interface Props {
    article:    ArticleData
    categories: Category[]
}

export default function ArticleEdit({ article, categories }: Props) {
    const { data, setData, post, processing, errors } = useForm<{
        _method:      string
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
        _method:      'PUT',
        title:        article.title,
        category_id:  String(article.category_id),
        author:       article.author,
        author_role:  article.author_role ?? '',
        excerpt:      article.excerpt,
        content:      article.content,
        hero_img:     article.hero_img ?? '',
        hero_file:    null,
        read_time:    article.read_time,
        is_featured:  article.is_featured,
        is_published: article.is_published,
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(`/admin/articles/${article.id}`, { forceFormData: true })
    }

    return (
        <AdminLayout title="Edit Article">
            <Head title={`Edit: ${article.title} — Admin`} />
            <form onSubmit={submit}>
                <ArticleForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    categories={categories}
                    submitLabel="Update Article"
                    cancelHref="/admin/articles"
                    currentHeroImg={article.hero_img || null}
                />
            </form>
        </AdminLayout>
    )
}
