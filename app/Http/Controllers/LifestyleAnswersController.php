<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\LifestyleAnswer;

class LifestyleAnswersController extends Controller
{
    private $lifestyle_answer;

    public function __construct(LifestyleAnswer $lifestyle_answer)
    {
        $this->lifestyle_answer = $lifestyle_answer;
    }

    public function get(int $id)
    {
        $lifestyle_data = $this->lifestyle_answer->get($id);
        return Inertia::render('LifeStyle', ['data' => $lifestyle_data]);
    }
}
