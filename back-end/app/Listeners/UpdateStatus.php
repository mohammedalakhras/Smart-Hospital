<?php

namespace App\Listeners;

use App\Models\Appointment;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Trait\responseTrait;
class UpdateStatus
{
  use responseTrait;
    public function __construct()
    {}

    public function handle(object $event)
    {
        $appointment= Appointment::where("doctor_id",auth()->user()->id)->where("id",$event->request->appointment_id)->get()[0];
        if($appointment->count()>0){
            if($event->request->status =="reject" || $event->request->status=="finshed")
            $appointment->delete();
            else
            $appointment->update($event->request->except('appointment_id'));
            
            return $this->returnSucess(200,"تم تفير حالة الموعد ");
        }else{
            return $this->returnError(404,"الموعد غير موجود ");
        }
    }
}
