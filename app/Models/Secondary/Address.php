<?php

namespace App\Models\Secondary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public function getCity()
    {
        return $this->hasOne(City::class, 'id', 'city_id');
    }

    public function getCountry()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }
}
