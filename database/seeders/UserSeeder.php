<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@adminsuper.com',
            'password' => Hash::make('adminsuper')
        ]);
        $guest = User::create([
            'name' => 'Tamu',
            'email' => 'tamu@tamu.com',
            'password' => Hash::make('adminsuper')
        ]);

        $admin->assignRole('Super_Admin');
        $guest->assignRole('Guest');
    }
}
