<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class ActivityResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'title' => $this->title,
            'description' => $this->description,
            'metadata' => $this->jsonValue($this->metadata),
            'tone' => $this->tone,
            'occurred_at' => $this->isoDate($this->occurred_at),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
            'artist_profile' => $this->basicArtistProfile(),
            'subject' => $this->polymorphicSummary($this->whenLoaded('subject')),
        ];
    }
}
