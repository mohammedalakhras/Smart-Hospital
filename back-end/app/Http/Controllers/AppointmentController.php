<?php

namespace App\Http\Controllers;
use App\Events\UpdateStatusAppointment;
use App\Http\Controllers\Controller;
use App\Http\Requests\Appointment\
{
    AppointmentRequst,
    UpdateAppointmentRequest,
    UpdateStatusRequest
};
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Pation;
use App\Trait\responseTrait;
use Illuminate\Support\Facades\Event;

class AppointmentController extends Controller
{
    use responseTrait;
    // تخزين موعد لمريض
    public function store(AppointmentRequst $request){
        $appointment=Appointment::create([
            "doctor_id"  =>$request->doctor_id,
            "pation_id"  =>auth()->user()->id,
            "ReqInfo"    =>$request->optinal_info
        ]);
        if($appointment){
            return $this->returnSucess("200","تم اضافة الموعد بجاح ");
        }
    }

    public function update(UpdateAppointmentRequest $request,$id){
        $appointment=Appointment::where("pation_id",auth()->user()->id)->where('id',$id)->get();
        if($appointment->count()>0){
            $appointment[0]->update($request->all());
            return $this->returnSucess(200,"تم التعديل بنجاح");
        }else{
            return $this->returnError('422'," هذا الموعد غير موجود");
        }
    }
    public function getAppointmentPAtion(){
        $id=auth()->user()->id;
        $appointments=Appointment::with("Doctor")->where('pation_id',$id)->get();
        return $this->returnData('data',$appointments);
    }
    public function getAppointmentDoctor(){
        $id=auth()->user()->id;
        $appointments=Appointment::with("pation")->where('doctor_id',$id)->get();
        return $this->returnData('data',$appointments);

    }
    public function changeStatus(UpdateStatusRequest $request){
        $appointment_id = Appointment::find($request->appointment_id);
        $user=Pation::find($appointment_id->pation_id);
        $doctor_name = Doctor::find($appointment_id)[0]->full_name;
        Event::dispatch(new UpdateStatusAppointment($request,$user,$doctor_name)); 
        return $this->returnSucess(200,"تم تعديل الحالة");
        }
}

//55 Row Coded  From Baraa Berkdar
