<?php

namespace Database\Seeders;

use App\Models\JenisPengaduan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisPengaduanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisPengaduan::create(['jenis_pengaduan' => 'pelayanan pertanahan']);
        JenisPengaduan::create(['jenis_pengaduan' => 'pelayanan tata ruang']);
        JenisPengaduan::create(['jenis_pengaduan' => 'pelanggaran disiplin Pegawai Negeri Sipil']);
        JenisPengaduan::create(['jenis_pengaduan' => 'sengketa dan konflik pertanahan']);
    }
}
