<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Trait\responseTrait;

class ComplateInformation
{
    
    use responseTrait;

    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();
        if(!empty($user->mobile))
        return $next($request);
        else{
            return $this->returnError("401","يجب اكمال معلوماتك الشخصضية اولا ");
        }

    }
}
