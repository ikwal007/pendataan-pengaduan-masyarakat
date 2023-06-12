<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sNames = ['pending', 'prosesing', 'finis'];
        
        foreach ($sNames as $sName) {
            $status = new Status();
            $status->id = (string) Str::ulid();
            $status->status = $sName;
            $status->save();
        }
    }
}
