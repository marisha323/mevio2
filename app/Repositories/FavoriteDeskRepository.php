<?php
namespace App\Repositories;
use App\Contracts\FavoriteDeskContract;
use App\Models\FavoriteDesk;
use App\Models\User;

class FavoriteDeskRepository implements FavoriteDeskContract
{
    protected $model;

    function __construct()
    {
        $this->model=new FavoriteDeskRepository();
    }
    public function create($data)
    {
        return FavoriteDesk::create($data);
    }

    public function update($id, array $data)
    {
        $user = FavoriteDesk::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return FavoriteDesk::destroy($id);
    }
}

?>
