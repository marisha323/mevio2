<?php
namespace App\Repositories;
use App\Contracts\CardContract;
use App\Contracts\CardsUserContract;
use App\Models\CardsUers;
use App\Models\User;

class CardsUserRepository implements CardContract
{
    protected $model;

    function __construct()
    {
        $this->model=new CardsUserRepository();
    }
    public function create($data)
    {
        return CardsUers::create($data);
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
}
?>
