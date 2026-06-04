<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class AiMatch extends Model
{
    protected $fillable = [
        'user_id',
        'artist_profile_id',
        'city_id',
        'district_id',
        'matchable_type',
        'matchable_id',
        'title',
        'reason',
        'score',
        'category',
        'tone',
        'status',
        'metadata',
        'expires_at',
    ];

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
            'expires_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function artistProfile(): BelongsTo
    {
        return $this->belongsTo(ArtistProfile::class);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }

    public function matchable(): MorphTo
    {
        return $this->morphTo();
    }
}
