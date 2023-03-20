<?php

namespace Database\Seeders;

use App\Models\Desa;
use App\Models\Kecamatan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DesaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $idKecamatanBaiturrahman = Kecamatan::where('nama_kecamatan', 'Kecamatan Baiturrahman')->value('id');
        $idKecamatanBandaRaya = Kecamatan::where('nama_kecamatan', 'Kecamatan Banda Raya')->value('id');
        $idkecamatanMeuraxa = Kecamatan::where('nama_kecamatan', 'Kecamatan Meuraxa')->value('id');
        $idKecamatanJayaBaru = Kecamatan::where('nama_kecamatan', 'Kecamatan Jaya Baru')->value('id');
        $idKecamatanLuengBata = Kecamatan::where('nama_kecamatan', 'Kecamatan Lueng Bata')->value('id');
        $idKecamatanKutaAlam = Kecamatan::where('nama_kecamatan', 'Kecamatan Kuta Alam')->value('id');
        $idKecamatanKutaRaja = Kecamatan::where('nama_kecamatan', 'Kecamatan Kuta Raja')->value('id');
        $idKecamatanSyiahKuala = Kecamatan::where('nama_kecamatan', 'Kecamatan Syiah Kuala')->value('id');
        $idKecamatanUleeKareng = Kecamatan::where('nama_kecamatan', 'Kecamatan Ulee Kareng')->value('id');

        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ateuk Pahlawan',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Peuniti',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Kampung Baru',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Neusu Jaya',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Seutui',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Sukaramai',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ateuk Deah Tanoh',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ateuk Munjeng',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Neusu Aceh',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ateuk Jawo',
            'kecamatan_id' => $idKecamatanBaiturrahman
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lam Ara',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampuot',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lhong Cut',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lhong Raya',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Mibo',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Peunyeurat',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Geuceu Iniem',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Geuceu Kayee Jato',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Geuceu Komplek',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lam Lagang',
            'kecamatan_id' => $idKecamatanBandaRaya
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamtemen Barat',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamtemen Timur',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Punge Blang Cut',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Bitai',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamjamee',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampoh Daya',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ulee Pata',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Emperom',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Geuceu Meunara',
            'kecamatan_id' => $idKecamatanJayaBaru
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Kuta Alam',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Laksana',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Peunayong',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Mulia',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Beurawe',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Kota Baru',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Bandar Baru',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Keuramat (Kramat)',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampineung',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampriet',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lambaro Skep',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamdingin',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampulo',
            'kecamatan_id' => $idKecamatanKutaAlam
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Jawa',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Pande',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Keudah',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Peulanggahan',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampaseh Kota',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Merduati',
            'kecamatan_id' => $idKecamatanKutaRaja
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lam Dom (Landom)',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Batoh',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Cot Mesjid',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamseupeung',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lueng Bata',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => ' Kelurahan/Desa Panteriek',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Blang Cut',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampaloh',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Sukadamai',
            'kecamatan_id' => $idKecamatanLuengBata
        ]);


        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lampaseh Aceh',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Punge Jurong',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Alue Deah Teungoh',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Deah Baro',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Deah Glumpang',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Blang Oi',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Cot Lamkuweueh',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Pie',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lambung',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Punge Ujong',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Asoi Nanggro',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Baro',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Blang',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamjabat',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Surien',
            'kecamatan_id' => $idkecamatanMeuraxa
        ]);


        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Kopelma Darussalam',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Rukoh',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Jeulingke',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Tibang',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamgugob',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Alue Naga',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Deah Raya',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Gampong Peurada',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Iemasen Kaye Adang',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Pineung',
            'kecamatan_id' => $idKecamatanSyiahKuala
        ]);



        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ceurih',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Doi/Doy',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Iemasen Ulee Kareng',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamglumpang',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lambhuk',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Lamteh',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Ilie',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Pango Deah',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
        Desa::create([
            'nama_desa' => 'Kelurahan/Desa Pango Raya',
            'kecamatan_id' => $idKecamatanUleeKareng
        ]);
    }
}
