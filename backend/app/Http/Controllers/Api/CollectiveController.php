<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CollectiveResource;
use App\Models\Collective;
use Illuminate\Http\Request;

class CollectiveController extends ApiController
{
    public function index(Request $request)
    {
        return CollectiveResource::collection(
            $this->applyCommonFilters(Collective::with(['city', 'district']), $request)
                ->where('is_active', true)
                ->orderByDesc('is_featured')
                ->orderBy('name')
                ->get(),
        );
    }

    public function show(Collective $collective)
    {
        return CollectiveResource::make($collective->load(['city', 'district']));
    }
}
