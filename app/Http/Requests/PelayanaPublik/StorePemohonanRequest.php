<?php

namespace App\Http\Requests\PelayanaPublik;

use App\Models\JenisPengaduan;
use Illuminate\Foundation\Http\FormRequest;

class StorePemohonanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $jenisPengaduan = new JenisPengaduan();
        if ($jenisPengaduan->findJenisPengaduan('pelanggaran disiplin Pegawai Negeri Sipil')->id === 'jenis_pengaduan_id') {
            return [];
        }
        return [
            'keterangan_laporan_pengaduan' => ['',],
            'nama_pemohon' => [''],
            'no_nik' => ['', 'max:16'],
            'no_hak' => [''],
        ];
    }
}
