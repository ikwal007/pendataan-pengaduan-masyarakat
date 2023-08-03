<?php

use App\Http\Controllers\Pelayanan\CountController;
use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pemohons/search', [SearchController::class, 'searchPemohon']);
Route::get('/pemohons/belum-terhubung-penanganan', [SearchController::class, 'searchPemohonPeninjau']);
Route::get('/penanganan/search', [SearchController::class, 'searchPenanganan']);
Route::get('/user/search', [SearchController::class, 'searchUser']);
Route::get('/count/peninjauan-pemohon', [CountController::class, 'notifPeninjauanPemohon']);
