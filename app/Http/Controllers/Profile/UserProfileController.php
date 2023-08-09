<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Pemohon;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pemohon = new Pemohon();
        $user = new User();
        $penanganan = new Penanganan();
        $auth = auth()->user();

        $dataForStats = (object) array();


        if ($user->getUserRole($auth->id) == 'Super_Admin') {
            $dataForStats = $user->getAllUserInfoCount();
        }

        if ($user->getUserRole($auth->id) == 'Pelayanan_Publik') {
            $dataForStats = $pemohon->getCountAllPemohons();
        }

        if ($user->getUserRole($auth->id) == 'Seksi') {
            $seksi = new Seksi();
            $findSeksi = $seksi->findSeksi($user);
            $dataForStats = $penanganan->getCountAllPenanganan($findSeksi->id);
        }

        if ($user->getUserRole($auth->id) == 'Masyarakat') {
            $dataForStats = $pemohon->getCountAllPemohons($auth->nik);
        }

        return Inertia::render('Profile/Show', compact(['dataForStats']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
