<?php
namespace App\Repositories;
use App\Contracts\FavoriteDeskContract;
use App\Models\FavoriteDesk;
use App\Models\User;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class FavoriteDeskRepository implements FavoriteDeskContract
{
    protected $model;

    function __construct()
    {

    }
    public function create($data)
    {

    }

//    public function update($id, array $data)
//    {
//        $user = FavoriteDesk::findOrFail($id);
//        $user->fill($data);
//        $user->save();
//
//        return $user;
//    }

    public function delete($id)
    {
        return FavoriteDesk::destroy($id);
    }

    public function destroy($data)
    {

    }

    public function update($data)
    {
        try {
            if ($data['isFavorite'] === FavoriteDesk::ADD_TO_FAVORITE)
            {
                DB::table('favorite_desks')->insert([
                    'userId' => $data['userId'],
                    'deskId' => $data['deskId'],
                    'created_at' => Date::now(),
                    'updated_at' => Date::now(),
                ]);
                return true;
            }
            if ($data['isFavorite'] === FavoriteDesk::DELETE_FROM_FAVORITE)
            {
                DB::table('favorite_desks')
                    ->where('userId', $data['userId'])
                    ->where('deskId', $data['deskId'])
                    ->delete();
                return true;
            }
        }
        catch (\Exception $ex){
            return false;
        }

    }
}


