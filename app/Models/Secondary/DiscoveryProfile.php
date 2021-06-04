<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscoveryProfile extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    function get(int $id)
    {
        return $this
            ->select('discovery_profiles.profile_id', 'users.name', 'users.last_name', 'discovery_profiles.data_source')
            ->where('discovery_profiles.user_id', $id)
            ->join('users', 'discovery_profiles.profile_id', 'users.id')
            ->get();
    }
}
