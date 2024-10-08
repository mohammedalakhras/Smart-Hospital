<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Http\Requests\Doctor\{
    StoreDoctorRequest,
    UpdateDoctorRequest
};
use App\Models\{
    Doctor,
    Question
};
use App\Trait\{
    responseTrait,
    uplodeImages
};

class DoctorController extends Controller
{
    use responseTrait, uplodeImages;
    public function index(){
        return $this->returnData('data',Doctor::all());
    }
    public function register(StoreDoctorRequest $request)
    {
        $request1 = $request->except('password');
        $request1['password'] = bcrypt($request->password);
        Doctor::create($request1);
        return $this->returnSucess('200', "تم انشاء الحساب بنجاح");
    }
    public function update(UpdateDoctorRequest $request)
    {
        $doctor = Doctor::find($request->user()->id);
        return DB::transaction(function () use ($request, $doctor) {
            $doctor->update($request->except(['profile_image', 'cover_image']));
            if ($request->hasFile('profile_image')) {
                $old_profile_image = $doctor->image()->where('type', 1)->pluck('image_name');
                $doctor->image()->where('type', 1)->delete();
                // Uplode To Serve 
                $image_name = $this->saveImages([$request->profile_image], "Doctor")[0];
                $doctor->image()->where('type', 1)->updateOrCreate(['image_name' => $image_name, "type" => 1]);
                $this->deleteImages($old_profile_image, 'Doctor');
            }
            if ($request->hasFile('cover_image')) {
                $old_cover_image   = $doctor->image()->where('type', 2)->pluck('image_name');
                $doctor->image()->where('type', 2)->delete();
                // Uplode To Serve 
                $image_name = $this->saveImages([$request->cover_image], "Doctor")[0];
                $doctor->image()->where('type', 2)->updateOrCreate(['image_name' => $image_name, "type" => "2"]);
                $this->deleteImages($old_cover_image, 'Doctor');
            }
            return $this->returnSucess('200', "تم تعديل البيانات بنجاح");
        });
    }
    public function addReply(Request $request, Question $qustion)
    {
        $request->merge([
            "date"          => date('y:m:h'),
            "time"          => now(),
            "qusation_id"   => $qustion->id
        ]);
        if (auth('doctor')->user()) {
            $request->merge(['doctor_name' => auth('doctor')->user()->full_name]);
            $qustion->has_replys()->create($request->all());
        } elseif (auth('pation')->user()) {
            $pation_id = $qustion->pation->id;
            if (auth('pation')->user()->id == $pation_id) {
                $qustion->has_replys()->create($request->all());
            } else {
                return $this->returnError(401, "Unauthorized");
            }
        } else {
            return $this->returnError(401, "Unauthorized");
        }
        return $this->returnSucess(200, "تم ارسال الرد ");
    }

    public function getReply(Question $qustion){
       return $qustion->has_replys()->orderBy("date",'asc')->orderBy('time','asc')->get(['date','time','reply','doctor_name']);
    }
    public function getInformation()
    {
        $doctor_id = auth()->user()->id;
        
        $doctor = Doctor::with("specialazation:name,id")->where('id',$doctor_id)->get();
        
        return $this->returnData("doctor", $doctor);
    }
}


// 90 Row Coded From Baraa Berkdar  