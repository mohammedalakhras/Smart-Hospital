<?php

namespace App\Http\Controllers;

use App\Models\Specialization;
use Illuminate\Http\Request;
use App\Trait\responseTrait;
class SpecilazationController extends Controller
{
    use responseTrait;
   public function index(){
    $spes= Specialization::all();
    return $this->returnData('data',$spes);
   }
}
