<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class CityResource extends NoveraResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'country' => $this->country,
            'timezone' => $this->timezone,
            'hero_image' => $this->hero_image,
            'ambient_color' => $this->ambient_color,
            'accent_color' => $this->accent_color,
        ];
    }
}
