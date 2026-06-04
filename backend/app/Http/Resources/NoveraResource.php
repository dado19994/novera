<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

abstract class NoveraResource extends JsonResource
{
    protected function basicCity(): ?array
    {
        return $this->basic($this->whenLoaded('city'), ['id', 'name', 'slug']);
    }

    protected function basicDistrict(): ?array
    {
        return $this->basic($this->whenLoaded('district'), ['id', 'name', 'slug', 'tone']);
    }

    protected function basicSpace(): ?array
    {
        return $this->basic($this->whenLoaded('space'), ['id', 'name', 'slug', 'type', 'status']);
    }

    protected function basicCollective(): ?array
    {
        return $this->basic($this->whenLoaded('collective'), ['id', 'name', 'slug', 'discipline']);
    }

    protected function basicEvent(): ?array
    {
        return $this->basic($this->whenLoaded('event'), ['id', 'title', 'slug', 'type', 'status']);
    }

    protected function basicArtistProfile(): ?array
    {
        return $this->basic($this->whenLoaded('artistProfile'), ['id', 'display_name', 'slug', 'discipline', 'status']);
    }

    protected function basic($model, array $fields): ?array
    {
        if (! $model || $model instanceof \Illuminate\Http\Resources\MissingValue) {
            return null;
        }

        return collect($fields)
            ->mapWithKeys(fn (string $field) => [$field => $model->{$field}])
            ->all();
    }

    protected function jsonValue(mixed $value): mixed
    {
        if (! is_string($value)) {
            return $value;
        }

        $decoded = json_decode($value, true);

        return json_last_error() === JSON_ERROR_NONE ? $decoded : $value;
    }

    protected function isoDate(mixed $value): ?string
    {
        return $value?->toISOString();
    }

    protected function polymorphicSummary($model): ?array
    {
        if (! $model || $model instanceof \Illuminate\Http\Resources\MissingValue) {
            return null;
        }

        return [
            'type' => class_basename($model),
            'id' => $model->id,
            'title' => $model->title ?? $model->name ?? $model->display_name ?? null,
            'slug' => $model->slug ?? null,
        ];
    }
}
