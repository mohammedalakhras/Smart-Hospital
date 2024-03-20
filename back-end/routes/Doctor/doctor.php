<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Doctor\DoctorController;


Route::post('doctor/register', [DoctorController::class, 'register']);

Route::controller(DoctorController::class)
    ->prefix('doctor')
    ->middleware('auth:doctor')
    ->group(function () {
        Route::post('update'    , "update");
        Route::get('information','getInformation');

    });
