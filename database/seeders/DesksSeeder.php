<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class DesksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('desks')->insert([
            'deskName' => 'Desk 1',
            'userId' => 1,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 1,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 2',
            'userId' => 1,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 2,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 3',
            'userId' => 1,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 3,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 4',
            'userId' => 1,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 4,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 5',
            'userId' => 1,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 5,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 6',
            'userId' => 2,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 1,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 7',
            'userId' => 2,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 2,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 8',
            'userId' => 2,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 3,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 9',
            'userId' => 2,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 4,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);

        DB::table('desks')->insert([
            'deskName' => 'Desk 10',
            'userId' => 2,
            'isPublic' => '1',
            'dateOfCreation' => Date::now(),
            'themeId' => 5,
            'isArchive' => false,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);
    }
}
