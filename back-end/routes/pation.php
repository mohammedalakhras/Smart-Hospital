<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Pation\
{
    PationController,
    ChronicPationContrller
};
use Whoops\Run;

    Route::post('pation/register' ,          [PationController::class,'register']);
    Route::group(['prefix'=>"pation",'middleware'=>["auth:pation"]],function(){
        Route::post('update'             , [PationController::class,'update']);
        Route::get('information'         , [PationController::class,'getInformation']);
        Route::post('add/chronic_dseases',[ChronicPationContrller::class,"addChronic"]);
        Route::post('search/doctor',[PationController::class, "search"]);
    });

// 18 Row Coded From Baraa Berkdar
