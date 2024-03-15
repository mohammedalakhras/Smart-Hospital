<?php

namespace App\Http\Controllers\Pation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pation;
use App\Trait\responseTrait;
use  App\Http\Requests\Pation\{
    StorePAtionRequest,
    UpdatePationRequest
};


class PationController extends Controller
{

    use responseTrait;
    public function register(StorePAtionRequest $request)
    {
       
        $request1 = $request->except('password');
        $request1['password'] = bcrypt($request->password);
        $admin = Pation::create($request1);
        if ($admin)
            return $this->returnData("data", $admin, "  تم انشاء الحساب بنجاح  ");
    }


    public function update(UpdatePationRequest $request)
    {

        $pation_id = auth()->user()->id;
        $pation = Pation::find($pation_id);
        if ($pation) {
            $update = $pation->update($request->all());
            if ($update) {
                return $this->returnSucess('200', "تم تعديل البيانات بنجاح");
            } else {
                return $this->returnError('201', "  هناك خطا بعمليه التعدبل حاول مجددا  ");
            }
        } else {
            return $this->returnError('201', "المريض غير موجود ");
        }
    }
}
