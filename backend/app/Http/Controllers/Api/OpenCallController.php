<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\OpenCallResource;
use App\Models\OpenCall;
use Illuminate\Http\Request;

class OpenCallController extends ApiController
{
    public function index(Request $request)
    {
        return OpenCallResource::collection(
            $this->applyCommonFilters(OpenCall::with(['city', 'district', 'collective', 'event', 'space']), $request)
                ->where('is_active', true)
                ->orderByDesc('is_featured')
                ->orderBy('deadline_at')
                ->get(),
        );
    }

    public function show(OpenCall $openCall)
    {
        return OpenCallResource::make($openCall->load(['city', 'district', 'collective', 'event', 'space']));
    }
}
