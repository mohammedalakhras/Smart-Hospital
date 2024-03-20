<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Countriey extends Model 
{

    protected $table = 'countries';
    public $timestamps = true;

    public function has_city()
    {
        return $this->hasMany('City', 'country_id');
    }

}