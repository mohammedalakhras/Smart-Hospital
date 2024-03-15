<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Replie extends Model 
{

    protected $table = 'replies';
    public $timestamps = true;

    public function has_doctors()
    {
        return $this->hasMany('Doctor', 'docotr_id');
    }

}