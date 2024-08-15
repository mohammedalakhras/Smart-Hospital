<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Builder;

class Question extends Model 
{

    protected $table = 'questions';
    public $timestamps = true;

    protected $fillable = ['pation_id','message','NumOfViews','specializations'];
    protected $hidden   =['created_at','updated_at'];
    protected $appends  =['images'];
    public function has_replys()
    {
        return $this->hasMany('App\Models\Replie', 'qusation_id');
    }
    public function pation()
    {
        return $this->belongsTo('App\Models\Pation','pation_id');
    }

    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function scopeNotDoctorReply(Builder $query){
      $query->whereDoesntHave('has_replys')->get();
    }
    public function scopeFilter(Builder $query ,$filter){
        if(!isset($filter)){$filter = null;}
        $query->when($filter , function($query) use ($filter){
            $query->where('message','LIKE',"%$filter%");
        });
    }

    public function getSpecializationsAttribute($val){
        return $val=unserialize($val);

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
// 62 Row Coded From Baraa Berkdar
