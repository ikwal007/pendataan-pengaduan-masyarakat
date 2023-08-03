<?php

namespace App\Http\Controllers\Pelayanan;

use App\Http\Controllers\Controller;
use App\Models\Pemohon;
use Illuminate\Http\Request;

class CountController extends Controller
{
    public function notifPeninjauanPemohon()
    {
        $pemohon = new Pemohon();
        $results = $pemohon->countNotifPeninjauanPemohon();

        return response()->json($results);
    }
}
