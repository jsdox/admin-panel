<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function get(int $id)
    {
        return $this
            ->select('user_id', 'profile_id', 'data_source')
            ->with('getLikedUsersProfile')
            ->where('user_id', $id)
            ->where('status', 'true')
            ->paginate(15);
    }

    public function getLikedUsersProfile()
    {
        return $this
            ->hasOne(User::class, 'id', 'profile_id')
            ->select('id', 'name', 'last_name');

    }
}
