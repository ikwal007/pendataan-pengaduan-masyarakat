<?php

namespace Database\Seeders;

use App\Models\JenisMediaPengaduan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisMediaPengaduanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisMediaPengaduan::create([
            'nama_media_pengaduan' => 'Langsung'
        ]);
        JenisMediaPengaduan::create([
            'nama_media_pengaduan' => 'WhatsApp'
        ]);
        JenisMediaPengaduan::create([
            'nama_media_pengaduan' => 'Sentuh Tanahku'
        ]);
        JenisMediaPengaduan::create([
            'nama_media_pengaduan' => 'Google Form'
        ]);
    }
}
