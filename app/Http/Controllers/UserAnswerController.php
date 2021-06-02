<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\UserAnswer;

class UserAnswerController extends Controller
{
    private $user_answer;

    public function __construct(UserAnswer $user_answer)
    {
        $this->user_answer = $user_answer;
    }

    public function getAnswers(int $id): object
    {
        $data = $this->user_answer
            ->select('what_do_you_want_in_next_relationship', 'who_do_you_want_to_date', 'how_old_should_they_be')
            ->where('user_id', $id)->get();
        return Inertia::render('PerfectNatchQA', ['data' => $data]);
    }
}
