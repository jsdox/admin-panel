<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscoveryQueue extends Model
{
    protected $connection = 'secondary';
    use HasFactory;

    public function get(int $id)
    {
        return $this
            ->select('discovery_queues.profile_id', 'users.name', 'users.last_name', 'discovery_queues.compatibility_score')
            ->where('discovery_queues.user_id', $id)
            ->join('users', 'discovery_queues.profile_id', 'users.id')
            ->where('discovery_queues.is_processed', 'false')
            ->paginate(15);
    }
}
