<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpecilazationController;
use App\Models\City;

Route::apiResource('specilazations', SpecilazationController::class)->middleware('auth:admin')->except('index');

Route::get('specilazations',[SpecilazationController::class,'index']);
