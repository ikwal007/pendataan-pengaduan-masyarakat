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

    /**
     * Relasi: Dapatkan catatan penanganan yang terkait dengan pemohon.
     */
    public function penanganan()
    {
        return $this->hasMany(Penanganan::class)->with(['seksi', 'status']);
    }

    /**
     * Relasi: Dapatkan jenis pengaduan yang terkait dengan pemohon.
     */
    public function jenisPengaduan()
    {
        return $this->belongsTo(JenisPengaduan::class);
    }

    /**
     * Relasi: Dapatkan jenis media pengaduan yang terkait dengan pemohon.
     */
    public function jenisMediaPengaduan()
    {
        return $this->belongsTo(JenisMediaPengaduan::class);
    }

    /**
     * Relasi: Dapatkan jenis sertifikat yang terkait dengan pemohon.
     */
    public function jenisSertifikat()
    {
        return $this->belongsTo(JenisSertifikat::class);
    }

    /**
     * Relasi: Dapatkan kecamatan yang terkait dengan pemohon.
     */
    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }

    /**
     * Relasi: Dapatkan desa yang terkait dengan pemohon.
     */
    public function desa()
    {
        return $this->belongsTo(Desa::class);
    }

    /**
     * Relasi: Dapatkan status yang terkait dengan pemohon.
     */
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    /**
     * Dapatkan semua catatan pemohonan.
     *
     * @param  int|null  $perPage
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Collection
     */
    public function getAllPemohonans($perPage = 10, $nik = null)
    {
        if ($nik) {
            return $this->where('nik', $nik)->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'status', 'penanganan'])
                ->paginate($perPage);
        } else {
            return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'status', 'penanganan'])
                ->paginate($perPage);
        }
    }

    /**
     * Dapatkan semua catatan pemohon berdasarkan status
     * @param string $nikUser
     * @param string $status
     */
    public function findPemohonByStatus($nikUser, $status)
    {
        return $this->where('nik', $nikUser)->whereHas('status', function ($query) use ($status) {
            $query->where('status', 'LIKE', "%{$status}%");
        })->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'status', 'penanganan'])->latest()->paginate(5);
    }

    /**
     * Dapatkan semua catatan pemohon yang berelasi dengan penanganan.
     * 
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Collection
     */
    public function getAllPemohonansWithPenanganan()
    {
        return $this->has('penanganan')->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'status', 'penanganan'])->latest()->paginate(5);
    }

    /**
     * Dapatkan semua catatan pemohon yang belum terkait dengan penanganan
     * 
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Collection
     */
    public function getAllPeninjauPemohon($perPage = 5)
    {
        return $this->whereHas('jenisPengaduan', function($query) {
            $query->where('jenis_pengaduan', 'LIKE', "pelayanan pertanahan");
        })->doesntHave('penanganan')->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'status', 'penanganan'])->paginate($perPage);
    }

    /**
     * Dapatkan informasi detail dari catatan pemohon.
     *
     * @param  int  $id
     * @return \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|null
     */
    public function getShowDetails($id)
    {
        return $this->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'penanganan', 'status'])
            ->find($id);
    }

    /**
     * Cari catatan pemohon berdasarkan kata kunci.
     *
     * @param  string  $keyword
     * @return \Illuminate\Database\Eloquent\Builder
     * @throws \Exception
     */
    public function liveSearchPemohon($keyword)
    {
        try {
            return $this->has('penanganan')->where(function ($query) use ($keyword) {
                $query->where('nama_pemohon', 'LIKE', "%{$keyword}%")
                    ->orWhere('nik', 'LIKE', "%{$keyword}%");
            })
                ->with(['jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa', 'penanganan', 'status'])->get();
        } catch (\Exception $e) {
            throw new \Exception('Error in search method: ' . $e->getMessage());
        }
    }

    /**
     * Dapatkan jumlah total catatan pemohon berdasarkan status dan opsional $id.
     *
     * @param  int|null  $id
     * @return \stdClass
     */
    public function getCountAllPemohons($nik = null)
    {
        $dataCount = (object) array(
            'pengaduan' => 0,
            'pending' => 0,
            'prosesing' => 0,
            'finis' => 0
        );

        if ($nik) {
            $dataCount->pengaduan = $this->where('nik', $nik)->count();

            $dataCount->pending = $this->where('nik', $nik)->whereHas('status', function ($query) {
                $query->where('status', 'pending');
            })->count();

            $dataCount->prosesing = $this->where('nik', $nik)->whereHas('status', function ($query) {
                $query->where('status', 'prosesing');
            })->count();

            $dataCount->finis = $this->where('nik', $nik)->whereHas('status', function ($query) {
                $query->where('status', 'finis');
            })->count();
        } else {
            $dataCount->pengaduan = $this->count();

            $dataCount->pending = $this->whereHas('status', function ($query) {
                $query->where('status', 'pending');
            })->count();

            $dataCount->prosesing = $this->whereHas('status', function ($query) {
                $query->where('status', 'prosesing');
            })->count();

            $dataCount->finis = $this->whereHas('status', function ($query) {
                $query->where('status', 'finis');
            })->count();
        }


        return $dataCount;
    }
}
