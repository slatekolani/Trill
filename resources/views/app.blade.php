<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Trill & Associates Advocates – One of Tanzania's top law firms based in Dar-es-Salaam, providing exceptional legal services inland and around the globe." />
    <title inertia>Trill & Associates Advocates</title>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="bg-white text-gray-800">
    @inertia
</body>
</html>
