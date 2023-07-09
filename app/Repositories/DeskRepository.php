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

//    public function showCurrentDesk()
//    {
//        $cards = Card::all();
//        $data = ['cards' => $cards];
//
//       // return Inertia::render('CurrentDesk/CurrentDesk', compact('data'));
//
//        return Inertia::render('CurrentDesk/CurrentDesk', ['data' => $data]);
//    }

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
