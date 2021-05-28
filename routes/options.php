<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'namespace' =>'App\Http\Controllers',

], function ($router) {

   
    Route::post('/add-options', 'CustomerController@store');
    // Route::get('/edit-customer/{id}', 'CustomerController@edit');
    // Route::post('/update-customer/{id}', 'CustomerController@update');
    // Route::get('/all-customeres', 'CustomerController@index');
    // Route::get('/delete-customer/{id}', 'CustomerController@destroy');
    
});