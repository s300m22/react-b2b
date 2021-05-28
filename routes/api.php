<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' =>'App\Http\Controllers',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('update/{id}', 'AuthController@update');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::get('delete/{id}', 'AuthController@delete');
    Route::get('edit/{id}', 'AuthController@edit');
   

});

Route::group([

    'middleware' => 'api',
    'prefix' => 'product',
    'namespace' =>'App\Http\Controllers',

], function ($router) {

    Route::post('add', 'ProductController@addProduct');
    Route::get('all', 'ProductController@allProduct');
    Route::get('delete/{id}', 'ProductController@delete');
    Route::get('edit/{id}', 'ProductController@edit');
    Route::post('update/{id}', 'ProductController@update');

});

Route::group([

    'middleware' => 'api',
    'prefix' => 'vat',
    'namespace' =>'App\Http\Controllers',

], function ($router) {

    // Route::resource('/', 'VatController');
    Route::post('/update', 'VatController@update');
    Route::get('/allvat', 'VatController@create');
    Route::get('/add-class-tax', 'VatController@addClassTax');
    Route::post('/add-tax-rate', 'VatController@addTaxRate');
    Route::get('/all-tax-class/{id}', 'VatController@allTaxClassById');
    
    

});



Route::prefix('customer')
    ->group(base_path('routes/customer.php'));

    Route::prefix('options')
    ->group(base_path('routes/options.php'));
