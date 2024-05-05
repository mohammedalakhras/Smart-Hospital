<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;
use App\Models\City;

Route::apiResource('cites', CityController::class)->middleware('auth:admin')->except('index');

Route::get('cites',[CityController::class,'index']);
