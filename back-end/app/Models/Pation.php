<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Pation extends  Authenticatable implements JWTSubject
{
    use Notifiable;
    protected $table = 'pation';
    public $timestamps = true;

    public $guarded = [];
    public $hidden = ['password', 'created_at', 'updated_at'];
    protected $appends = ['profile', 'cover'];


    public function has_appointment()
    {
        return $this->hasMany('App\Models\Appointment', 'pation_id')
                    ->select('time', 'date', 'type', 'pation_id', 'doctor_id');
    }

    public function scopeGetAPoointment(Builder $query)
    {
        $query->select('id')->with('has_appointment', function ($query) {
            $query->select('time', 'date', 'type', 'pation_id', 'doctor_id')
                ->with('Doctor', function ($query) {
                    $query->select('full_name','id');
                });
        })->get();
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


    public function has_diseases()
    {
        return $this->hasMany('App\Models\ChronicDiseases', 'pation_id');
    }



    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
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
// 93 Row Coded From Baraa Berkdar
