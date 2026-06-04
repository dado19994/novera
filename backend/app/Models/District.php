<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class District extends Model
{
    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
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
