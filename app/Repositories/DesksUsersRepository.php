<?php
namespace App\Repositories;

use App\Contracts\DesksUsersContract;
use App\Models\DesksUsers;
use App\Models\User;

class DesksUsersRepository implements DesksUsersContract
{
    protected $model;

    function __construct()
    {
        $this->model=new DesksUsersRepository();
    }
    public function create($data)
    {
        return DesksUsers::create($data);
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

?>
