<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\LiveRoomResource;
use App\Models\LiveRoom;
use Illuminate\Http\Request;

class LiveRoomController extends ApiController
{
    public function index(Request $request)
    {
        return LiveRoomResource::collection(
            $this->applyCommonFilters(LiveRoom::with(['city', 'district', 'artistProfile', 'event', 'space']), $request)
                ->where('is_active', true)
                ->orderByRaw("status = 'live' desc")
                ->orderByDesc('started_at')
                ->get(),
        );
    }

    public function show(LiveRoom $liveRoom)
    {
        return LiveRoomResource::make($liveRoom->load(['city', 'district', 'artistProfile', 'event', 'space']));
    }
}
