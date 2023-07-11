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
        DB::table('desks_users')->insert([
            'userId' => 1,
            'deskId' => 1,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 1,
            'deskId' => 2,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 1,
            'deskId' => 3,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 1,
            'deskId' => 4,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 1,
            'deskId' => 5,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 2,
            'deskId' => 6,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 2,
            'deskId' => 7,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 2,
            'deskId' => 8,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 2,
            'deskId' => 9,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks_users')->insert([
            'userId' => 2,
            'deskId' => 10,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);
    }
}
