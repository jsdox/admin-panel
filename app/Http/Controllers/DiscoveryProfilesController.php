<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Secondary\DiscoveryProfile;

class DiscoveryProfilesController extends Controller
{
    private $disc_profile;
    public function __construct(DiscoveryProfile $disc_profile)
    {
        $this->disc_profile = $disc_profile;
    }

    public function get(int $id)
    {
        $data = $this->disc_profile->get($id);
        return Inertia::render('DiscProfile', ['data' => $data]);
    }

}
