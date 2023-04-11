<?php

namespace App\Http\Controllers;

use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon;
use App\Models\Seksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemohonController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {

    $jenisMediaPengaduan = JenisMediaPengaduan::all();
    $jenisSertifikat = JenisSertifikat::all();
    $semuaJenisPengaduan = JenisPengaduan::all();
    $pengecualianJenisPengaduan = JenisPengaduan::where('jenis_pengaduan', 'pelanggaran disiplin Pegawai Negeri Sipil')->first();
    $seksi = Seksi::all();
    $jenisPengaduan = (object) [
      'pengecualianJenisPengaduan' =>$pengecualianJenisPengaduan,
      'semuaJenisPengaduan' => $semuaJenisPengaduan
    ];
    $kecamatan = [];

    foreach (Kecamatan::all() as &$value) {
      $data = $value;
      $data->desa = Kecamatan::where('id', $data->id)->first()->desa;
      $kecamatan[] = $data;
    }

    return Inertia::render('Admin/Page', [
      'kecamatan' => $kecamatan,
      'jenisPengaduan' => $jenisPengaduan,
      'jenisMediaPengaduan' => $jenisMediaPengaduan,
      'jenisSertifikat' => $jenisSertifikat,
      'seksi' => $seksi
    ]);
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
    dd($request);
  }

  /**
   * Display the specified resource.
   */
  public function show(Pemohon $pemohon)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Pemohon $pemohon)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Pemohon $pemohon)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Pemohon $pemohon)
  {
    //
  }
}
