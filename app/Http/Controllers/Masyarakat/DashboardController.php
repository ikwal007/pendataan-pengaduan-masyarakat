<?php

namespace App\Http\Controllers\Masyarakat;

use App\Http\Controllers\Controller;
use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon;
use App\Models\Seksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = Auth()->user();
        $pemohon = new Pemohon();
        $dataForTable = $pemohon->getAllPemohonans(5, $auth->nik);
        $dataForStats = $pemohon->getCountAllPemohons($auth->nik);

        return Inertia::render('Masyarakat/Dashboard', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = Auth()->user();
        $pemohon = new Pemohon();
        $dataForStats = $pemohon->getCountAllPemohons($auth->nik);

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

        return Inertia::render('Masyarakat/CreatePemohon', compact(['dataForStats', 'allKecamatan', 'allSeksi', 'allJenisPengaduanAndException', 'allJenisMediaPengaduan', 'allJenisSertifikat']));
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
        $auth = Auth()->user();
        $pemohon = new Pemohon();
        $dataForShowDetail = $pemohon->getShowDetails($id);
        $dataForStats = $pemohon->getCountAllPemohons($auth->nik);

        return Inertia::render('Masyarakat/ShowDetailPage', compact(['dataForShowDetail', 'dataForStats']));
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
