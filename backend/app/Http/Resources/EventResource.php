<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class EventResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'type' => $this->type,
            'image' => $this->image,
            'cover_image' => $this->cover_image,
            'starts_at' => $this->isoDate($this->starts_at),
            'ends_at' => $this->isoDate($this->ends_at),
            'timezone' => $this->timezone,
            'location_name' => $this->location_name,
            'address' => $this->address,
            'status' => $this->status,
            'capacity' => $this->capacity,
            'attendees_count' => $this->attendees_count,
            'tags' => $this->jsonValue($this->tags),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
            'space' => $this->basicSpace(),
            'collective' => $this->basicCollective(),
        ];
    }
}
