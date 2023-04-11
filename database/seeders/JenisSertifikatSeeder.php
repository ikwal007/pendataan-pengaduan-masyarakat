<?php

namespace Database\Seeders;

use App\Models\JenisSertifikat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisSertifikatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisSertifikat::create([
            'jenis_sertifikat' => 'Sertifikat Hak Milik (SHM)'
        ]);
        JenisSertifikat::create([
            'jenis_sertifikat' => 'Sertifikat Hak Guna Usaha (HGU)'
        ]);
        JenisSertifikat::create([
            'jenis_sertifikat' => 'Sertifikat Hak Pakai'
        ]);
        JenisSertifikat::create([
            'jenis_sertifikat' => 'Sertifikat Hak Guna Bangunan (SHGB)'
        ]);
    }
}
