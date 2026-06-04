<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class SpaceResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'type' => $this->type,
            'description' => $this->description,
            'image' => $this->image,
            'status' => $this->status,
            'capacity' => $this->capacity,
            'amenities' => $this->jsonValue($this->amenities),
            'tags' => $this->jsonValue($this->tags),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
        ];
    }
}
