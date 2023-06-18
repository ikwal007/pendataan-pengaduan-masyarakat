<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

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

    public function modelHasRoles()
    {
        return $this->hasMany(ModelHasRole::class, 'role_id');
    }

    public function isSuperAdmin()
    {
        return $this->where('name', 'Super_Admin')->first()->id;
    }

    public function isSeksi()
    {
        return $this->where('name', 'Seksi')->first()->id;
    }

    public function isMasyarakat()
    {
        return $this->where('name', 'Masyarakat')->first()->id;
    }
    
    public function isPelayanan()
    {
        return $this->where('name', 'Pelayanan_Publik')->first()->id;
    }
}
