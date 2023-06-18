<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'Super_Admin']);
        Role::create(['name' => 'Pelayanan_Publik']);
        Role::create(['name' => 'Seksi']);
        Role::create(['name' => 'Masyarakat']);
    }
}
