<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Http\Requests\Qustion\{
    StoreQustionContrller,
};
use App\Trait\{
    responseTrait,
    uplodeImages
};
use Illuminate\Http\Request;
use DB;

class QustionController extends Controller
{
    use responseTrait, uplodeImages;
    public function index()
    {
        $qustions = Question::with('has_replys')->where('pation_id',auth()->user()->id)->get();
        return $this->returnData('data', $qustions);
    }
    public function allQustion(Request $request){
        $qustions = Question::filter($request->filter)->get();
        return $this->returnData('data', $qustions);
    }

    public function show(Question $qustion){
        return $this->returnData("data",$qustion->load('has_replys'));
    }
    public function store(StoreQustionContrller $request)
    {
        return DB::transaction(function () use ($request) {
            $pation_id = auth()->user()->id;
            $images = $request->images;
            $qustion = Question::create([
                "message"          => $request->message,
                'pation_id'        => $pation_id,
                "specializations"  =>serialize($request->specializations)
            ]);
            if($images){
            $names = $this->saveImages($images, "Question");
            $qustion->createManyImages($names);
            }
            return $this->returnSucess("200", "تم اضافة السؤال بنجاح ");
        });
    }
    public function incresView(string $id)
    {
        $qustion = Question::find($id);
        if ($qustion) {
            $newViews = $qustion->NumOfViews + 1;
            $qustion->update(["NumOfViews" => $newViews]);
            return $this->returnSucess(200, "تم زيادة المشاهدات");
        }else{
            return $this->returnError(404,"السؤال غير موجود");
        }
    }
    public function update(Request $request, string $id)
    {
        $qustion = Question::NotDoctorReply()->find($id);
        if ($qustion && $qustion->pation_id == auth()->user()->id) {
            $qustion->update($request->except('images'));
            $qustion->update(["specializations"  =>serialize($request->specializations)]);
            if ($request->hasFile('images')) {
                $old_names = $qustion->image()->pluck('image_name');
                $names     = $this->saveImages($request->images, "Question");
                $qustion->image()->delete();
                $this->deleteImages($old_names, "Question");
                $qustion->createManyImages($names);
            }
            return $this->returnSucess("200", "تم تعديل السؤال بنجاح");
        } else {
            return $this->returnError('401', "السؤال غير موجود");
        }
    }
    public function destroy(string $id)
    {
        $qustion = Question::find($id);
        if ($qustion) {
            return DB::transaction(function () use ($id, $qustion) {
                $old_names = $qustion->image->pluck('image_name');
                $qustion->image()->delete();
                $qustion->delete();
                $this->deleteImages($old_names, "Question");
                return $this->returnSucess(200, "تم حذف السؤال بنجاح");
            });
        }else{
            return $this->returnError('401', "السؤال غير موجود");

        }
    }
    public function getFamus(){
        $qustions=Question::orderBy("NumOfViews","desc")->take(5)->get();
        return $this->returnData("qustions",$qustions);
    }
    public function getQustionToDoctor(){
        $doctor_id = auth()->user()->full_name;
        $qustions = Question::with('has_replys')->whereRelation('has_replys','doctor_name',$doctor_id)->get();
        return $this->returnData('data', $qustions);        
    }
// 103 Row coded From Baraa Berkdar 





}
