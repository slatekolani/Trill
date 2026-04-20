import { Head, usePage } from '@inertiajs/react'

interface SeoProps {
    title: string
    description: string
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
    noIndex?: boolean
    jsonLd?: object | object[]
}

interface PageProps {
    appUrl: string
    currentUrl: string
    flash: { success?: string; error?: string }
    [key: string]: unknown
}

export default function Seo({ title, description, image, url, type = 'website', noIndex, jsonLd }: SeoProps) {
    const { appUrl, currentUrl } = usePage<PageProps>().props
    const resolvedUrl   = url   ?? currentUrl
    const resolvedImage = image ?? `${appUrl}/Logo/trill_logo.png`
    const schemas       = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

    return (
        <Head title={title}>
            <meta head-key="description"         name="description"         content={description} />
            <link head-key="canonical"           rel="canonical"            href={resolvedUrl} />

            {/* Open Graph */}
            <meta head-key="og:type"             property="og:type"         content={type} />
            <meta head-key="og:title"            property="og:title"        content={title} />
            <meta head-key="og:description"      property="og:description"  content={description} />
            <meta head-key="og:url"              property="og:url"          content={resolvedUrl} />
            <meta head-key="og:image"            property="og:image"        content={resolvedImage} />

            {/* Twitter Card */}
            <meta head-key="twitter:title"       name="twitter:title"       content={title} />
            <meta head-key="twitter:description" name="twitter:description" content={description} />
            <meta head-key="twitter:image"       name="twitter:image"       content={resolvedImage} />

            {noIndex && <meta head-key="robots" name="robots" content="noindex, nofollow" />}

            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Head>
    )
}
