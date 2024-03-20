<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use App\Trait\responseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class LoginReques extends FormRequest
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
            "email"     => "required|email|",
            "password"  => "required|min:8"
        ];
    }

    public function messages(){
        return [
           "email.required"     =>"حقل البريد الالكتروني مطلوب",
           "email.email"        =>"حقل البريد الالكتروني غير صالح",
           "password.required"  =>"كلمة السر مطلوبة ",
           "password.min"      =>"  كلمة السر يجب ان تكون  اكثر من  8 خانات "
        ];

    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422,$errors->first()));
    }
}
