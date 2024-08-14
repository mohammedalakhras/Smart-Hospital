<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model 
{

    protected $table = 'appointments';
    public $timestamps = true;
    public $guarded=[];
    public $hidden =['type','ReqInfo','created_at','updated_at','pation_id','diagnostic'];
    public $appends = ['doctor_name'];

        public function Doctor(){
            return $this->belongsTo('App\Models\Doctor','doctor_id')->select('full_name','id');
        }

        public function Pation(){
            return $this->belongsTo('App\Models\Pation','pation_id')->select('full_name','id');
        }
        public function getDoctorNameAttribute(){
              return $this->Doctor()->pluck('full_name')[0] ; 
        }


}
// 28 Row Coded From Baraa Berkdar
