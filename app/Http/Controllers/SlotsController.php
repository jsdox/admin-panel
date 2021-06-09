<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Secondary\Slot;

class SlotsController extends Controller
{
    private $slot;

    public function __construct(Slot $slot)
    {
        $this->slot = $slot;
    }

    public function get(int $id)
    {
        $data = $this->slot->get($id);
        return Inertia::render('ActiveConversation', ['data' => $data]);
    }
}
