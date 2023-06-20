<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisSertifikat extends Model
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
     * Mendefinisikan relasi "hasMany" antara model ini dengan model Pemohon.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pemohon()
    {
        return $this->hasMany(Pemohon::class);
    }

    /**
     * Mengambil semua jenis sertifikat.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function allJenisSertifikat()
    {
        return $this->all();
    }
}
