<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\DistrictResource;
use App\Models\District;
use Illuminate\Http\Request;

class DistrictController extends ApiController
{
    public function index(Request $request)
    {
        return DistrictResource::collection(
            District::with('city')
                ->when($request->query('city'), fn ($query, string $slug) => $query->whereRelation('city', 'slug', $slug))
                ->where('is_active', true)
                ->orderBy('name')
                ->get(),
        );
    }
}
