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
        Schema::create('Invitation', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deskId')->nullable();
            $table->foreign('deskId')->references('id')->on('Desk')->onDelete('set null');

            $table->unsignedBigInteger('SenderId')->nullable();
            $table->foreign('SenderId')->references('id')->on('users')->onDelete('set null');

            $table->unsignedBigInteger('TargetId')->nullable();
            $table->foreign('TargetId')->references('id')->on('users')->onDelete('set null');


            $table->boolean('IsAccept')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Invitation');
    }
};
