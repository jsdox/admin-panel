<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $connection = 'secondary';
    use HasFactory;
}
