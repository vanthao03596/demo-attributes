<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::loginUsingId(1);

Route::get('/hello', function () {
    $product = \App\Product::find(1);
    return view('welcome', compact('product'));
});

Route::post('/test', function() {
    dd(request()->all());
});

Route::group(['as' => 'adminarea.' ], function () {
// Attributes Routes
     Route::group(['as' => 'attributes.', 'prefix' => 'attributes'], function () {
         Route::get('/', 'AttributesController@index')->name('index');
         Route::get('import', 'AttributesController@import')->name('import');
         Route::post('import', 'AttributesController@stash')->name('stash');
         Route::post('hoard', 'AttributesController@hoard')->name('hoard');
         Route::get('import/logs', 'AttributesController@importLogs')->name('import.logs');
         Route::get('create', 'AttributesController@form')->name('create');
         Route::post('create', 'AttributesController@store')->name('store');
         Route::get('{attribute}', 'AttributesController@show')->name('show');
         Route::get('{attribute}/edit', 'AttributesController@form')->name('edit');
         Route::put('{attribute}/edit', 'AttributesController@update')->name('update');
         Route::get('{attribute}/logs', 'AttributesController@logs')->name('logs');
         Route::delete('{attribute}', 'AttributesController@destroy')->name('destroy');
     });
 });
