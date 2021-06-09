<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\UserAnswer;
use App\Models\Secondary\Answer;

class UserAnswerController extends Controller
{
    private $user_answer;
    private $answer;

    public function __construct(UserAnswer $user_answer, Answer $answer)
    {
        $this->user_answer = $user_answer;
        $this->answer = $answer;
    }

    public function getAnswers(int $id)
    {
        $data = $this->user_answer
            ->select('what_do_you_want_in_next_relationship', 'who_do_you_want_to_date', 'how_old_should_they_be')
            ->where('user_id', $id)->get();
        $data = json_decode($data);
        if(!empty($data)) {
            $answer_one = $data[0]->what_do_you_want_in_next_relationship;
            $answer_two = $data[0]->who_do_you_want_to_date;
            $answer = $this->answer->getAnswer(
                    [$answer_one, $answer_two]
            );
            $managed_data = [];
            foreach($answer as $ans) {
                if ($ans['id'] == $answer_one) {
                    $managed_data[] = array(
                        'question' => 'What do you want in next relationship',
                        'answer' => $ans['answer']
                    );
                }
                if ($ans['id'] == $answer_two) {
                    $managed_data[] = array(
                        'question' => 'Who do you want to date',
                        'answer' => $ans['answer']
                    );
                }
            }
            $age = json_decode($data[0]->how_old_should_they_be);
            $managed_data[] = array(
                'question' => 'How old should they be',
                'answer' => 'From ' . $age->age->min . ' To '. $age->age->max
            );
            return Inertia::render('PerfectNatchQA', ['data' => $managed_data]);
        }
        return Inertia::render('PerfectNatchQA', ['data' => '']);
    }
}
