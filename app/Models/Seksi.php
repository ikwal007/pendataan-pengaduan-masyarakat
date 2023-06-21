<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seksi extends Model
{
    use HasFactory, HasUlids;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Mendefinisikan relasi "hasMany" antara model ini dengan model Penanganan.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany Objek relasi "hasMany" antara model ini dengan model Penanganan.
     */
    public function penanganans()
    {
        return $this->hasMany(Penanganan::class);
    }

    /**
     * Mengambil semua data seksi.
     *
     * @return \Illuminate\Database\Eloquent\Collection Kumpulan semua data seksi.
     */
    public function getSeksiAll()
    {
        return $this->all();
    }

    /**
     * Mencari data Seksi berdasarkan nilai nama_seksi.
     *
     * @param string $seksiValue Nilai nama_seksi yang ingin dicari.
     * @return \Illuminate\Database\Eloquent\Model|null Data Seksi yang ditemukan, atau null jika tidak ditemukan.
     */
    public function findSeksi($seksiValue)
    {
        return $this->where('nama_seksi', $seksiValue)->first();
    }

    /**
     * Mengambil semua nilai kolom 'nama_seksi' dari model.
     *
     * @return array Array berisi semua nilai kolom 'nama_seksi'.
     */
    public function getAllNameSeksi()
    {
        $namaList = $this->pluck('nama_seksi')->toArray();
        return array_map(fn ($nama) => str_replace(' ', '_', $nama), $namaList);;
    }
}
