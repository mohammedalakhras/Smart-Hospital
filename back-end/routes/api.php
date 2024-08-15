<?php

use App\Models\Specialization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Auth Api 
include __DIR__ . "/auth.php";
// Admin APi 
include __DIR__ . "/admin.php";
// Pation Route 
include __DIR__ . '/pation.php';
// Qustion Api
include __DIR__ . "/qustion.php";
// Doctor Api
include __DIR__ . '/doctor.php';
// Appointment Api
include __DIR__ . '/appointment.php';

// City Api  
include __DIR__ ."/city.php";

// Specilazations Api 
include __DIR__ ."/specilazations.php";
Route::get("specializations/all", function () {
    $Specializations = Specialization::all();
    return response()->json(["status" => "true", "data" => $Specializations], 200);
});


// Coded From Baraa Berkdar 