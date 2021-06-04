<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Secondary\DiscoveryQueue;

class DiscoveryQueuesController extends Controller
{
    private $disc_queue;
    public function __construct(DiscoveryQueue $disc_queue)
    {
        $this->disc_queue = $disc_queue;
    }

    public function get(int $id)
    {
        $data = $this->disc_queue->get($id);
        return Inertia::render('DiscQueue', ['data' => $data]);
    }
}
