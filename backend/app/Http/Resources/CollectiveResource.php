<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class CollectiveResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'discipline' => $this->discipline,
            'image' => $this->image,
            'cover_image' => $this->cover_image,
            'members_count' => $this->members_count,
            'recruiting_status' => $this->recruiting_status,
            'tags' => $this->jsonValue($this->tags),
            'links' => $this->jsonValue($this->links),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
        ];
    }
}
