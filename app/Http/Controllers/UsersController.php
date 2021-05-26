<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Secondary\User;

class UsersController extends Controller
{
    public function users()
    {
        $obj = new User();
        $data = $obj->get();
        return Inertia::render('Users', ['data' => $data]);
    }
}
