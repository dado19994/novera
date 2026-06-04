<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class OpenCallResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'role_needed' => $this->role_needed,
            'discipline' => $this->discipline,
            'image' => $this->image,
            'deadline_at' => $this->isoDate($this->deadline_at),
            'reward_type' => $this->reward_type,
            'reward_details' => $this->reward_details,
            'location_mode' => $this->location_mode,
            'urgency' => $this->urgency,
            'status' => $this->status,
            'applicants_count' => $this->applicants_count,
            'tags' => $this->jsonValue($this->tags),
            'requirements' => $this->jsonValue($this->requirements),
            'is_featured' => (bool) $this->is_featured,
            'city' => $this->basicCity(),
            'district' => $this->basicDistrict(),
            'collective' => $this->basicCollective(),
            'event' => $this->basicEvent(),
            'space' => $this->basicSpace(),
        ];
    }
}
