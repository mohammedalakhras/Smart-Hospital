<?php

use App\Models\Specialization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



// Auth Api 
include __DIR__ . "/Auth/auth.php";
// Admin APi 
include __DIR__ . "/Admin/admin.php";
// Pation Route 
include __DIR__ . '/Pation/pation.php';
// Qustion Api
include __DIR__ . "/Qustion/qustion.php";
// Admin Api
include __DIR__ . '/Doctor/doctor.php';
// Appointment Api
include __DIR__ . '/Appointment/appointment.php';

// City Api  
include __DIR__ ."/city.php";

// Specilazations Api 
include __DIR__ ."/specilazations.php";
Route::get("specializations/all", function () {
    $Specializations = Specialization::all();
    return response()->json(["status" => "true", "data" => $Specializations], 200);
});
