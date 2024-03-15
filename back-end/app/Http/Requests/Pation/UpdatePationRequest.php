<?php

namespace App\Http\Requests\Pation;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePationRequest extends FormRequest
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
            "father"    => "required|string|max:255",
            "mother"            => "required|string|max:255",
            "Bdate"             => "required|date|max:255",
            "mobile"              => "required|string|max:10|min:10|unique:pation,mobile,".$this->user()->id,
            'profile_image'          => 'image|mimes:gif,png,jpg|dimensions:max_width=3840,max_height=2160|max:2700',
            'cover_image'           => 'image|mimes:gif,png,jpg|dimensions:max_width=3840,max_height=2160|max:2700',
            "city_id"   => "required|exists:cites,id",
            "chronic_id" => "exists:chronic_dseases,id"
        ];
    }
}
