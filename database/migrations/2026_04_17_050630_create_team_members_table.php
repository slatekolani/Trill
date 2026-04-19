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
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->text('bio');
            $table->string('avatar_url')->nullable();
            $table->string('initials', 5);
            $table->string('email')->nullable();
            $table->json('languages')->nullable();      // ["English", "Swahili"]
            $table->json('practice_areas')->nullable(); // ["Corporate Law", "IP"]
            $table->json('education')->nullable();      // [{"degree":"LLB","institution":"UDSM"}]
            $table->json('memberships')->nullable();    // ["Tanganyika Law Society"]
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_members');
    }
};
