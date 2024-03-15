<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Disease extends Model 
{

    protected $table = 'diseases';
    public $timestamps = true;

    public function has_diseases()
    {
        return $this->hasMany('ChronicDiseases', 'diseases_id');
    }

}