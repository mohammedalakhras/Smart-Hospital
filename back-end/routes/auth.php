<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post('login', [AuthController::class, 'login']);
Route::get('checkToken',[AuthController::class, 'checkToken']);
Route::controller(AuthController::class)
    ->middleware('auth.api')
    ->group(function () {
        Route::post('logout', 'logout');
    });
    
Route::post('profile', [AuthController::class,'me'])->middleware('auth:pation');
// 16 Row Coded From Baraa Berkdar
