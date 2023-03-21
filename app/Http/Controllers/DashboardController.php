<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\JenisPengaduan;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {


    // $jenisPengaduan = JenisPengaduan::all();
    // $kecamatan = [];

    // foreach (Kecamatan::all() as &$value) {
    //   $data = $value;
    //   $data->desa = Kecamatan::where('id', $data->id)->first()->desa;
    //   $kecamatan[] = $data;
    // }


    $user = Auth()->user();
    $getUserLevel = DB::table('model_has_roles')->where('model_id', $user->id)->first();
    if ($getUserLevel->role_id === 1) {
      return Inertia::render('Admin/Dashboard', [
        // 'kecamatan' => $kecamatan,
        // 'jenisPengaduan' => $jenisPengaduan
      ]);
    } else {
      return Inertia::render('Dashboard');
    }
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
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
