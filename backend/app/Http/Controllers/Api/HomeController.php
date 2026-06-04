<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ActivityResource;
use App\Http\Resources\AiMatchResource;
use App\Http\Resources\CityResource;
use App\Http\Resources\CollectiveResource;
use App\Http\Resources\DistrictResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\LiveRoomResource;
use App\Http\Resources\OpenCallResource;
use App\Http\Resources\SpaceResource;
use App\Models\Activity;
use App\Models\AiMatch;
use App\Models\ArtistProfile;
use App\Models\City;
use App\Models\LiveRoom;
use App\Models\OpenCall;
use App\Models\Space;
use App\Models\User;

class HomeController extends ApiController
{
    public function __invoke(): array
    {
        $city = City::where('slug', 'rome')->firstOrFail();
        $luca = User::where('email', 'luca@novera.test')->first();

        return [
            'city' => CityResource::make($city),
            'districts' => DistrictResource::collection($city->districts()->orderBy('name')->with('city')->get()),
            'stats' => [
                'artists_active' => ArtistProfile::where('city_id', $city->id)->where('is_active', true)->count(),
                'live_rooms' => LiveRoom::where('city_id', $city->id)->where('status', 'live')->count(),
                'open_calls' => OpenCall::where('city_id', $city->id)->where('status', 'open')->count(),
                'spaces_active' => Space::where('city_id', $city->id)->where('is_active', true)->count(),
            ],
            'featured_events' => EventResource::collection(
                $city->events()->with(['city', 'district', 'space', 'collective'])
                    ->where('is_featured', true)
                    ->orderByDesc('starts_at')
                    ->limit(6)
                    ->get(),
            ),
            'live_rooms' => LiveRoomResource::collection(
                $city->liveRooms()->with(['city', 'district', 'artistProfile', 'event', 'space'])
                    ->orderByRaw("status = 'live' desc")
                    ->orderByDesc('started_at')
                    ->limit(6)
                    ->get(),
            ),
            'featured_spaces' => SpaceResource::collection(
                $city->spaces()->with(['city', 'district'])
                    ->where('is_featured', true)
                    ->orderBy('name')
                    ->limit(6)
                    ->get(),
            ),
            'featured_collectives' => CollectiveResource::collection(
                $city->collectives()->with(['city', 'district'])
                    ->where('is_featured', true)
                    ->orderBy('name')
                    ->limit(6)
                    ->get(),
            ),
            'open_calls' => OpenCallResource::collection(
                $city->openCalls()->with(['city', 'district', 'collective', 'event', 'space'])
                    ->where('status', 'open')
                    ->orderByDesc('is_featured')
                    ->orderBy('deadline_at')
                    ->limit(6)
                    ->get(),
            ),
            'activities' => ActivityResource::collection(
                Activity::with(['city', 'district', 'artistProfile', 'subject'])
                    ->where('city_id', $city->id)
                    ->where('is_public', true)
                    ->orderByDesc('occurred_at')
                    ->limit(8)
                    ->get(),
            ),
            'ai_matches' => AiMatchResource::collection(
                AiMatch::with(['city', 'district', 'artistProfile', 'matchable'])
                    ->when($luca, fn ($query) => $query->where('user_id', $luca->id))
                    ->orderByDesc('score')
                    ->limit(4)
                    ->get(),
            ),
        ];
    }
}
