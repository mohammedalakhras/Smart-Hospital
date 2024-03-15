<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Doctor extends  Authenticatable implements JWTSubject
{

    protected $table = 'doctors';
    public $timestamps = true;
    public $guarded = [];
    public $hidden = ['password', 'created_at', 'updated_at'];
    protected $appends = ['profile', 'cover', 'city'];

    public function has_appointment()
    {
        return $this->hasMany('Appointment', 'doctor_id');
    }
    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
    public function hasCity()
    {
        return $this->belongsTo("App\Models\City", "city_id");
    }

    public function getProfileAttribute()
    {
        $image = $this->image()->where('type', 1)->get(['image_name', 'imageable_type']);
        if (count($image) > 0) {
            $image = $image[0];
            $model = explode('\\', $image->imageable_type);
            $foldername = end($model);
            return asset("/$foldername") . "/" . $image->image_name;
        }
    }
    public function getCoverAttribute()
    {
        $image = $this->image()->where('type', 2)->get(['image_name', 'imageable_type']);
       
        if (count($image) > 0) {
            $image = $image[0];
            $model = explode('\\', $image->imageable_type);
            $foldername = end($model);
            return asset("/$foldername") . "/" . $image->image_name;
        }
    }
    public function getCityAttribute()
    {
        return $this->hasCity()->pluck('name')[0];
    }



    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
