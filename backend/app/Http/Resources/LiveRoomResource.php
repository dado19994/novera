<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class LiveRoomResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'topic' => $this->topic,
            'image' => $this->image,
            'status' => $this->status,
            'listeners_count' => $this->listeners_count,
            'speakers_count' => $this->speakers_count,
            'started_at' => $this->isoDate($this->started_at),
            'ended_at' => $this->isoDate($this->ended_at),
            'audio_url' => $this->audio_url,
            'waveform' => $this->jsonValue($this->waveform),
            'tags' => $this->jsonValue($this->tags),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
            'artist_profile' => $this->basicArtistProfile(),
            'event' => $this->basicEvent(),
            'space' => $this->basicSpace(),
        ];
    }
}
