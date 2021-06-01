<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Secondary\User;

class UsersController extends Controller
{
    private $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function users()
    {
        return Inertia::render('Users', ['data' => (new User())->get()]);
    }

    public function getProfile(int $id)
    {
        return Inertia::render('UserDetail', ['data' => $this->user->getProfile($id)]);
    }
}
