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
        return $this->hasMany(ModelHasRole::class);
    }

    public function isSuperAdmin()
    {
        return $this->where('name', 'Super_Admin')->first()->id;
    }
}
