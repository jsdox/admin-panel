<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Secondary\User;

class UsersController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function users()
    {
        return Inertia::render('Users', ['data' => (new User())->get()]);
    }

    public function get(int $id)
    {
        return Inertia::render('UserDetail', ['data' => $id]);
    }
}
