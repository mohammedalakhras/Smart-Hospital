<?php

namespace App\Http\Requests\Appointment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Trait\responseTrait;
class AppointmentRequst extends FormRequest
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
            "doctor_id"       => "required|exists:doctors,id", 
        ];
    }
    public function messages()
    {
        return [
            "doctor_id.required"         => "اسم الدكتور مطلوب ",
            "doctor_id.exists"           => "الدكتور غير موجود",
            
        ];
    }
    
    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }
}
