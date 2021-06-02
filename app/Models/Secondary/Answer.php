<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $connection = 'secondary';

    public function getAnswer(array $questions_id): object
    {
        return $this->whereIn('id', $questions_id)->get();
    }

}
