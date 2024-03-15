<?php

namespace App\Http\Requests\Appointment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class UpdateAppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            "date"            => "required|date",
            "time"            => "required"
        ]; 
    }
    public function messages()
    {
        return [
            "doctor_id.required"         => "اسم الدكتور مطلوب ",
            "doctor_id.exists"           => "الدكتور غير موجود",
            "date.required"              => " التاربخ مطلوب ",
            "date.date"                  => "  صيغة التاريخ غير صحيحية ",
            "time.required"              => " حقل الوقت مطلوب",
        ];
    }
    
    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }





}
