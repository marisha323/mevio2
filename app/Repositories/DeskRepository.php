<?php
namespace App\Repositories;

use App\Contracts\DeskContract;
use  App\Models\Desk;
use App\Models\DesksUsers;
use App\Models\User;

class DeskRepository implements DeskContract
{
    protected $model;

    function __construct()
    {
        $this->model=new DeskRepository();
    }
    public function create($data)
    {
        return Desk::create($data);
    }

    public function update($id, array $data)
    {
        $user = Desk::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return Desk::destroy($id);
    }
}


?>
