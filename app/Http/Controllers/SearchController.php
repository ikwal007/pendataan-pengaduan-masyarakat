<?php

namespace App\Http\Controllers;

use App\Models\Pemohon;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');

        $pemohon = new Pemohon();
        $results = $pemohon->search($keyword)->get();

        return response()->json($results);
    }
}
