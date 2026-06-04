<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReadOnlyApiTest extends TestCase
{
    use RefreshDatabase;

    protected bool $seed = true;

    public function test_home_endpoint_returns_ok(): void
    {
        $this->getJson('/api/home')
            ->assertOk()
            ->assertJsonStructure([
                'city',
                'districts',
                'stats',
                'featured_events',
                'live_rooms',
                'featured_spaces',
                'featured_collectives',
                'open_calls',
                'activities',
                'ai_matches',
            ]);
    }

    public function test_cities_endpoint_returns_ok(): void
    {
        $this->getJson('/api/cities')->assertOk();
    }

    public function test_artists_endpoint_returns_ok(): void
    {
        $this->getJson('/api/artists')->assertOk();
    }

    public function test_events_endpoint_returns_ok(): void
    {
        $this->getJson('/api/events')->assertOk();
    }

    public function test_live_rooms_endpoint_returns_ok(): void
    {
        $this->getJson('/api/live-rooms')->assertOk();
    }

    public function test_open_calls_endpoint_returns_ok(): void
    {
        $this->getJson('/api/open-calls')->assertOk();
    }

    public function test_activities_endpoint_returns_ok(): void
    {
        $this->getJson('/api/activities')->assertOk();
    }
}
