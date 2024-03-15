<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use App\Trait\responseTrait;

use JWTAuth;
class AssignGuard
{
    use responseTrait;
    public function handle(Request $request, Closure $next,$guard=null)
    {
        if($guard == null){
            $guard='api';
        }
            // auth()->shouldUse($guard); //shoud you user guard / table
            // $token = $request->header('token');
            // $request->headers->set('token', (string) $token, true);
            // $request->headers->set('Authorization', 'Bearer '.$token, true);
            // try {
            //   //  $user = $this->auth->authenticate($request);  //check authenticted user
            //     $user = JWTAuth::parseToken()->authenticate();
            // } catch (TokenExpiredException $e) {
            //     return  $this -> returnError(401,'Unauthenticated user');
            // } catch (JWTException $e) {

                // return  $this -> returnError(401, 'token_invalid'.$e->getMessage());
            // }
         return $next($request);
    }
}
