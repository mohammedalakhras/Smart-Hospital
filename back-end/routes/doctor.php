<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Doctor\DoctorController;


Route::prefix('doctor')
    ->controller(DoctorController::class)
    ->group(function(){
        Route::post('register'    , 'register');
        Route::post('update'     , "update")->middleware('auth:doctor');
    });

Route::post('add/reply/{qustion}'  ,[DoctorController::class,"addReply"]);
Route::get('get/reply/{qustion}'  ,[DoctorController::class,"getReply"])->middleware('getreply');


Route::controller(DoctorController::class)
    ->prefix('doctor')
    ->middleware('auth:doctor','competInfo')
    ->group(function () {
        Route::get('information' ,'getInformation'); 
    });
