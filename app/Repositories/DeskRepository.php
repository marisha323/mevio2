<?php
namespace App\Repositories;

use App\Contracts\DeskContract;
use  App\Models\Desk;
use App\Models\DesksUsers;
use App\Models\User;
use App\Presenters\DeskAsArrayPresenter;
use \Illuminate\Database\Eloquent\Collection;

class DeskRepository implements DeskContract
{
    protected $model;

    public function __construct(Desk $desk)
    {
        $this->model = $desk;
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

    public function getUserOwnDesks(int $user_id): array
    {
        return (new DeskAsArrayPresenter())->presentCollection(Desk::where('userId',$user_id)->get());
    }

    public function getAllUserDesks (int $userId): array
    {
        $user = User::find($userId);
        $desks = $user->desks;
        return (new DeskAsArrayPresenter())->presentCollection($desks);
    }
}



