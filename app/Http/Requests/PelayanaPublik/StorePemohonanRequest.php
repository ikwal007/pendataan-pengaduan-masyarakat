<?php

namespace App\Http\Requests\PelayanaPublik;

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
        return [
            'keterangan_laporan_pengaduan' => ['required',],
            'nama_pemohon' => ['required'],
            'no_nik' => ['required'],
            'no_hak' => ['required'],
        ];
    }
}
