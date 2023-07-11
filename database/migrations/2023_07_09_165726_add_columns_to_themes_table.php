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
        Schema::table('themes', function (Blueprint $table) {
            $table->string('left_sidebar_bg_color');
            $table->string('layout_header_bg_color');
            $table->string('page_header_bg_color');
            $table->string('logo_font_color');
            $table->string('main_font_color');
            $table->string('sidebar_category_bg_color');
            $table->string('create_button_bg_color');
            $table->string('filter_input_bg_color');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('themes', function (Blueprint $table) {
            $table->dropColumn('filter_input_bg_color');
            $table->dropColumn('create_button_bg_color');
            $table->dropColumn('sidebar_category_bg_color');
            $table->dropColumn('main_font_color');
            $table->dropColumn('logo_font_color');
            $table->dropColumn('page_header_bg_color');
            $table->dropColumn('layout_header_bg_color');
            $table->dropColumn('left_sidebar_bg_color');
        });
    }
};
