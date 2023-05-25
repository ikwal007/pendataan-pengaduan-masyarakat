<?php

namespace App\Http\Controllers;

use App\Models\Pemohon as P;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $user = Auth()->user();

    $getUserLevel = DB::table('model_has_roles')->where('model_id', $user->id)->first();

    $pemohon = new P();

    $getAllPemohonans = $pemohon->getAllPemohonans(10);

    if ($getUserLevel->role_id === 1) {
      return Inertia::render('Admin/Dashboard', [
        'allPemohonans' => $getAllPemohonans,
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
    $pemohons = new P();
    $showDetail = $pemohons->getShowDetails($id);

    return Inertia::render('Admin/Show', [
      'showDetail' => $showDetail,
    ]);
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
