<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends ApiController
{
    public function index(Request $request)
    {
        return EventResource::collection(
            $this->applyCommonFilters(Event::with(['city', 'district', 'space', 'collective']), $request)
                ->where('is_active', true)
                ->orderByDesc('is_featured')
                ->orderByDesc('starts_at')
                ->get(),
        );
    }

    public function show(Event $event)
    {
        return EventResource::make($event->load(['city', 'district', 'space', 'collective']));
    }
}
