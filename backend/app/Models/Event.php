<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Event extends Model
{
    protected $fillable = [
        'city_id',
        'district_id',
        'space_id',
        'collective_id',
        'organizer_id',
        'title',
        'slug',
        'description',
        'type',
        'image',
        'cover_image',
        'starts_at',
        'ends_at',
        'timezone',
        'location_name',
        'address',
        'status',
        'capacity',
        'attendees_count',
        'tags',
        'is_featured',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
            'tags' => 'array',
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

    public function space(): BelongsTo
    {
        return $this->belongsTo(Space::class);
    }

    public function collective(): BelongsTo
    {
        return $this->belongsTo(Collective::class);
    }

    public function organizer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    public function openCalls(): HasMany
    {
        return $this->hasMany(OpenCall::class);
    }
}
