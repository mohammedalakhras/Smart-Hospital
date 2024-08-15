<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
class Image extends Model
{
    use HasFactory;

    public $fillable=['image_name','type'];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
// 18 Row Coded From Baraa Berkdar
