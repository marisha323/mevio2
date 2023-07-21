<?php

use App\Models\Desk;
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
        Schema::table('cards', function (Blueprint $table) {
            $table->foreignIdFor(Desk::class)
                ->nullable()
                ->constrained()
                ->onDelete('set null');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->unsignedBigInteger('deskId')->nullable();
            $table->foreign('deskId')->references('id')->on('desks')->onDelete('set null');
        });
    }
};
