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
}
