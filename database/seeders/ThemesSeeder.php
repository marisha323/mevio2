<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('themes')->insert([
            'backgroundImage' => 'images/themes/1/1.png',
            'left_sidebar_bg_color' => '#9A7BAC',
            'left_sidebar_font_color' => '#362F58',
            'layout_header_bg_color' => '#564B80',
            'page_header_bg_color' => '#4F427894',
            'logo_font_color' => '#000000',
            'main_font_color' => '#362F58',
            'sidebar_category_bg_color' => '#564B8033',
            'create_button_bg_color' => '#8A71A4',
            'filter_input_bg_color' => '#B29FCB'
        ]);

        DB::table('themes')->insert([
            'backgroundImage' => 'images/themes/2/2.png',
            'left_sidebar_bg_color' => '#C37D7D',
            'left_sidebar_font_color' => '#FFFFFF',
            'layout_header_bg_color' => '#A66F72',
            'page_header_bg_color' => '#C37D7DB2',
            'logo_font_color' => '#F9B5A4',
            'main_font_color' => '#FFFFFF',
            'sidebar_category_bg_color' => '#A66F72',
            'create_button_bg_color' => '#FEC3A58C',
            'filter_input_bg_color' => '#C57F79'
        ]);

        DB::table('themes')->insert([
            'backgroundImage' => 'images/themes/3/3.png',
            'left_sidebar_bg_color' => '#20423F',
            'left_sidebar_font_color' => '#9AB9A3',
            'layout_header_bg_color' => '#05342F',
            'page_header_bg_color' => '#20423F',
            'logo_font_color' => '#9AB9A3',
            'main_font_color' => '#05342F',
            'sidebar_category_bg_color' => '#023A36',
            'create_button_bg_color' => '#E0EBE0',
            'filter_input_bg_color' => '#E0EBE0'
        ]);

        DB::table('themes')->insert([
            'backgroundImage' => 'images/themes/4/4.png',
            'left_sidebar_bg_color' => '#7B1D29',
            'left_sidebar_font_color' => '#F2F2F2',
            'layout_header_bg_color' => '#BE4B45',
            'page_header_bg_color' => '#7B1D29',
            'logo_font_color' => '#EBD5E2',
            'main_font_color' => '#F2F2F2',
            'sidebar_category_bg_color' => '#BE4B45',
            'create_button_bg_color' => '#EBD5E2',
            'filter_input_bg_color' => '#EBD5E2'
        ]);

        DB::table('themes')->insert([
            'backgroundImage' => 'images/themes/5/5.png',
            'left_sidebar_bg_color' => '#E1BF9F',
            'left_sidebar_font_color' => '#1F1B23',
            'layout_header_bg_color' => '#574B51',
            'page_header_bg_color' => '#574B51D4',
            'logo_font_color' => '#E1BF9F',
            'main_font_color' => '#1F1B23',
            'sidebar_category_bg_color' => '#574B51',
            'create_button_bg_color' => '#E1BF9F',
            'filter_input_bg_color' => '#E1BF9F'
        ]);
    }
}
