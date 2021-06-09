<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Secondary\BioAnswer;

class BioAnswersController extends Controller
{
    private $bio_answer;

    public function __construct(BioAnswer $bio_answer)
    {
        $this->bio_answer = $bio_answer;
    }

    public function get(int $id)
    {
        $bio_data = $this->bio_answer->get($id);
        return Inertia::render('Bio', ['data' => $bio_data]);
    }
}
