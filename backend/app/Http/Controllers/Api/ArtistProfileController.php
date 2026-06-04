<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ArtistProfileResource;
use App\Models\ArtistProfile;
use Illuminate\Http\Request;

class ArtistProfileController extends ApiController
{
    public function index(Request $request)
    {
        return ArtistProfileResource::collection(
            $this->applyCommonFilters(ArtistProfile::with(['city', 'district']), $request)
                ->where('is_active', true)
                ->orderByDesc('is_featured')
                ->orderByDesc('profile_score')
                ->get(),
        );
    }

    public function show(ArtistProfile $artistProfile)
    {
        return ArtistProfileResource::make($artistProfile->load(['city', 'district']));
    }
}
