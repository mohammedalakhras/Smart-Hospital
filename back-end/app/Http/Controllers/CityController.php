<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
use App\Trait\responseTrait;
class CityController extends Controller
{
    use responseTrait;
    public function index(){
        $cites = City::all();
        return $this->returnData('data',$cites);
    }

}
