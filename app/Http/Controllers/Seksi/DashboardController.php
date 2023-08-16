<?php

namespace App\Http\Controllers\Seksi;

use Inertia\Inertia;
use App\Models\Seksi;
use App\Models\Status;
use App\Models\Pemohon;
use App\Models\Penanganan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function sendFonnteMessage($no_telpon, $message)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Dg9BpT1Tder@_ZeBfPJa',
        ])->post('https://api.fonnte.com/send', [
            'target' => $no_telpon,
            'message' => $message,
            'countryCode' => '62',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to send message'], 500);
        }

        return $response->json();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth()->user()->name;

        $seksi = new Seksi();
        $findSeksi = $seksi->findSeksi($user);

        $penanganan = new Penanganan();
        $dataForStats = $penanganan->getCountAllPenanganan($findSeksi->id);
        $dataForTable = $penanganan->getPenanganan($findSeksi->id, 5);

        return Inertia::render('Seksi/Dashboard', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pemohon = new Pemohon();
        $dataForShowDetail = $pemohon->getShowDetails($id);
        $dataForStats = $pemohon->getCountAllPemohons();

        return Inertia::render('Seksi/Show', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $seksiId, string $penangananId)
    {
        $penanganan = new Penanganan();
        $dataForStats = $penanganan->getCountAllPenanganan($seksiId);
        $dataForShowDetail = $penanganan->getDetailPenanganan($penangananId);

        $status = new Status();
        $allStatus = $status->getAllStatus();

        return Inertia::render('Seksi/Edit', compact(['dataForStats', 'dataForShowDetail', 'allStatus']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $penangananId)
    {
        $penanganan = new Penanganan();
        $findPenanganan = $penanganan->getDetailPenanganan($penangananId);
        $findPenanganan->status_id = $request->statusPenanganan;
        $findPenanganan->save();

        $pemohon = new Pemohon();
        $findPemohon = $pemohon->getShowDetails($findPenanganan->pemohon_id);

        $findAllPenanganan = $penanganan->getPenangananByPemohonId($findPenanganan->pemohon_id);

        $status = new Status();
        $isPending = $status->getDetailStatusByName('pending');
        $isProcessing = $status->getDetailStatusByName('prosesing');
        $isFinis = $status->getDetailStatusByName('finis');

        $statusArray = [];

        foreach ($findAllPenanganan as $penanganan) {
            $statusArray[] = $penanganan->status_id;
        }

        $allPending = array_reduce($statusArray, function ($carry, $item) use ($isPending) {
            return $carry && ($item == $isPending->id);
        }, true);

        $allFinis = array_reduce($statusArray, function ($carry, $item) use ($isFinis) {
            return $carry && ($item == $isFinis->id);
        }, true);

        if ($allPending) {
            $findPemohon->status_id = $isPending->id;
        } elseif ($allFinis) {
            $findPemohon->status_id = $isFinis->id;

            $message = "Status pengajuan Anda dengan nama $findPemohon->nama_pemohon, nik $findPemohon->nik telah selesai diproses.";

            $no_telpon = $findPemohon->no_telpon;
            $this->sendFonnteMessage($no_telpon, $message);
        } else {
            $findPemohon->status_id = $isProcessing->id;
        }

        $findPemohon->save();

        return redirect('/seksi/dashboard')->with('message', 'Edit Data Success');
    }
}
