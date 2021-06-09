<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BioAnswer extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function get(int $id)
    {
        return $this->select('id', 'user_id', 'question_id', 'answer')
            ->with('question')
            ->where('user_id', $id)
            ->get();
    }

    public function question()
    {
        return $this->hasOne(Question::class, 'id', 'question_id');
    }

}
