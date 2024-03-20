<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model 
{

    protected $table = 'appointments';
    public $timestamps = true;
    public $guarded=[];
    public $hidden =['created_at','updated_at','pation_id'];



        public function Doctor(){
            return $this->belongsTo('App\Models\Doctor','doctor_id')->select('full_name','id');
        }


    public function getTypeAttribute($val){

        switch($val){
            case 0: return $val="في الانتظار";
            case 1: return $val="تم الحجز";
            case 3: return $val= "مرفوضة";
        }

    }
    public function getStatusAttribute($val){

        switch($val){
            case 0: return $val="موعد";
            case 1: return $val=" مراجعة";
            case 3: return $val= "منتهية";
        
    }
}



}