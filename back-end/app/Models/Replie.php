<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Replie extends Model 
{

    protected $table = 'replies';
    public $timestamps = true;

    public $fillable=["reply",'date',"time",'qustion_id','doctor_name'];

    public $hidden=['created_at','updated_at','qusation_id'];
    public function has_doctors()
    {
        return $this->hasMany('Doctor', 'docotr_id');
    }

}