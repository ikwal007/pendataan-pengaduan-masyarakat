<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penanganan extends Model
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

    public function pemohon()
    {
        return $this->belongsTo(Pemohon::class)->with(['status', 'jenisPengaduan', 'jenisMediaPengaduan', 'jenisSertifikat', 'kecamatan', 'desa']);
    }

    public function seksi()
    {
        return $this->belongsTo(Seksi::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function getPenanganan($seksi_id = null, $perPage = 5)
    {
        return $this->where('seksi_id', $seksi_id)->with(['status', 'pemohon'])->paginate($perPage);
    }

    public function getPenangananByPemohonId($pemohon_id)
    {
        return $this->where('pemohon_id', $pemohon_id)->get();
    }

    public function getDetailPenanganan($penangananId)
    {
        return $this->where('id', $penangananId)->with(['status', 'pemohon'])->first();
    }

    public function getCountAllPenanganan($seksi_id = null)
    {
        $dataCount = (object) array(
            'pengaduan' => 0,
            'pending' => 0,
            'prosesing' => 0,
            'finis' => 0
        );

        $dataCount->pengaduan = $this->where('seksi_id', $seksi_id)->count();

        $dataCount->pending = $this->where('seksi_id', $seksi_id)->whereHas('status', function ($status) {
            $status->where('status', 'pending');
        })->count();

        $dataCount->prosesing = $this->where('seksi_id', $seksi_id)->whereHas('status', function ($status) {
            $status->where('status', 'prosesing');
        })->count();

        $dataCount->finis = $this->where('seksi_id', $seksi_id)->whereHas('status', function ($status) {
            $status->where('status', 'finis');
        })->count();

        return $dataCount;
    }

    /**
     * Cari catatan penanganan berdasarkan kata kunci.
     *
     * @param  string  $keyword
     * @return \Illuminate\Database\Eloquent\Builder
     * @throws \Exception
     */
    public function search($keyword, $seksi_id)
    {
        try {
            return $this->where(function ($query) use ($keyword, $seksi_id) {
                $query->where('seksi_id', $seksi_id)
                    ->whereHas('pemohon', function ($pemohon) use ($keyword) {
                        $pemohon->where('nama_pemohon', 'LIKE', "%{$keyword}%")
                            ->orWhere('nik', 'LIKE', "%{$keyword}%");
                    });
            })
                ->with(['pemohon', 'status'])->get();
        } catch (\Exception $e) {
            throw new \Exception('Error in search method: ' . $e->getMessage());
        }
    }
}
