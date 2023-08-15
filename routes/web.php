<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Masyarakat\DashboardController as MasyarakatDashboardController;
use App\Http\Controllers\Pelayanan\DashboardController as PelayananDashboardController;
use App\Http\Controllers\Pelayanan\PeninjauPemohonController;
use App\Http\Controllers\PemohonController;
use App\Http\Controllers\Profile\UserProfileController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Seksi\DashboardController as SeksiDashboardController;
use App\Http\Controllers\SuperAdmin\ChatWhatsappController;
use App\Http\Controllers\SuperAdmin\DashboardController as SuperAdminDashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth'])->group(function () {
    // profile
    Route::prefix('profile')->group(function () {
        Route::controller(UserProfileController::class)->group(function() {
            Route::get('/{id}', 'show')->name('profile.index');
            Route::get('/{id}/edit', 'edit')->name('profile.edit');
            Route::post('/{id}', 'update')->name('profile.update');
        });
    });

    // for super_admin
    Route::middleware(['role:Super_Admin'])->group(function () {
        Route::prefix('super-admin')->group(function () {
            Route::controller(SuperAdminDashboardController::class)->group(function () {
                Route::get('/dashboard', 'index')->name('super-admin.index');
                Route::get('/edit-user/{id}', 'edit')->name('super-admin.edit');
                Route::patch('/update-password/{id}', 'update')->name('super-admin.update');
            });
            Route::controller(ChatWhatsappController::class)->group(function () {
                Route::get('/status/whatsapp', 'index')->name('super-admin.whatsapp-index');
            });
        });
    });

    // for pelayanan
    Route::middleware(['role:Pelayanan_Publik'])->group(function () {
        Route::prefix('pelayanan-publik')->group(function () {
            Route::controller(PelayananDashboardController::class)->group(function () {
                Route::get('/dashboard', 'index')->name('pelayanan-publik.index');
                Route::get('/show-detail/{id}', 'show')->name('pelayanan-publik.show');
                Route::get('/create-permohonan', 'create')->name('pelayanan-publik.create');
                Route::post('/create-permohonan', 'store')->name('pelayanan-publik.store');
            });
            Route::controller(PeninjauPemohonController::class)->group(function () {
                Route::get('/peninjauan-pemohon', 'index')->name('pelayanan-publik.peninjauan-pemohon');
                Route::get('/peninjauan-pemohon/{id}', 'edit')->name('pelayanan-publik.peninjauan-pemohon-edit');
                Route::patch('/peninjauan-pemohon/{id}', 'update')->name('pelayanan-publik.peninjauan-pemohon-update');
            });
        });
    });

    // for seksi
    Route::middleware(['role:Seksi'])->group(function () {
        Route::prefix('seksi')->group(function () {
            Route::controller(SeksiDashboardController::class)->group(function () {
                Route::get('/dashboard', 'index')->name('seksi.index');
                Route::get('/edit-pemohonan/{seksiId}/{penangananId}', 'edit')->name('seksi.edit');
                Route::patch('/edit-pemohonan/{penangananId}', 'update')->name('seksi.update');
            });
        });
    });

    // for masyarakat
    Route::middleware(['role:Masyarakat'])->group(function () {
        Route::prefix('masyarakat')->group(function () {
            Route::controller(MasyarakatDashboardController::class)->group(function () {
                Route::get('/dashboard', 'index')->name('masyarakat.index');
                Route::get('/show-detail/{id}', 'show')->name('masyarakat.show');
                Route::get('/create', 'create')->name('masyarakat.create');
                Route::post('/create', 'store')->name('masyarakat.store');
            });
        });
    });
});

require __DIR__ . '/auth.php';
