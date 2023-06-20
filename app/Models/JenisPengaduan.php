<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPengaduan extends Model
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
     * Mengambil semua jenis pengaduan dan pengecualian jenis pengaduan.
     *
     * @return object Jenis pengaduan dan pengecualian dalam bentuk objek.
     */
    public function allJenisPengaduanAndException()
    {
        $semuaJenisPengaduan = $this->all();
        $pengecualianJenisPengaduan = $this->where('jenis_pengaduan', 'pelanggaran disiplin Pegawai Negeri Sipil')->first();
        $jenisPengaduan = (object) [
            'pengecualianJenisPengaduan' => $pengecualianJenisPengaduan,
            'semuaJenisPengaduan' => $semuaJenisPengaduan
        ];
        return $jenisPengaduan;
    }
}
