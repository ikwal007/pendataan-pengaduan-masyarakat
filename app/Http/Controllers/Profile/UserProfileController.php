<?php

namespace App\Http\Controllers\Profile;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Seksi;
use App\Models\Pemohon;
use App\Models\Penanganan;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Requests\Profile\UpdateProfileRequest;

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
        $pemohon = new Pemohon();
        $user = new User();
        $penanganan = new Penanganan();
        $auth = auth()->user();

        $dataForStats = (object) array();
        $dataForDetail = $user->getDetailDataUser($id);


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

        return Inertia::render('Profile/Edit', compact(['dataForStats', 'dataForDetail']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfileRequest $request, string $id)
    {
        $user = new User();
        $findUser = $user->getDetailDataUser($id);

        $perubahan = false;

        if ($request->nama != $findUser->nama) {
            $findUser->nama = $request->nama;
            $perubahan = true;
        }

        if ($request->email != $findUser->email) {
            $findUser->email = $request->email;
            $perubahan = true;
        }

        if ($request->nik != $findUser->nik) {
            $findUser->nik = $request->nik;
            $perubahan = true;
        }

        if ($request->hasFile('gambar')) {
            if ($findUser->gambar != null) {
                File::delete(public_path($findUser->gambar));
            }
            $gambar = $request->file('gambar');
            $patch = 'upload/profile/';
            $slug = Str::slug($gambar->getClientOriginalName());
            $newGambar = time() . '-' . $slug . '.' . $gambar->getClientOriginalExtension();
            $gambar->move(public_path($patch), $newGambar);
            $findUser->gambar = $patch . $newGambar;
            $perubahan = true;
        }

        if ($perubahan) {
            $findUser->save();
        }

        return to_route('profile.index', $id)->with('message', 'Profile Berhasil Diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
