<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OpenCall extends Model
{
    protected $fillable = [
        'city_id',
        'district_id',
        'collective_id',
        'event_id',
        'space_id',
        'creator_id',
        'title',
        'slug',
        'description',
        'role_needed',
        'discipline',
        'image',
        'deadline_at',
        'reward_type',
        'reward_details',
        'location_mode',
        'urgency',
        'status',
        'applicants_count',
        'tags',
        'requirements',
        'is_featured',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'deadline_at' => 'datetime',
            'tags' => 'array',
            'requirements' => 'array',
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

    public function collective(): BelongsTo
    {
        return $this->belongsTo(Collective::class);
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function space(): BelongsTo
    {
        return $this->belongsTo(Space::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}
