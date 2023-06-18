<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::match(['get', 'post'], 'home_form', [ApiController::class, 'home_form']);
Route::match(['get', 'post'], 'day_month_year', [ApiController::class, 'day_month_year']);
Route::match(['get', 'post'], 'sign_up_form', [ApiController::class, 'sign_up_form']);
Route::match(['get', 'post'], 'add_address', [ApiController::class, 'add_address']);
