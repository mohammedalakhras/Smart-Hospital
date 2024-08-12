<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Appointment\AppointmentController;


    Route::group(["middleware"=>["auth:pation",'competInfo']],function(){

        Route::apiResource('appointments'  ,AppointmentController::class);
        Route::get('get/pation/appointments'     ,[AppointmentController::class,'getAppointmentPAtion']);
    });
    Route::controller(AppointmentController::class)
            ->middleware(["auth:doctor","competInfo"])
            ->group(function(){
                Route::get("get/doctor/appointments",'getAppointmentDoctor');
                Route::post("appointment/change/status","changeStatus");
            });
