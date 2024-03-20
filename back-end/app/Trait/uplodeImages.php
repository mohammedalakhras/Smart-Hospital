<?php

namespace App\Trait;

trait uplodeImages
{
    public function saveImages($images, $path)
    {
        for ($i = 0; $i < count($images); $i++) {
            $names[] = uniqid() . '_' . rand(1, 1000) .'.'. $images[$i]->getClientOriginalExtension();
            $images[$i]->storeAs($path,$names[$i]);
        }
        return $names;
    }

    public function deleteImages($images,$path){

        foreach ($images as $image){

            unlink(public_path($path."/".$image));
        }

    }
}

