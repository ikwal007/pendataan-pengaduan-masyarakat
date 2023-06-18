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
        $jenisMediaPengaduan = JenisMediaPengaduan::all();
        $jenisSertifikat = JenisSertifikat::all();
        $semuaJenisPengaduan = JenisPengaduan::all();

        $pemohon = new Pemohon();
        $dataForTable = $pemohon->getAllPemohonans(5);
        $dataForStats = $pemohon->getCountAllPemohons();

        $pengecualianJenisPengaduan = JenisPengaduan::where('jenis_pengaduan', 'pelanggaran disiplin Pegawai Negeri Sipil')->first();
        $seksi = Seksi::all();
        $jenisPengaduan = (object) [
            'pengecualianJenisPengaduan' => $pengecualianJenisPengaduan,
            'semuaJenisPengaduan' => $semuaJenisPengaduan
        ];
        $kecamatan = [];

        foreach (Kecamatan::all() as &$value) {
            $data = $value;
            $data->desa = Kecamatan::where('id', $data->id)->first()->desa;
            $kecamatan[] = $data;
        }

        return Inertia::render(
            'PelayananPublik/CreatePemohon',
            compact(['kecamatan', 'jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'seksi', 'dataForTable', 'dataForStats'])

        );
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
