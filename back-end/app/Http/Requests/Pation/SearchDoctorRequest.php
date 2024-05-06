<?php

namespace App\Http\Requests\Pation;

use Illuminate\Foundation\Http\FormRequest;
use App\Trait\responseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SearchDoctorRequest extends FormRequest
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
          "city_id"  =>"exists:cites,id",
          "spec_id"  =>"exists:specializations,id"
         ]; 
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();
        throw new HttpResponseException($this->returnError(422, $errors->first()));
    }
}
