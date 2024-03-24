<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialization extends Model 
{

    protected $table = 'specializations';
    public $timestamps = true;

    protected $fillable=['name'];
    protected $hidden =['created_at','updated_at'];


    public function has_doctors()
    {
        return $this->hasMany('Doctor', 'spec_id');
    }

}