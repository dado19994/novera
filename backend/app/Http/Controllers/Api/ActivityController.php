<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends ApiController
{
    public function index(Request $request)
    {
        return ActivityResource::collection(
            $this->applyCommonFilters(Activity::with(['city', 'district', 'artistProfile', 'subject']), $request)
                ->where('is_public', true)
                ->orderByDesc('occurred_at')
                ->limit(50)
                ->get(),
        );
    }
}
