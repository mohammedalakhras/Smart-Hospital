<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginReques;
use App\Models\Pation;
use App\Trait\responseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    use responseTrait;
    public function login(LoginReques $request)
    {
        $credentials = $request->only(['email', 'password']);

        $adminToken = auth('admin')->attempt($credentials);
        $pationToken = auth('pation')->attempt($credentials);
        $doctorToken = auth('doctor')->attempt($credentials);
        if ($adminToken) {
            return $this->respondWithToken('admin', $adminToken);
        } elseif ($pationToken) {
            return $this->respondWithToken('pation', $pationToken);
        } elseif ($doctorToken) {
            return $this->respondWithToken('doctor', $doctorToken);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }


    public function me()
    {
        $pation        = auth('pation')->user()->get(['email', 'full_name']);
        return $this->returnData("pation", $pation);
    }


    // public function logout(Request $request)
    // {
    //     auth()->logout();
    //     return $this->returnSucess(200, '  تم تسجيل الخروج بنجاح ');
    // }


    public function checkToken(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            return $this->returnSucess(200, "Token Vailda");
        } catch (TokenExpiredException $e) {
            return  $this->returnError(401, 'Unauthenticated user');
        } catch (JWTException $e) {
            return  $this->returnError(401, 'token_invalid' . $e->getMessage());
        }
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($key, $token)
    {
        return response()->json([
            "type"         => $key,
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL()*60
        ]);
    }
}
