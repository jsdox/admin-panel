<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LifestyleAnswer extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function get(int $id)
    {
        return $this->select('id', 'user_id', 'question_id', 'answer_id', 'answer_text')
            ->with(['question', 'answer'])
            ->where('user_id', $id)
            ->where('visibility', 'true')
            ->get();
    }

    public function question()
    {
        return $this->hasOne(Question::class, 'id', 'question_id');
    }

    public function answer()
    {
        return $this->hasOne(Answer::class, 'id', 'answer_id');
    }
}
