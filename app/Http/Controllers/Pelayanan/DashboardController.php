<?php

namespace App\Http\Controllers\Pelayanan;

use App\Http\Controllers\Controller;
use App\Http\Requests\PelayanaPublik\StorePemohonanRequest;
use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
    public function store(StorePemohonanRequest $request)
    {
        $status = new Status();
        $seksi = new Seksi();
        $allSeksiName = $seksi->getAllNameSeksi();

        $pemohon = new Pemohon();
        $pemohon->id = (string) Str::ulid();
        $pemohon->jenis_pengaduan_id = $request->jenis_pengaduan;
        $pemohon->jenis_media_pengaduan_id = $request->jenis_media_pengaduan;
        $pemohon->nama_pemohon = $request->nama_pemohon;
        $pemohon->nik = $request->no_nik;
        $pemohon->no_hak = $request->no_hak;
        $pemohon->jenis_sertifikat_id = $request->jenis_sertifikat;
        $pemohon->keterangan_pengaduan_pemohon = $request->keterangan_laporan_pengaduan;
        $pemohon->kecamatan_id = $request->kecamatan;
        $pemohon->desa_id = $request->desa;
        $pemohon->status_id = $status->getIdStatusDefault();
        $pemohon->save();        

        foreach ($allSeksiName as $seksiKey => $seksiValue) {
            if ($request->$seksiKey === true) {
                $findIdSeksi = $seksi->findSeksi($seksiValue);

                $penanganan = new Penanganan();
                $penanganan->pemohon_id = $pemohon->id;
                $penanganan->seksi_id = $findIdSeksi->id;
                $penanganan->save();
            }
        };
        return redirect('dashboard');
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
