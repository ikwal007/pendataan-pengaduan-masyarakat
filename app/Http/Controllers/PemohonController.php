<?php

namespace App\Http\Controllers;

use App\Models\JenisMediaPengaduan;
use App\Models\JenisPengaduan;
use App\Models\JenisSertifikat;
use App\Models\Kecamatan;
use App\Models\Pemohon as P;
use App\Models\Penanganan;
use App\Models\Seksi;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

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

    $p = new P();
    $countAllPemohons = $p->getCountAllPemohons();

    $pengecualianJenisPengaduan = JenisPengaduan::where('jenis_pengaduan', 'pelanggaran disiplin Pegawai Negeri Sipil')->first();
    $seksi = Seksi::all();
    $jenisPengaduan = (object) [
      'pengecualianJenisPengaduan' => $pengecualianJenisPengaduan,
      'semuaJenisPengaduan' => $semuaJenisPengaduan
    ];
    $kecamatan = [];

    foreach (Kecamatan::all() as &$value) {
      $data = $value;
      $data->desa = Kecamatan::where('id', $data->id)->first()->desa;
      $kecamatan[] = $data;
    }

    return Inertia::render(
      'Admin/CreatePemohon',
      compact(['kecamatan', 'jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'seksi', 'countAllPemohons'])

    );
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
    $status = new Status();
    $pemohon = new P;
    $pemohon->id = (string) Str::ulid();
    $pemohon->jenis_pengaduan_id = $request->jenis_pengaduan;
    $pemohon->jenis_media_pengaduan_id = $request->jenis_media_pengaduan;
    $pemohon->nama_pemohon = $request->nama_pemohon;
    $pemohon->nik = $request->no_nik;
    $pemohon->no_hak = $request->no_hak;
    $pemohon->jenis_sertifikat_id = $request->jenis_sertifikat;
    $pemohon->keterangan_pengaduan_pemohon = $request->keterangan_laporan_pengaduan;
    $pemohon->kecamatan_id = $request->kecamatan;
    $pemohon->desa_id = $request->desa;
    $pemohon->status_id = $status->getIdStatusDefault();
    $pemohon->save();

    $seksiData = [
      'seksi_survei_dan_pemetaan' => 'seksi survei dan pemetaan',
      'seksi_penataan_dan_pemberdayaan' => 'seksi penataan dan pemberdayaan',
      'seksi_pengendalian_dan_penanganan_sengketa' => 'seksi pengendalian dan penanganan sengketa',
      'seksi_penetapan_hak_dan_pendaftaran' => 'seksi penetapan hak dan pendaftaran',
      'seksi_pengadaan_tanah_dan_pengembangan' => 'seksi pengadaan tanah dan pengembangan'
    ];

    foreach ($seksiData as $seksiKey => $seksiValue) {
      if ($request->$seksiKey === true) {
        $findIdSeksi = Seksi::where('nama_seksi', $seksiValue)->first();

        $penanganan = new Penanganan;
        $penanganan->pemohon_id = $pemohon->id;
        $penanganan->seksi_id = $findIdSeksi->id;
        $penanganan->save();
      }
    };
    return redirect('dashboard');
  }

  /**
   * Display the specified resource.
   */
  public function show(P $pemohon)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(P $pemohon)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, P $pemohon)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(P $pemohon)
  {
    //
  }
}
