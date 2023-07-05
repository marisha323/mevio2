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
        Schema::create('card', function (Blueprint $table) {
            $table->id();
            $table->string('cardName');
            $table->string('description');

            $table->unsignedBigInteger('columnId')->nullable();
            $table->foreign('columnId')->references('id')->on('column')->onDelete('set null');


            $table->unsignedBigInteger('userId')->nullable();
            $table->foreign('userId')->references('id')->on('users')->onDelete('set null');

            $table->dateTime('deadLine');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card');
    }
};
