<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model 
{

    protected $table = 'cites';
    public $hidden=['created_at','updated_at','country_id'];
    public $timestamps = true;

    public function has_pation()
    {
        return $this->hasMany('Pation', 'city_id');
    }

    public function has_admin()
    {
        return $this->hasMany('Admin', 'city_id');
    }

}