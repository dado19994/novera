<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CityResource;
use App\Models\City;

class CityController extends ApiController
{
    public function index()
    {
        return CityResource::collection(
            City::where('is_active', true)->orderBy('name')->get(),
        );
    }

    public function show(City $city)
    {
        return CityResource::make($city);
    }
}
