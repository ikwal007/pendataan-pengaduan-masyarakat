<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kecamatan extends Model
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

    public function desa(): HasMany
    {
        return $this->hasMany(Desa::class);
    }

    public function pemohon()
    {
        return $this->hasMany(Pemohon::class);
    }

    public function getAllKecamatanWiteDesa()
    {
        return $this->with('desa')->get();
    }
}
