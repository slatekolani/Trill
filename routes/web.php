<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ── PUBLIC ROUTES ─────────────────────────────────────────────────────────────

use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\Public\InsightsController;
use App\Http\Controllers\Public\TeamController;
use App\Http\Controllers\Public\ContactController;
use App\Http\Controllers\Public\BookConsultationController;
use App\Http\Controllers\Public\MembershipController as PublicMembershipController;
use App\Http\Controllers\Public\PracticeAreaController as PublicPracticeAreaController;
use App\Http\Controllers\Public\SectorController as PublicSectorController;
use App\Models\Membership;

Route::get('/',                    [HomeController::class,     'index'])->name('home');
Route::get('/about',               fn () => Inertia::render('About', [
    'memberships' => Membership::active()
        ->orderBy('sort_order')
        ->get(['uuid', 'name', 'acronym', 'description', 'url', 'logo_url'])
        ->map(fn ($membership) => [
            'id'          => $membership->uuid,
            'name'        => $membership->name,
            'acronym'     => $membership->acronym,
            'description' => $membership->description,
            'url'         => $membership->url,
            'logo_url'    => $membership->logo_url,
        ]),
]))->name('about');
Route::get('/contact',             fn () => Inertia::render('Contact'))->name('contact');
Route::post('/contact',            [ContactController::class,          'send'])->name('contact.send');
Route::get('/book-consultation',   fn () => Inertia::render('BookConsultation'))->name('book-consultation');
Route::post('/book-consultation',  [BookConsultationController::class, 'send'])->name('consultation.send');
Route::get('/practice-areas',      [PublicPracticeAreaController::class, 'index'])->name('practice-areas');
Route::get('/sectors',             [PublicSectorController::class, 'index'])->name('sectors');
Route::get('/memberships',         [PublicMembershipController::class, 'index'])->name('memberships');

Route::get('/practice-areas/{slug}', [PublicPracticeAreaController::class, 'show'])->name('practice-area');
Route::get('/sectors/{slug}',        [PublicSectorController::class, 'show'])->name('sector');

Route::get('/team',                [TeamController::class,     'index'])->name('team');
Route::get('/team/{teamMember}',   [TeamController::class,     'show'])->name('team.member');
Route::get('/insights',            [InsightsController::class, 'index'])->name('insights');
Route::get('/insights/{slug}',     [InsightsController::class, 'show'])->name('insight');

// ── ADMIN ROUTES ──────────────────────────────────────────────────────────────

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\TeamMemberController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HeroSlideController;
use App\Http\Controllers\Admin\PracticeAreaController;
use App\Http\Controllers\Admin\ContentBlockController;
use App\Http\Controllers\Admin\SectorController;
use App\Http\Controllers\Admin\MembershipController;
use App\Http\Controllers\Admin\ProfileController;

// Auth (guest)
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login',  [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout',[AuthController::class, 'logout'])->name('logout');
});

// Protected admin panel
Route::prefix('admin')->name('admin.')->middleware('admin')->group(function () {
    Route::get('/',  [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Articles
    Route::get('/articles',                 [ArticleController::class, 'index'])->name('articles.index');
    Route::get('/articles/create',          [ArticleController::class, 'create'])->name('articles.create');
    Route::post('/articles',                [ArticleController::class, 'store'])->name('articles.store');
    Route::get('/articles/{article}/edit',  [ArticleController::class, 'edit'])->name('articles.edit');
    Route::put('/articles/{article}',       [ArticleController::class, 'update'])->name('articles.update');
    Route::delete('/articles/{article}',    [ArticleController::class, 'destroy'])->name('articles.destroy');

    // Team members
    Route::get('/team',                          [TeamMemberController::class, 'index'])->name('team.index');
    Route::get('/team/create',                   [TeamMemberController::class, 'create'])->name('team.create');
    Route::post('/team',                         [TeamMemberController::class, 'store'])->name('team.store');
    Route::get('/team/{teamMember}/edit',        [TeamMemberController::class, 'edit'])->name('team.edit');
    Route::put('/team/{teamMember}',             [TeamMemberController::class, 'update'])->name('team.update');
    Route::delete('/team/{teamMember}',          [TeamMemberController::class, 'destroy'])->name('team.destroy');

    // Hero slides
    Route::get('/hero-slides',                  [HeroSlideController::class, 'index'])->name('hero-slides.index');
    Route::get('/hero-slides/create',           [HeroSlideController::class, 'create'])->name('hero-slides.create');
    Route::post('/hero-slides',                 [HeroSlideController::class, 'store'])->name('hero-slides.store');
    Route::get('/hero-slides/{heroSlide}/edit', [HeroSlideController::class, 'edit'])->name('hero-slides.edit');
    Route::put('/hero-slides/{heroSlide}',      [HeroSlideController::class, 'update'])->name('hero-slides.update');
    Route::delete('/hero-slides/{heroSlide}',   [HeroSlideController::class, 'destroy'])->name('hero-slides.destroy');

    // Practice areas
    Route::get('/practice-areas',                       [PracticeAreaController::class, 'index'])->name('practice-areas.index');
    Route::get('/practice-areas/create',                [PracticeAreaController::class, 'create'])->name('practice-areas.create');
    Route::post('/practice-areas',                      [PracticeAreaController::class, 'store'])->name('practice-areas.store');
    Route::get('/practice-areas/{practiceArea}/edit',   [PracticeAreaController::class, 'edit'])->name('practice-areas.edit');
    Route::put('/practice-areas/{practiceArea}',        [PracticeAreaController::class, 'update'])->name('practice-areas.update');
    Route::delete('/practice-areas/{practiceArea}',     [PracticeAreaController::class, 'destroy'])->name('practice-areas.destroy');

    // Sectors
    Route::get('/sectors',                  [SectorController::class, 'index'])->name('sectors.index');
    Route::get('/sectors/create',           [SectorController::class, 'create'])->name('sectors.create');
    Route::post('/sectors',                 [SectorController::class, 'store'])->name('sectors.store');
    Route::get('/sectors/{sector}/edit',    [SectorController::class, 'edit'])->name('sectors.edit');
    Route::put('/sectors/{sector}',         [SectorController::class, 'update'])->name('sectors.update');
    Route::delete('/sectors/{sector}',      [SectorController::class, 'destroy'])->name('sectors.destroy');

    // Memberships & affiliations
    Route::get('/memberships',                    [MembershipController::class, 'index'])->name('memberships.index');
    Route::get('/memberships/create',             [MembershipController::class, 'create'])->name('memberships.create');
    Route::post('/memberships',                   [MembershipController::class, 'store'])->name('memberships.store');
    Route::get('/memberships/{membership}/edit',  [MembershipController::class, 'edit'])->name('memberships.edit');
    Route::put('/memberships/{membership}',       [MembershipController::class, 'update'])->name('memberships.update');
    Route::delete('/memberships/{membership}',    [MembershipController::class, 'destroy'])->name('memberships.destroy');

    // Editable copy blocks
    Route::get('/content-blocks',                       [ContentBlockController::class, 'index'])->name('content-blocks.index');
    Route::get('/content-blocks/{contentBlock}/edit',   [ContentBlockController::class, 'edit'])->name('content-blocks.edit');
    Route::put('/content-blocks/{contentBlock}',        [ContentBlockController::class, 'update'])->name('content-blocks.update');

    // Categories
    Route::get('/categories',                    [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/create',             [CategoryController::class, 'create'])->name('categories.create');
    Route::post('/categories',                   [CategoryController::class, 'store'])->name('categories.store');
    Route::get('/categories/{category}/edit',    [CategoryController::class, 'edit'])->name('categories.edit');
    Route::put('/categories/{category}',         [CategoryController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{category}',      [CategoryController::class, 'destroy'])->name('categories.destroy');
});
