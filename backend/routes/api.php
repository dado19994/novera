<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\AiMatchController;
use App\Http\Controllers\Api\ArtistProfileController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CollectiveController;
use App\Http\Controllers\Api\DistrictController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\LiveRoomController;
use App\Http\Controllers\Api\OpenCallController;
use App\Http\Controllers\Api\SpaceController;
use Illuminate\Support\Facades\Route;

Route::get('/home', HomeController::class);

Route::get('/cities', [CityController::class, 'index']);
Route::get('/cities/{city:slug}', [CityController::class, 'show']);

Route::get('/districts', [DistrictController::class, 'index']);

Route::get('/artists', [ArtistProfileController::class, 'index']);
Route::get('/artists/{artistProfile:slug}', [ArtistProfileController::class, 'show']);

Route::get('/spaces', [SpaceController::class, 'index']);
Route::get('/spaces/{space:slug}', [SpaceController::class, 'show']);

Route::get('/collectives', [CollectiveController::class, 'index']);
Route::get('/collectives/{collective:slug}', [CollectiveController::class, 'show']);

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event:slug}', [EventController::class, 'show']);

Route::get('/live-rooms', [LiveRoomController::class, 'index']);
Route::get('/live-rooms/{liveRoom:slug}', [LiveRoomController::class, 'show']);

Route::get('/open-calls', [OpenCallController::class, 'index']);
Route::get('/open-calls/{openCall:slug}', [OpenCallController::class, 'show']);

Route::get('/activities', [ActivityController::class, 'index']);
Route::get('/ai-matches', [AiMatchController::class, 'index']);
