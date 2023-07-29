<?php

namespace App\Http\Controllers\Pelayanan;

use App\Http\Controllers\Controller;
use App\Models\Pemohon;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PeninjauPemohonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pemohon = new Pemohon();
        $dataForTable = $pemohon->getAllPeninjauPemohon();
        $dataForStats = $pemohon->getCountAllPemohons();
        return Inertia::render('PelayananPublik/PeninjauPemohon', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $pemohon = new Pemohon();
        $dataForShowDetail = $pemohon->getShowDetails($id);
        $dataForStats = $pemohon->getCountAllPemohons();
        
        $seksi = new Seksi();
        $allSeksi = $seksi->getSeksiAll();

        return Inertia::render('PelayananPublik/EditPeninjauPemohon', compact(['dataForShowDetail', 'dataForStats', 'allSeksi']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $status = new Status();
        $seksi = new Seksi();
        $allSeksi = $seksi->getSeksiAll();

        foreach ($allSeksi as $seksiValue) {
            if ($request->{$seksiValue->nama_seksi} === true) {
                $findIdSeksi = $seksi->findSeksi($seksiValue->nama_seksi);

                $penanganan = new Penanganan();
                $penanganan->pemohon_id = $id;
                $penanganan->seksi_id = $findIdSeksi->id;
                $penanganan->status_id = $status->getIdStatusDefault();
                $penanganan->save();
            }
        };

        return redirect('/pelayanan-publik/dashboard')->with('message', 'Edit Data Success');
    }
}
