<?php

namespace App\Http\Controllers\Pelayanan;

use App\Http\Controllers\Controller;
use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon;
use App\Models\Seksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pemohon = new Pemohon();
        $dataForTable = $pemohon->getAllPemohonans(5);
        $dataForStats = $pemohon->getCountAllPemohons();

        return Inertia::render('PelayananPublik/Dashboard', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pemohon = new Pemohon();
        $dataForStats = $pemohon->getCountAllPemohons();


        $jenisMediaPengaduan = new JenisMediaPengaduan();
        $allJenisMediaPengaduan = $jenisMediaPengaduan->allJenisMediaPengaduan();

        $jenisSertifikat = new JenisSertifikat();
        $allJenisSertifikat = $jenisSertifikat->allJenisSertifikat();

        $jenisPengaduan = new JenisPengaduan();
        $allJenisPengaduanAndException = $jenisPengaduan->allJenisPengaduanAndException();

        $seksi = new Seksi();
        $allSeksi = $seksi->getSeksiAll();

        $kecamatan = new Kecamatan();
        $allKecamatan = $kecamatan->getAllKecamatanWiteDesa();

        return Inertia::render(
            'PelayananPublik/CreatePemohon',
            compact(['allKecamatan', 'allSeksi', 'allJenisPengaduanAndException', 'allJenisMediaPengaduan', 'allJenisSertifikat', 'dataForStats'])
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
