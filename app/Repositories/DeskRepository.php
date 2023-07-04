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
        $desk = Desk::findOrFail($id);
        $desk->fill($data);
        $desk->save();

        return $desk;
    }

    public function delete($id)
    {
        return Desk::destroy($id);
    }

    public function AddToFavourite()
    {

    }

    public function ArchiveDesk()
    {
        // TODO: Implement ArchiveDesk() method.
    }
}


?>
