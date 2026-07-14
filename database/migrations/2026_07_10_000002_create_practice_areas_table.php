<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('practice_areas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('tagline')->nullable();
            $table->text('summary')->nullable();
            $table->longText('intro')->nullable();
            $table->string('image_url', 1000)->nullable();
            $table->json('services')->nullable();
            $table->json('client_needs')->nullable();
            $table->text('why_trill')->nullable();
            $table->json('related_areas')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('show_in_nav')->default(true);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('practice_areas');
    }
};
