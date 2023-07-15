<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class DeskUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 1,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 2,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 3,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 4,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 5,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 2,
            'desk_id' => 6,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 2,
            'desk_id' => 7,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 2,
            'desk_id' => 8,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 2,
            'desk_id' => 9,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desk_user')->insert([
            'user_id' => 2,
            'desk_id' => 10,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);
    }
}
