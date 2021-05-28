<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    // 'prefix' => 'customer',
    'namespace' =>'App\Http\Controllers',

], function ($router) {

   
    Route::post('/add-customer', 'CustomerController@store');
    Route::get('/edit-customer/{id}', 'CustomerController@edit');
    Route::post('/update-customer/{id}', 'CustomerController@update');
    Route::get('/all-customeres', 'CustomerController@index');
    Route::get('/delete-customer/{id}', 'CustomerController@destroy');
    
});