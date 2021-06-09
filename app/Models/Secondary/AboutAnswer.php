<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutAnswer extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function get(int $user_id)
    {
        return $this
            ->select('id', 'user_id', 'question_id', 'answer_id', 'answer_text')
            ->with(['questions', 'answers'])
            ->where('visibility', 'true')
            ->where('user_id', $user_id)
            ->get();
    }

    public function questions()
    {
        return $this->hasOne(Question::class, 'id', 'question_id');
    }

    public function answers()
    {
        return $this->hasOne(Answer::class, 'id', 'answer_id');
    }
}
