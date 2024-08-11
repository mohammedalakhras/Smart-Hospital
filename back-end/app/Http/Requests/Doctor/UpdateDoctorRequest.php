<?php

namespace App\Http\Requests\Doctor;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDoctorRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }

  
    public function rules(): array
    {
        return [
            "full_name"           =>"string",
            "SSN"                 =>"required|string|max:255",
            "info"                =>"required|string|max:500",
            "Telephone"           =>"required|string|unique:doctors,Telephone,".$this->user()->id,
            "External"            => "required|string|max:10|min:10|unique:doctors,mobile,".$this->user()->id,
            "father"              => "required|string|max:255",
            "mother"              => "required|string|max:255",
            "Bdate"               => "required|date|max:255",
            "mobile"              => "required|string|max:10|min:10|unique:doctors,mobile,".$this->user()->id,
            'profile_image'       => 'image|mimes:gif,png,jpg|dimensions:max_width=3840,max_height=2160|max:2700',
            'cover_image'         => 'image|mimes:gif,png,jpg|dimensions:max_width=3840,max_height=2160|max:2700',
            "city_id"             => "required|exists:cites,id",
            "spec_id"          => "exists:specializations,id"
        ];
    }
}
