<?php

namespace Database\Seeders;

use App\Models\User;
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
        
        $pelayananPubliks = [
            [
                'name' => 'Pelayanan 1',
                'email' => 'pelayanan1@pelayanan.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'Pelayanan 2',
                'email' => 'pelayanan2@pelayanan.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'Pelayanan 3',
                'email' => 'pelayanan3@pelayanan.com',
                'password' => Hash::make('password')
            ],
        ];

        $seksiUsers = [
            [
                'name' => 'seksi survei dan pemetaan',
                'email' => 'ssdp@seksi.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'seksi penetapan hak dan pendaftaran',
                'email' => 'sphdp@seksi.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'seksi penataan dan pemberdayaan',
                'email' => 'spdp@seksi.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'seksi pengadaan tanah dan pengembangan',
                'email' => 'sptdp@seksi.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'seksi pengendalian dan penanganan sengketa',
                'email' => 'spdps@seksi.com',
                'password' => Hash::make('password')
            ],
        ];
        
        foreach ($pelayananPubliks as $pelayananPublik) {
            $pelayananPublik = User::create($pelayananPublik);
            $pelayananPublik->assignRole('Pelayanan_Publik');
        }
        
        foreach ($seksiUsers as $seksiData) {
            $seksiUser = User::create($seksiData);
            $seksiUser->assignRole('Seksi');
        }

        $admin->assignRole('Super_Admin');
    }
}
