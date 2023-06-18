<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Role;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $role = new Role();
        $isSuperAdmin = $role->isSuperAdmin();
        $isSeksi = $role->isSeksi();
        $isMasyarakat = $role->isMasyarakat();
        $isPelayanan = $role->isPelayanan();

        $request->authenticate();
        $request->session()->regenerate();

        $auth = auth()->user();

        if ($auth->roles->first()->id === $isSuperAdmin) {
            return redirect()->intended('/super-admin/dashboard');
        }
        if ($auth->roles->first()->id === $isPelayanan) {
            return redirect()->intended('/pelayanan-publik/dashboard');
        } 
        if ($auth->roles->first()->id === $isSeksi) {
            return redirect()->intended('/seksi/dashboard');
        } 
        if ($auth->roles->first()->id === $isMasyarakat) {
            return redirect()->intended('/masyarakat/dashboard');
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
