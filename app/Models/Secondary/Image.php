<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $connection = 'secondary';
    use HasFactory;
}
