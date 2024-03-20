<?php

namespace App\Http\Controllers\Pation\Chronic;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pation\ChronicRequest;
use Illuminate\Http\Request;

class ChronicPationContrller extends Controller
{
    
    public function addChronic(ChronicRequest $request){

        return $request;
    }

}
