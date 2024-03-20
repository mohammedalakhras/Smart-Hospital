<?php

namespace App\Http\Requests\Pation;

use Illuminate\Foundation\Http\FormRequest;
use App\Trait\responseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ChronicRequest extends FormRequest
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
            "diseases_id"    =>"required|array|min:1",
            "diseases_id.*"  =>"exists:diseases,id"
        ];
    }

    public function messages()
    {
        return [
            "diseases_id.required"  =>"اسماء الامراض مطلوبة",
            "diseases_id.*"         =>"المرض المحدد غير موجود"
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }

}
