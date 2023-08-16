<?php

namespace App\Http\Controllers\Masyarakat;

use App\Http\Controllers\Controller;
use App\Http\Requests\PelayanaPublik\StorePemohonanRequest;
use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon;
use App\Models\Seksi;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
        $dataForTableByStatusPending = $pemohon->findPemohonByStatus($auth->nik, 'pending');
        $dataForTableByStatusProsesing = $pemohon->findPemohonByStatus($auth->nik, 'prosesing');
        $dataForTableByStatusFinis = $pemohon->findPemohonByStatus($auth->nik, 'finis');

        return Inertia::render('Masyarakat/Dashboard', compact(['dataForTable', 'dataForStats', 'dataForTableByStatusPending', 'dataForTableByStatusProsesing', 'dataForTableByStatusFinis']));
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
        $jenisMediaPengaduan = $jenisMediaPengaduan->allJenisMediaPengaduan('langsung');

        $jenisSertifikat = new JenisSertifikat();
        $allJenisSertifikat = $jenisSertifikat->allJenisSertifikat();

        $jenisPengaduan = new JenisPengaduan();
        $allJenisPengaduanAndException = $jenisPengaduan->allJenisPengaduanAndException();

        $seksi = new Seksi();
        $allSeksi = $seksi->getSeksiAll();

        $kecamatan = new Kecamatan();
        $allKecamatan = $kecamatan->getAllKecamatanWiteDesa();

        return Inertia::render('Masyarakat/CreatePemohon', compact(['dataForStats', 'allKecamatan', 'allSeksi', 'allJenisPengaduanAndException', 'jenisMediaPengaduan', 'allJenisSertifikat']));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePemohonanRequest $request)
    {
        $status = new Status();
        $jenisPengaduan = new JenisPengaduan();
        $findJenisPengaduan = $jenisPengaduan->allJenisPengaduanAndException();

        $pemohon = new Pemohon();
        $pemohon->id = (string) Str::ulid();
        $pemohon->jenis_pengaduan_id = $request->jenis_pengaduan;
        $pemohon->jenis_media_pengaduan_id = $request->jenis_media_pengaduan;
        $pemohon->nama_pemohon = $request->nama_pemohon;
        $pemohon->nik = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->no_nik;
        $pemohon->no_telpon = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->no_telpon;
        $pemohon->no_hak = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->no_hak;
        $pemohon->jenis_sertifikat_id = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->jenis_sertifikat;
        $pemohon->keterangan_pengaduan_pemohon = $request->keterangan_laporan_pengaduan;
        $pemohon->kecamatan_id = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->kecamatan;
        $pemohon->desa_id = $findJenisPengaduan->pengecualianJenisPengaduan->id === $request->jenis_pengaduan ? null : $request->desa;
        $pemohon->status_id = $status->getIdStatusDefault();
        $pemohon->save();
        
        return redirect('/masyarakat/dashboard')->with('message', 'Create Data Success');
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
