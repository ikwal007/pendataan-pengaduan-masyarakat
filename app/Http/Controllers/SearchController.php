<?php

namespace App\Http\Controllers;

use App\Models\Pemohon;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchPemohon(Request $request)
    {
        $keyword = $request->input('keyword');

        $pemohon = new Pemohon();
        $results = $pemohon->liveSearchPemohon($keyword);

        return response()->json($results);
    }

    public function searchPenanganan(Request $request)
    {
        $keyword = $request->input('keyword');
        $requestSeksi = $request->input('seksi');

        $seksi = new Seksi();
        $seksi_id = $seksi->findSeksi($requestSeksi);

        $penanganan = new Penanganan();
        $results = $penanganan->search($keyword, $seksi_id->id);

        return response()->json($results);
    }

    public function searchUser(Request $request)
    {
        $keyword = $request->input('keyword');

        $user = new User();
        $results = $user->search($keyword);

        return response()->json($results);
    }
}
