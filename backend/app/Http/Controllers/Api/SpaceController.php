<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\SpaceResource;
use App\Models\Space;
use Illuminate\Http\Request;

class SpaceController extends ApiController
{
    public function index(Request $request)
    {
        return SpaceResource::collection(
            $this->applyCommonFilters(Space::with(['city', 'district']), $request)
                ->where('is_active', true)
                ->orderByDesc('is_featured')
                ->orderBy('name')
                ->get(),
        );
    }

    public function show(Space $space)
    {
        return SpaceResource::make($space->load(['city', 'district']));
    }
}
