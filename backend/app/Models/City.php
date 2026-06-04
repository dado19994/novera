<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class City extends Model
{
    public function districts(): HasMany
    {
        return $this->hasMany(District::class);
    }

    public function spaces(): HasMany
    {
        return $this->hasMany(Space::class);
    }

    public function collectives(): HasMany
    {
        return $this->hasMany(Collective::class);
    }
}
