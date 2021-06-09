<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\AboutAnswer;

class AboutAnswersController extends Controller
{
    private $answer;

    public function __construct(AboutAnswer $answer)
    {
        $this->answer = $answer;
    }

    public function get(int $user_id)
    {
        $data = $this->answer->get($user_id);
        return Inertia::render('About', ['data' => $data]);
    }
}
