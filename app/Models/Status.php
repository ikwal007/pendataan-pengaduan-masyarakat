<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
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
        return $this->hasMany(Pemohon::class);
    }

    public function penanganan()
    {
        return $this->hasMany(Penanganan::class);
    }

    public function getIdStatusDefault()
    {
        return $this->where('status', 'pending')->first()->id;
    }

    public function getAllStatus()
    {
        return $this->get();
    }

    public function getDetailStatusByName($keyword)
    {
        return $this->where('status', 'LIKE', "%{$keyword}%")->first();
    }
}
