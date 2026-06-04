<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class AiMatchResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'reason' => $this->reason,
            'score' => $this->score,
            'category' => $this->category,
            'tone' => $this->tone,
            'status' => $this->status,
            'metadata' => $this->jsonValue($this->metadata),
            'expires_at' => $this->isoDate($this->expires_at),
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
            'artist_profile' => $this->basicArtistProfile(),
            'matchable' => $this->polymorphicSummary($this->whenLoaded('matchable')),
        ];
    }
}
