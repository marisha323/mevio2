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
        Schema::create('CommentRepository', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('cardId')->nullable();
            $table->foreign('cardId')->references('id')->on('CardRepository')->onDelete('set null');

            $table->string('Text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('CommentRepository');
    }
};
