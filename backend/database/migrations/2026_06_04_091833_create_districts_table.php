<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('districts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained()->cascadeOnDelete();

            $table->string('name');
            $table->string('slug');

            // Map positioning
            $table->decimal('map_x', 5, 2)->nullable();
            $table->decimal('map_y', 5, 2)->nullable();

            // Visual / category identity
            $table->string('tone')->nullable(); // artists, events, spaces, audio, collectives
            $table->text('description')->nullable();

            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->unique(['city_id', 'slug']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('districts');
    }
};
