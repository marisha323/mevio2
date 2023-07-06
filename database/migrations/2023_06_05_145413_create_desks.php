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
        Schema::create('desks', function (Blueprint $table) {
            $table->id();
            $table->string('deskName');

            $table->unsignedBigInteger('userId')->nullable();
            $table->foreign('userId')->references('id')->on('users')->onDelete('set null');

            $table->boolean('isPublic')->default(false);

            $table->dateTime('dateOfCreation');

            $table->unsignedBigInteger('themeId')->nullable();
            $table->foreign('themeId')->references('id')->on('themes')->onDelete('set null');

            $table->boolean('isArchive')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('desks');
    }
};