<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class ArtistProfileResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'display_name' => $this->display_name,
            'slug' => $this->slug,
            'bio' => $this->bio,
            'discipline' => $this->discipline,
            'avatar' => $this->avatar,
            'cover_image' => $this->cover_image,
            'status' => $this->status,
            'availability' => $this->availability,
            'tags' => $this->jsonValue($this->tags),
            'skills' => $this->jsonValue($this->skills),
            'profile_score' => $this->profile_score,
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
        ];
    }
}
