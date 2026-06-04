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
        Schema::create('ai_matches', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('artist_profile_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('city_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('district_id')->nullable()->constrained()->nullOnDelete();

            $table->nullableMorphs('matchable');

            $table->string('title');
            $table->text('reason')->nullable();
            $table->unsignedTinyInteger('score')->default(0);
            $table->string('category')->nullable();
            $table->string('tone')->nullable();

            $table->string('status')->default('new');
            $table->json('metadata')->nullable();
            $table->timestamp('expires_at')->nullable();

            $table->timestamps();

            $table->index(['user_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_matches');
    }
};
