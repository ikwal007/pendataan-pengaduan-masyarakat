<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public function penanganan()
    {
        return $this->hasMany(Penanganan::class)->with('seksi');
    }

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

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function getAllPemohonans($perPage = 10)
    {
        return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa'])
            ->paginate($perPage);
    }
    public function getShowDetails($id)
    {
        return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'penanganan', 'status'])
            ->find($id);
    }

    public function search($keyword)
    {
        try {
            return $this->where(function ($query) use ($keyword) {
                $query->where('nama_pemohon', 'LIKE', "%{$keyword}%")
                    ->orWhere('nik', 'LIKE', "%{$keyword}%");
            })
                ->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'penanganan']);
        } catch (\Exception $e) {
            throw new \Exception('Error in search method: ' . $e->getMessage());
        }
    }

    public function getCountAllPemohons()
    {
        $dataCount = (object) array(
            'pengaduan' => 0,
            'pending' => 0,
            'prosesing' => 0,
            'finis' => 0
        );

        $dataCount->pengaduan = $this->count();
        $dataCount->pending = $this->whereHas('status', function ($query) {
            $query->where('status', 'pending');
        })->count();

        return $dataCount;
    }

    

    

}
