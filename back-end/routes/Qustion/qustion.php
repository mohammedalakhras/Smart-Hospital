<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Qustion\QustionController;


    Route::group(["middleware"=>"auth:pation"],function(){

        Route::apiResource('qustions',QustionController::class);
        Route::get('incress/{id}'    ,[QustionController::class,"incresView"]); 
        Route::get('qustion/famus'  ,[QustionController::class, 'getFamus']);
    });