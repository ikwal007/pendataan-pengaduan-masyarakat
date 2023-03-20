<?php

namespace Database\Seeders;

use App\Models\Kecamatan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Meuraxa'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Jaya Baru'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Banda Raya'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Baiturrahman'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Lueng Bata'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Kuta Alam'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Kuta Raja'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Syiah Kuala'
        ]);
        Kecamatan::create([
            'nama_kecamatan' => 'Kecamatan Ulee Kareng'
        ]);
    }
}
