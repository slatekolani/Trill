<?php

namespace App\Http\Middleware;

use App\Models\ContentBlock;
use App\Models\PracticeArea;
use App\Models\Sector;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        return [
            ...parent::share($request),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error'   => fn () => $request->session()->get('error'),
            ],
            'auth' => [
                'canAccessDashboard' => (bool) ($user?->is_admin),
                'user' => $user ? [
                    'id' => $user->uuid,
                    'name' => $user->name,
                    'email' => $user->email,
                    'is_admin' => (bool) $user->is_admin,
                ] : null,
            ],
            'appUrl'     => config('app.url'),
            'currentUrl' => $request->url(),
            'contentBlocks' => fn () => ContentBlock::query()
                ->pluck('value', 'key')
                ->toArray(),
            'navPracticeAreas' => fn () => PracticeArea::active()
                ->where('show_in_nav', true)
                ->orderBy('sort_order')
                ->get(['title', 'slug', 'summary', 'image_url'])
                ->map(fn ($area) => [
                    'label'       => $area->title,
                    'href'        => '/practice-areas/' . $area->slug,
                    'description' => $area->summary,
                    'image_url'   => $this->imageUrl($area->image_url),
                    'img'         => $this->imageUrl($area->image_url),
                ]),
            'navSectors' => fn () => Sector::active()
                ->orderBy('sort_order')
                ->get(['title', 'slug', 'tagline', 'image_url'])
                ->map(fn ($sector) => [
                    'label'       => $sector->title,
                    'href'        => '/sectors/' . $sector->slug,
                    'description' => $sector->tagline,
                    'image_url'   => $this->imageUrl($sector->image_url),
                    'img'         => $this->imageUrl($sector->image_url),
                ]),
        ];
    }

    private function imageUrl(?string $url): ?string
    {
        $value = trim((string) $url);

        if ($value === '') {
            return null;
        }

        if (preg_match('/^(https?:)?\/\//', $value) || str_starts_with($value, 'data:')) {
            return $value;
        }

        $value = str_replace('\\', '/', $value);
        $value = preg_replace('#^public/#', '', $value);
        $value = preg_replace('#^\./#', '', $value);

        return '/' . ltrim($value, '/');
    }
}
