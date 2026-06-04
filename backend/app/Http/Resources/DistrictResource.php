<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class DistrictResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'tone' => $this->tone,
            'map_x' => $this->map_x !== null ? (float) $this->map_x : null,
            'map_y' => $this->map_y !== null ? (float) $this->map_y : null,
            'description' => $this->description,
            'city' => $this->basicCity(),
        ];
    }
}
