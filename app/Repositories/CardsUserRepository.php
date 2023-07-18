<?php
namespace App\Repositories;
use App\Contracts\CardContract;
use App\Contracts\CardsUserContract;
use App\Models\CardsUsers;
use App\Models\User;
use Illuminate\Http\Request;

class CardsUserRepository implements CardContract
{
    protected $model;

    function __construct(CardsUsers $model)
    {
        $this->model=new CardsUserRepository();
    }
    public function create($data)
    {
        return CardsUsers::create($data);
    }

    public function update($id, array $data)
    {
        $user = User::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return User::destroy($id);
    }

    public function store(Request $request)
    {
        // TODO: Implement store() method.
    }

    public function currentDesk()
    {
        // TODO: Implement currentDesk() method.
    }

    public function destroy()
    {
        // TODO: Implement destroy() method.
    }

    public function MoveCard()
    {
        // TODO: Implement MoveCard() method.
    }

    public function SetDeadLine()
    {
        // TODO: Implement SetDeadLine() method.
    }

    public function OffDeadLine()
    {
        // TODO: Implement OffDeadLine() method.
    }
}
?>
