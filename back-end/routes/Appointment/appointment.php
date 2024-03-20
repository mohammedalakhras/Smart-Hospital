<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Appointment\AppointmentController;


    Route::group(["middleware"=>["auth.api:pation",'competInfo']],function(){

        Route::apiResource('appointments'  ,AppointmentController::class);
        Route::get('get/appointments'     ,[AppointmentController::class,'getAppointmentPAtion']);
    });