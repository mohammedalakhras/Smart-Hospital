<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Doctor\StoreDoctorRequest;
use App\Models\Doctor;
use App\Trait\{
    responseTrait,
    uplodeImages
};
use DB;

class DoctorController extends Controller
{
    use responseTrait, uplodeImages;
    public function register(StoreDoctorRequest $request)
    {
        $request1 = $request->except('password');
        $request1['password'] = bcrypt($request->password);
        Doctor::create($request1);
        return $this->returnSucess('200', "تم انشاء الحساب بنجاح");
    }

    public function update(Request $request)
    {
        // return $request->user();
        $doctor_id = $request->user()->id;

        $doctor = Doctor::find($doctor_id);
        if ($doctor) {
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
                    $this->deleteImages($old_cover_image, 'Pation');
                }
                return $this->returnSucess('200', "تم تعديل البيانات بنجاح");
            });
        } else {
            return $this->returnError('201', "الدكتور غير موجود ");
        }
    }

    public function getInformation(){
      $doctor_id=auth()->user()->id;
        $doctor=Doctor::find($doctor_id);
        return $this->returnData("doctor",$doctor);
    }
}
