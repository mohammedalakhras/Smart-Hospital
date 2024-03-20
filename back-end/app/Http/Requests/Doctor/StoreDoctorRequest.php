<?php

namespace App\Http\Requests\Doctor;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Trait\responseTrait;

class StoreDoctorRequest extends FormRequest
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
            "email"     => "required|email|unique:doctors",
            'password' => [
                'required',
                'string',
                'min:10',             // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                'regex:/[@$!%*#?&]/', // must contain a special character
            ],
            "full_name" => "required|string"
        ]; 
    }

    public function messages()
    {
        return [
            "email.required"     => "حقل البريد الالكتروني مطلوب",
            "email.email"        => "حقل البريد الالكتروني غير صالح",
            "email.unique"       => "هذا البريد الالكتروني موجود مسبقا",
            "password.required"  => "كلمة السر مطلوبة ",
            "password.min"       => "  كلمة السر يجب ان تكون  اكثر من 10 خانات ",
            "password.regex"     =>"صيغة الباسورد غير صحيحة: يجب انت تضمن على الاقل حرف [a-z]  ورقم [0-9]واحدى هذه الرموز {@$!%*#?&}",
            "full_name.required" =>"حقل الاسم مطلوب ",
        ];
    }


    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }
}
