<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ── PUBLIC ROUTES ─────────────────────────────────────────────────────────────

use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\Public\InsightsController;
use App\Http\Controllers\Public\TeamController;
use App\Http\Controllers\Public\ContactController;
use App\Http\Controllers\Public\BookConsultationController;

Route::get('/',                    [HomeController::class,     'index'])->name('home');
Route::get('/about',               fn () => Inertia::render('About'))->name('about');
Route::get('/contact',             fn () => Inertia::render('Contact'))->name('contact');
Route::post('/contact',            [ContactController::class,          'send'])->name('contact.send');
Route::get('/book-consultation',   fn () => Inertia::render('BookConsultation'))->name('book-consultation');
Route::post('/book-consultation',  [BookConsultationController::class, 'send'])->name('consultation.send');
Route::get('/practice-areas',      fn () => Inertia::render('PracticeAreas'))->name('practice-areas');
Route::get('/sectors',             fn () => Inertia::render('Sectors'))->name('sectors');

Route::get('/practice-areas/{slug}', fn (string $slug) => Inertia::render('PracticeArea', ['slug' => $slug]))->name('practice-area');
Route::get('/sectors/{slug}',        fn (string $slug) => Inertia::render('Sector',       ['slug' => $slug]))->name('sector');

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

// Auth (guest)
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login',  [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout',[AuthController::class, 'logout'])->name('logout');
});

// Protected admin panel
Route::prefix('admin')->name('admin.')->middleware('admin')->group(function () {
    Route::get('/',  [DashboardController::class, 'index'])->name('dashboard');

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

    // Categories
    Route::get('/categories',                    [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/create',             [CategoryController::class, 'create'])->name('categories.create');
    Route::post('/categories',                   [CategoryController::class, 'store'])->name('categories.store');
    Route::get('/categories/{category}/edit',    [CategoryController::class, 'edit'])->name('categories.edit');
    Route::put('/categories/{category}',         [CategoryController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{category}',      [CategoryController::class, 'destroy'])->name('categories.destroy');
});
