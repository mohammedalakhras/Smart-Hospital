<?php

namespace App\Trait;


trait responseTrait
{
  public function returnError($code="E00",$msg=""){
    return response()->json([
        "status"=>false,
        "msg"=>$msg
    ],$code);

  }
  public function returnSucess($code="200",$msg=""){
    return response()->json([
        "status"=>true,
        "code"=>$code,
        "msg"=>$msg
    ]);
  }

  public function returnData($key,$value,$msg=""){
    return response()->json([
        "status"=>true,
        "code"=>"200",
        $key=>$value,
        "msg" =>$msg
    ]);
  }
}
