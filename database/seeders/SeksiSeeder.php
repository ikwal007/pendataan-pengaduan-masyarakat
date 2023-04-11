<?php

namespace Database\Seeders;

use App\Models\Seksi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Seksi::create([
            'nama_seksi' => 'seksi survei dan pemetaan'
        ]);
        Seksi::create([
            'nama_seksi' => 'seksi penetapan hak dan pendaftaran'
        ]);
        Seksi::create([
            'nama_seksi' => 'seksi penataan dan pemberdayaan'
        ]);
        Seksi::create([
            'nama_seksi' => 'seksi pengadaan tanah dan pengembangan'
        ]);
        Seksi::create([
            'nama_seksi' => 'seksi pengendalian dan penanganan sengketa'
        ]);
    }
}
