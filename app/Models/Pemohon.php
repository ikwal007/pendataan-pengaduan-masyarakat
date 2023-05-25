<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemohon extends Model
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

    public function jenisPengaduan()
    {
        return $this->belongsTo(JenisPengaduan::class);
    }

    public function jenisMediaPengaduan()
    {
        return $this->belongsTo(JenisMediaPengaduan::class);
    }

    public function jenisSertifikat()
    {
        return $this->belongsTo(JenisSertifikat::class);
    }

    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }

    public function desa()
    {
        return $this->belongsTo(Desa::class);
    }

    public function getAllPemohonans($perPage = 10)
    {
        return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa'])
                    ->paginate($perPage);
    }
    public function getShowDetails($id)
    {
        return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa'])
                    ->find($id);
    }
}
