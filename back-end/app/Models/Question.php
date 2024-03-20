<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Builder;

class Question extends Model 
{

    protected $table = 'questions';
    public $timestamps = true;

    protected $fillable = ['pation_id','message','NumOfViews'];
    protected $hidden   =['created_at','updated_at','pation_id'];
    protected $appends  =['images'];
    public function has_replys()
    {
        return $this->hasMany('App\Models\Replie', 'qusation_id');
    }

    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function scopeNotDoctorReply(Builder $query){
      $query->whereDoesntHave('has_replys')->get();
    }

    public function getImagesAttribute(){
        return $this->image()->get(['image_name','imageable_type'])
        ->map(function($imag){
                $model= explode('\\',$imag->imageable_type);
                $foldername=end($model);
                return asset("/$foldername")."/".$imag->image_name;
        });
    }

    public function createManyImages($images){

        foreach($images as $image)
            $this->image()->create(["image_name"=>$image,"type"=>1]);
        }

}