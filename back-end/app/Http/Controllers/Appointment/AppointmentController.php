<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Appointment\
{
    AppointmentRequst,
    UpdateAppointmentRequest
};
use App\Models\Appointment;
use App\Models\Pation;
use App\Trait\responseTrait;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    use responseTrait;
    // تخزين موعد لمريض
    public function store(Request $request){
        $appointment=Appointment::create([
            "doctor_id"  =>$request->doctor_id,
            "time"       =>$request->time,
            "date"       =>$request->date,
            "pation_id"  =>auth()->user()->id
        ]);
        if($appointment){
            return $this->returnSucess("200","تم اضافة الموعد بجاح ");
        }

    }

    public function update(UpdateAppointmentRequest $request,$id){
       
        $appointment=Appointment::find($id);
        if($appointment){
            $appointment->update($request->all());
            return $this->returnSucess(200,"تم التعديل بنجاح");
        }else{
            return $this->returnError('422'," هذا الموعد غير موجود");
        }


    }



    public function getAppointmentPAtion(){
        $id=auth()->user()->id;
        $appointments=Pation::with(['has_appointment.Doctor'])->find($id);
        return $this->returnData('data',$appointments);

    }



}
