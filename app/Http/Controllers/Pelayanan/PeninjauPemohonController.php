<?php

namespace App\Http\Controllers\Pelayanan;

use App\Http\Controllers\Controller;
use App\Models\Pemohon;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\Status;
use App\Models\User;
use Carbon\Carbon;
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
    public function edit(Request $request, string $id)
    {
        $pemohon = Pemohon::findOrFail($id);
        $user = User::find($request->input('pelayanId'));

        if (!$pemohon->locked_by || $request->input('pelayanId') == $pemohon->locked_by) {
            $pemohon->locked_by = $user->id;
            $pemohon->locked_at = Carbon::now();
            $pemohon->save();

            $dataForShowDetail = $pemohon->getShowDetails($id);
            $dataForStats = $pemohon->getCountAllPemohons();
            $seksi = new Seksi();
            $allSeksi = $seksi->getSeksiAll();

            return Inertia::render('PelayananPublik/EditPeninjauPemohon', compact(['dataForShowDetail', 'dataForStats', 'allSeksi']));
        } else {
            return redirect('/pelayanan-publik/peninjauan-pemohon')->with('message', 'Pemohonan sedang ditangani oleh orang lain');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $pemohon = Pemohon::findOrFail($id);

        if ($request->input('pelayanId') === $pemohon->locked_by) {
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

            $pemohon->locked_by = null;
            $pemohon->locked_at = null;
            $pemohon->save();

            return redirect('/pelayanan-publik/peninjauan-pemohon')->with('message', 'Edit Data Success');
        } else {
            return redirect('/pelayanan-publik/peninjauan-pemohon')->with('message', 'Pemohonan sedang ditangani oleh orang lain');
        }
    }
}
