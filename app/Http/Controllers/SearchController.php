<?php

namespace App\Http\Controllers;

use App\Models\Pemohon;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchPemohon(Request $request)
    {
        $keyword = $request->input('keyword');

        $pemohon = new Pemohon();
        $results = $pemohon->search($keyword)->get();

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
