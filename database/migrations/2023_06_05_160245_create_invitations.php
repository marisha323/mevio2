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
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('deskId')->nullable();
            $table->foreign('deskId')->references('id')->on('desks')->onDelete('set null');

            $table->unsignedBigInteger('senderId')->nullable();
            $table->foreign('senderId')->references('id')->on('users')->onDelete('set null');

            $table->unsignedBigInteger('targetId')->nullable();
            $table->foreign('targetId')->references('id')->on('users')->onDelete('set null');


            $table->boolean('isAccept')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
