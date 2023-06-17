<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasUlids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the model_has_role record associated with the user.
     */
    public function modelHasRole()
    {
        return $this->hasOne(ModelHasRole::class, 'model_id')->with('role');
    }

    /**
     * Get the count of users based on role.
     *
     * @return object
     */
    public function getAllUserInfoCount()
    {
        $datas = [
            'allUser' => $this->count(),
            'superAdmin' => $this->countByRole('Super_Admin'),
            'seksi' => $this->countByRole('Seksi'),
            'masyarakat' => $this->countByRole('masyarakat'),
        ];

        return (object) $datas;
    }

    /**
     * Get the count of users by role.
     *
     * @param  string  $roleName
     * @return int
     */
    private function countByRole($roleName)
    {
        return $this->whereHas('roles', function ($query) use ($roleName) {
            $query->where('name', $roleName);
        })->count();
    }

    /**
     * Get all user data except the ones with the specified role.
     *
     * @param string $roleName
     * @param int $perPage
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function getAllUserData($name = 'Super_Admin', $perPage = 3)
    {
        return $this->whereDoesntHave('roles', function ($query) use ($name) {
            $query->where('name', $name);
        })->paginate($perPage);
    }

    /**
     * Get the detailed data of a user by ID.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|static|static[]
     */
    public function getDetailDataUser($id)
    {
        return $this->find($id);
    }

    /**
     * Untuk mencari data di dalam database untuk tabel
     * 
     * @param string $keyword
     * @return \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection|static|static[]
     */
    public function search($keyword)
    {
        try {
            return $this->where(function ($query) use ($keyword) {
                $query->where('name', 'LIKE', "%{$keyword}%")
                    ->orWhere('email', 'LIKE', "%{$keyword}%");
            })
                ->whereDoesntHave('roles', function ($query) {

                    $query->where('name', 'Super_Admin');
                })
                ->get();
        } catch (\Exception $e) {
            throw new \Exception('Error in search method: ' . $e->getMessage());
        }
    }
}
