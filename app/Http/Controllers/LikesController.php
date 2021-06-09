<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\Like;

class LikesController extends Controller
{
    private $likes;

    public function __construct(Like $likes)
    {
        $this->likes = $likes;
    }

    public function get(int $id)
    {
        $data = $this->likes->get($id);
        return Inertia::render('Likes', ['data' => $data]);
    }
}
