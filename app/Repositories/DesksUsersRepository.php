<?php
namespace App\Repositories;

use App\Contracts\DesksUsersContract;
use App\Models\DesksUsers;
use App\Models\User;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class DesksUsersRepository implements DesksUsersContract
{
    protected $model;

    function __construct()
    {

    }
    public function create($deskId, $userId)
    {
        DB::table('desk_user')->insert([
            'user_id' => 1,
            'desk_id' => 1,
            'created_at' => Date::now(),
            'updated_at' => Date::now()
        ]);
        return true;
    }

    public function update($id, array $data)
    {
        $user = DesksUsers::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return DesksUsers::destroy($id);
    }


}

