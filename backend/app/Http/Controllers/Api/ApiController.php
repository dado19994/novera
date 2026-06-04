<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class ApiController extends Controller
{
    protected function applyCommonFilters(Builder $query, Request $request): Builder
    {
        return $query
            ->when($request->query('city'), fn (Builder $query, string $slug) => $query->whereRelation('city', 'slug', $slug))
            ->when($request->query('district'), fn (Builder $query, string $slug) => $query->whereRelation('district', 'slug', $slug))
            ->when($request->boolean('featured'), fn (Builder $query) => $query->where('is_featured', true))
            ->when($request->query('status'), fn (Builder $query, string $status) => $query->where('status', $status));
    }
}
