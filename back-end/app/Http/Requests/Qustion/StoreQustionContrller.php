<?php

namespace App\Http\Requests\Qustion;

use Illuminate\Foundation\Http\FormRequest;
use App\Trait\responseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class StoreQustionContrller extends FormRequest
{
   use responseTrait;
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
         "message"  =>"required|string|max:500|unique:questions,message",
         "images"    =>"array|min:1|max:3"  ,
         "images.*"  =>'image|mimes:gif,png,jpg|dimensions:max_width=3840,max_height=2160|max:2700',
        ];
    }

    public function messages()
    {
            return [
                "message.required"      =>"السؤال مطلوب ",
                "message.max"           =>"يجب ان بكةن السؤال اقل من 500حرف",
                "message.unique"        =>"السؤال موجود مسبقا ",
                "images.*.image"        =>"الملف المرفوع ليس صورة ",
                "images.*.mimes"        => "صيغة الصورة غير صحيحة"   
            ];

    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }
}
