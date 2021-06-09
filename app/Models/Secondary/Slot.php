<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function get(int $id)
    {
        return $this
            ->select('user_id', 'profile_id')
            ->with('getLikedUsersProfile')
            ->where('user_id', $id)
            ->where('active_status', 'true')
            ->get();
    }

    public function getLikedUsersProfile()
    {
        return $this
            ->hasOne(User::class, 'id', 'profile_id')
            ->select('id', 'name', 'last_name');

    }
}
