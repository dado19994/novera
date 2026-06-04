<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\AiMatchResource;
use App\Models\AiMatch;
use App\Models\User;
use Illuminate\Http\Request;

class AiMatchController extends ApiController
{
    public function index(Request $request)
    {
        $userId = $request->integer('user_id') ?: User::where('email', 'luca@novera.test')->value('id');

        return AiMatchResource::collection(
            $this->applyCommonFilters(AiMatch::with(['city', 'district', 'artistProfile', 'matchable']), $request)
                ->when($userId, fn ($query, int $userId) => $query->where('user_id', $userId))
                ->orderByDesc('score')
                ->get(),
        );
    }
}
