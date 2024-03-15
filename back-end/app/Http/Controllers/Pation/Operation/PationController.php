<?php

namespace App\Http\Controllers\Pation\Operation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pation;
use App\Trait\{
    uplodeImages,
    responseTrait
};
use DB;
use  App\Http\Requests\Pation\{
    StorePAtionRequest,
    UpdatePationRequest
};
class PationController extends Controller
{

    use responseTrait,uplodeImages;
    public function register(StorePAtionRequest $request)
    {
       
        $request1 = $request->except('password');
        $request1['password'] = bcrypt($request->password);
        $admin = Pation::create($request1);
        if ($admin)
            return $this->returnData("data", "  تم انشاء الحساب بنجاح  ");
    }


    public function update(UpdatePationRequest $request)
    {
        $pation_id = auth()->user()->id;
        $pation = Pation::find($pation_id);
        if ($pation) {
        return DB::transaction(function () use ($request,$pation) {
            $pation->update($request->except(['profile_image','cover_image']));
            if($request->hasFile('profile_image')){
                $old_profile_image = $pation->image()->where('type',1)->pluck('image_name');
                $pation->image()->where('type',1)->delete();
                // Uplode To Serve 
                $image_name=$this->saveImages([$request->profile_image],"Pation")[0];
                $pation->image()->where('type',1)->updateOrCreate(['image_name'=>$image_name,"type"=>1]);
                $this->deleteImages($old_profile_image,'Pation');
            }
            if($request->hasFile('cover_image')){
                $old_cover_image   = $pation->image()->where('type',2)->pluck('image_name');
                $pation->image()->where('type',2)->delete();
                // Uplode To Serve 
                $image_name=$this->saveImages([$request->cover_image],"Pation")[0];
                $pation->image()->where('type',2)->updateOrCreate(['image_name'=>$image_name,"type"=>"2"]);
                $this->deleteImages($old_cover_image,'Pation');
            }
            return $this->returnSucess('200', "تم تعديل البيانات بنجاح");
        });
        } else {
            return $this->returnError('201', "المريض غير موجود ");
        }
    }

    public function getInformation(){
        $pation_id=auth()->user()->id;
        $pation=Pation::with('has_diseases')->find($pation_id);
        return $this->returnData("pation",$pation);
    }

}
