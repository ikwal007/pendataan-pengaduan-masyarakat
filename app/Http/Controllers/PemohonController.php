<?php

namespace App\Http\Controllers;

use App\Models\Pemohon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemohonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data1 = [
            [
                'id' => 1,
                'jenis_pengaduan' => 'pelayanan pertanahan'
            ],
            [
                'id' => 2,
                'jenis_pengaduan' => 'pelayanan tata ruang'
            ],
            [
                'id' => 3,
                'jenis_pengaduan' => 'pelanggaran disiplin Pegawai Negeri Sipil'
            ],
            [
                'id' => 4,
                'jenis_pengaduan' => 'sengketa dan konflik pertanahan'
            ],
        ];
        $data = (object) [
            'kecamatan' => [
                [
                  'id'=> 1,
                  'name' => "Kecamatan Meuraxa",
                  'kelurahan' =>  [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Lampaseh Aceh" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Punge Jurong" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Alue Deah Teungoh" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Deah Baro" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Deah Glumpang" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Blang Oi" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Cot Lamkuweueh" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Gampong Pie" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Lambung" ],
                    [ 'id' => 10, 'name' => "'kelurahan'/Desa Punge Ujong" ],
                    [ 'id' => 11, 'name' => "'kelurahan'/Desa Asoi Nanggro" ],
                    [ 'id' => 12, 'name' => "'kelurahan'/Desa Gampong Baro" ],
                    [ 'id' => 13, 'name' => "'kelurahan'/Desa Gampong Blang" ],
                    [ 'id' => 14, 'name' => "'kelurahan'/Desa Lamjabat" ],
                    [ 'id' => 15, 'name' => "'kelurahan'/Desa Surien" ],
                  ],
                ],
                [
                  'id' => 2,
                  'name' => "Kecamatan Jaya Baru",
                  'kelurahan' =>  [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Lamtemen Barat" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Lamtemen Timur" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Punge Blang Cut" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Bitai" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Lamjamee" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Lampoh Daya" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Ulee Pata" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Emperom" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Geuceu Meunara" ],
                  ],
                ],
                [
                  'id' => 3,
                  'name' => "Kecamatan Banda Raya",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Lam Ara" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Lampuot" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Lhong Cut" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Lhong Raya" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Mibo" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Peunyeurat" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Geuceu Iniem" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Geuceu Kayee Jato" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Geuceu Komplek" ],
                    [ 'id' => 10, 'name' => "'kelurahan'/Desa Lam Lagang" ],
                  ],
                ],
                [
                  'id' => 4,
                  'name' => "Kecamatan Baiturrahman",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Ateuk Pahlawan" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Peuniti" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Kampung Baru" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Neusu Jaya" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Seutui" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Sukaramai" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Ateuk Deah Tanoh" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Ateuk Munjeng" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Neusu Aceh" ],
                    [ 'id' => 10, 'name' => "'kelurahan'/Desa Ateuk Jawo" ],
                  ],
                ],
                [
                  'id' => 5,
                  'name' => "Kecamatan Lueng Bata",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Lam Dom (Landom)" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Batoh" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Cot Mesj'id'" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Lamseupeung" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Lueng Bata" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Panteriek" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Blang Cut" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Lampaloh" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Sukadamai" ],
                  ],
                ],
                [
                  'id' => 6,
                  'name' => "Kecamatan Kuta Alam",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Kuta Alam" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Laksana" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Peunayong" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Mulia" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Beurawe" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Kota Baru" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Bandar Baru" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Keuramat (Kramat)" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Lampineung" ],
                    [ 'id' => 10, 'name' => "'kelurahan'/Desa Lampriet" ],
                    [ 'id' => 11, 'name' => "'kelurahan'/Desa Lambaro Skep" ],
                    [ 'id' => 12, 'name' => "'kelurahan'/Desa Lamdingin" ],
                    [ 'id' => 13, 'name' => "'kelurahan'/Desa Lampulo" ],
                  ],
                ],
                [
                  'id' => 7,
                  'name' => "Kecamatan Kuta Raja",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Gampong Jawa" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Gampong Pande" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Keudah" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Peulanggahan" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Lampaseh Kota" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Merduati" ],
                  ],
                ],
                [
                  'id' => 8,
                  'name' => "Kecamatan Syiah Kuala",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Kopelma Darussalam" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Rukoh" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Jeulingke" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Tibang" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Lamgugob" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Alue Naga" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Deah Raya" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Gampong Peurada" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Iemasen Kaye Adang" ],
                    [ 'id' => 10, 'name' => "'kelurahan'/Desa Pineung" ],
                  ],
                ],
                [
                  'id' => 9,
                  'name' => "Kecamatan Ulee Kareng",
                  'kelurahan' => [
                    [ 'id' => 1, 'name' => "'kelurahan'/Desa Ceurih" ],
                    [ 'id' => 2, 'name' => "'kelurahan'/Desa Doi/Doy" ],
                    [ 'id' => 3, 'name' => "'kelurahan'/Desa Iemasen Ulee Kareng" ],
                    [ 'id' => 4, 'name' => "'kelurahan'/Desa Lamglumpang" ],
                    [ 'id' => 5, 'name' => "'kelurahan'/Desa Lambhuk" ],
                    [ 'id' => 6, 'name' => "'kelurahan'/Desa Lamteh" ],
                    [ 'id' => 7, 'name' => "'kelurahan'/Desa Ilie" ],
                    [ 'id' => 8, 'name' => "'kelurahan'/Desa Pango Deah" ],
                    [ 'id' => 9, 'name' => "'kelurahan'/Desa Pango Raya" ],
                  ],
                ],
              ]
            ];
        return Inertia::render('AdminPemohon/Page', [
            'data' => $data,
            'data1' => $data1
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
        //
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
