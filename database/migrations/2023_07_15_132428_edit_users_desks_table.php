<?php

use App\Models\Desk;
use App\Models\User;
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
        Schema::dropIfExists('desks_users');
        Schema::create('desk_user',function (Blueprint $table){
            $table->id();
            $table->foreignIdFor(Desk::class)
                ->nullable()
                ->constrained()
                ->onDelete('set null');

            $table->foreignIdFor(User::class)
                ->nullable()
                ->constrained()
                ->onDelete('set null');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('desks_users', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('userId')->nullable();
            $table->foreign('userId')->references('id')->on('users')->onDelete('set null');

            $table->unsignedBigInteger('deskId')->nullable();
            $table->foreign('deskId')->references('id')->on('desks')->onDelete('set null');

            $table->timestamps();
        });
        Schema::dropIfExists('desk_user');
    }
};
