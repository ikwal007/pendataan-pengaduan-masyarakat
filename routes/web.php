<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Masyarakat\DashboardController as MasyarakatDashboardController;
use App\Http\Controllers\Pelayanan\DashboardController as PelayananDashboardController;
use App\Http\Controllers\PemohonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Seksi\DashboardController as SeksiDashboardController;
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
    // for super_admin
    Route::middleware(['role:Super_Admin'])->group(function () {
        Route::prefix('super-admin')->group(function () {
            Route::controller(SuperAdminDashboardController::class)->group(function () {
                Route::get('/dashboard', 'index')->name('super-admin.index');
                Route::get('/edit-user/{id}', 'edit')->name('super-admin.edit');
                Route::patch('/update-password/{id}', 'update')->name('super-admin.update');
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
            });
        });
    });
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard/{id}', [DashboardController::class, 'show']);


Route::get('/admin/pemohon', [PemohonController::class, 'index'])->name('admin.pemohon')->middleware(['auth', 'verified', 'role:Super_Admin']);
Route::post('/admin/pemohon', [PemohonController::class, 'store'])->name('admin.pemohon')->middleware(['auth', 'verified', 'role:Super_Admin']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
