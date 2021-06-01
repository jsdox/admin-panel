<?php

namespace App\Models\Secondary;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    protected $connection = 'secondary';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function get(): object
    {
        return $this->on($this->connection)
            ->where('type', 1)
            ->paginate(15);
    }

    public function getProfile(int $id): object
    {
        return $this->where('id', $id)
            ->with(['getAddress.getCity', 'getAddress.getCountry'])
            ->get();
    }

    public function getAddress()
    {
        return $this->hasOne(Address::class);
    }
}
