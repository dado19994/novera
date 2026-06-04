<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LiveRoom extends Model
{
    protected $fillable = [
        'city_id',
        'district_id',
        'host_id',
        'artist_profile_id',
        'event_id',
        'space_id',
        'title',
        'slug',
        'description',
        'topic',
        'image',
        'status',
        'listeners_count',
        'speakers_count',
        'started_at',
        'ended_at',
        'audio_url',
        'waveform',
        'tags',
        'is_featured',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'ended_at' => 'datetime',
            'waveform' => 'array',
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

    public function host(): BelongsTo
    {
        return $this->belongsTo(User::class, 'host_id');
    }

    public function artistProfile(): BelongsTo
    {
        return $this->belongsTo(ArtistProfile::class);
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function space(): BelongsTo
    {
        return $this->belongsTo(Space::class);
    }
}
