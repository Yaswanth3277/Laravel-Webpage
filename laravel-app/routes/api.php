<?php

use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register',[UserController::class, 'register']);

Route::post('/login',[UserController::class, 'login']);

Route::post('/residentprofile',[UserController::class, 'visitorforms']);

Route::post('/resident',[UserController::class, 'updateprofile']);

Route::post('/homevisit', [UserController::class, 'updatevisit']);

Route::post('/visitor', [UserController::class, 'visitapartment']);

Route::post('/manager', [UserController::class, 'apartmentdata']);