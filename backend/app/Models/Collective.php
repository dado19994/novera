<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Collective extends Model
{
    protected $fillable = [
        'city_id',
        'district_id',
        'owner_id',
        'name',
        'slug',
        'description',
        'discipline',
        'image',
        'cover_image',
        'members_count',
        'recruiting_status',
        'tags',
        'links',
        'is_featured',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'links' => 'array',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function openCalls(): HasMany
    {
        return $this->hasMany(OpenCall::class);
    }
}
