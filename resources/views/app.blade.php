<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Trill & Associates Advocates – One of Tanzania's top law firms based in Dar-es-Salaam, providing exceptional legal services inland and around the globe." />
    <title inertia>Trill & Associates Advocates</title>

    {{-- Favicons --}}
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16"  href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32"  href="/favicon/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180"     href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#1C0A00">
    <meta name="msapplication-TileImage" content="/favicon/android-chrome-192x192.png">

    {{-- Base Open Graph (overridden per-page by Seo component) --}}
    <meta property="og:site_name" content="Trill &amp; Associates Advocates" />
    <meta property="og:locale" content="en_TZ" />
    <meta name="twitter:card" content="summary_large_image" />

    {{-- Organization + LegalService JSON-LD (GEO: present on every page) --}}
    <script type="application/ld+json">{!! json_encode([
        '@context'      => 'https://schema.org',
        '@type'         => ['LegalService', 'Organization'],
        '@id'           => config('app.url') . '/#organization',
        'name'          => 'Trill & Associates Advocates',
        'alternateName' => 'Trill Law',
        'url'           => config('app.url'),
        'logo'          => config('app.url') . '/Logo/trill_logo.png',
        'image'         => config('app.url') . '/Logo/trill_logo.png',
        'description'   => 'One of Tanzania\'s leading law firms, based in Dar-es-Salaam, providing expert legal services in corporate law, dispute resolution, real estate, intellectual property, employment law, and more.',
        'address'       => [
            '@type'           => 'PostalAddress',
            'addressLocality' => 'Dar-es-Salaam',
            'addressCountry'  => 'TZ',
        ],
        'areaServed'    => ['Tanzania', 'East Africa'],
        'knowsLanguage' => ['English', 'Swahili'],
        'sameAs'        => [],
        'hasOfferCatalog' => [
            '@type' => 'OfferCatalog',
            'name'  => 'Legal Services',
            'itemListElement' => [
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Corporate & Commercial Law']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Dispute Resolution']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Real Estate & Conveyancing']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Intellectual Property']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Employment & Labour Law']],
            ],
        ],
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}</script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="bg-white text-gray-800">
    @inertia
</body>
</html>
