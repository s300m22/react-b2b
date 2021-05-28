<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => [
            'login',
            'register',
            'me',
            'delete',
            'edit',
            'update'
            ]
            ]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

   /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'firstname' =>  'required|string|between:2,100',
            'lastname'  =>  'required|string|between:2,100',
            'username'  =>  'required|string|max:100|unique:users',
            'email'     =>  'required|string|email|max:100|unique:users',
            'password'  =>  'required|string|min:6',
            'email_verified_at' => now()
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(User::all());
        // return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
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
    
    public function delete($id)
    {
                $user = User::find($id);
                $user->delete($id);
                if(!$user){
                     return response()->json(['message' => 'false']);
                }
               
                return response()->json(['message' => 'true','data'=>$user->delete($id)]);
                
    }
    
    public function edit($id)
    {
                $user = User::find($id);
                if(!$user){
                     return response()->json(['message' => 'false']);
                }
               
                return response()->json(['message' => 'true','data'=>$user]);
                
    }
    
      /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'firstname' =>  'required|string|between:2,100',
            'lastname'  =>  'required|string|between:2,100',
            // 'username'  =>  'required|string|max:100|unique:users',
            'email'     =>  'required|string|email|max:100',
            'password'  =>  'required|string|min:6',
            'email_verified_at' => now()
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        
        // $user = User::create(array_merge(
        //             $validator->validated(),
        //             ['password' => bcrypt($request->password)]
        //         ));
        
        $user = new User();
        $user->exists = true;
        $user->id = $id; //already exists in database.
        // $user->username = $request->username;
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->notification = $request->notification;
        $user->role = $request->role;
        $user->status = $request->status;
        $user->save();

        return response()->json([
            'message' => 'User successfully updated',
            'user' => $user
        ], 201);
    }
    
    

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
