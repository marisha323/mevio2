<?php
namespace App\Repositories;

use App\Contracts\UserContract;
use App\Models\User;
use App\Models\Desk;
use App\Models\DesksUsers;
use App\Models\Theme;
use Inertia\Inertia;


class UserRepository implements UserContract
{
    protected $model;

    function __construct(User $user)
    {
        $this->model = $user;
    }
    public function findById($id)
    {
        return User::find($id);
    }

    public function index()
    {
        return Inertia::render('UserComponent/Index');
    }
    public function returnUsers()
{
    $loggedInUserId = auth()->user()->id;

    //return al desks that the logged in user has
    $userDesks = Desk::join('desk_user', 'desks.id', '=', 'desk_user.desk_id')
        ->where('desk_user.user_id', $loggedInUserId)
        ->select('desks.*')
        ->get();

    //return all of the desk_user where we will use later to take users_id and desks_id
    $desks = DesksUsers::whereIn('desk_id', $userDesks->pluck('id')->toArray())->get();

    //return all users that are in the same desk that is the logged in user
    $usersInSameDesks = User::join('desk_user', 'users.id', '=', 'desk_user.user_id')
        ->whereIn('desk_user.desk_id', $desks->pluck('id')->toArray())
        ->select('users.*')
        ->distinct()
        ->get();

    $themes = Theme::all();

    return [
        'loggedInUserId' => $loggedInUserId,
        'desks' => $userDesks,
        'desksusers' => $desks,
        'users' => $usersInSameDesks,
        'themes' => $themes
    ];
}
public function delete($userId, $deskId)
    {
        //removing user from desk!
        $deskUser = DesksUsers::where('user_id', $userId)->where('desk_id', $deskId)->first();
        if ($deskUser) {
            $deskUser->delete();
        }
    }
    public function findByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    public function create($data)
    {
        return User::create($data);
    }

    public function update($id, array $data)
    {
        $user = User::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }


//    public function index ($email): Response
//    {
//        $petition = User::findOrFail($email);
//
//        //dd($petition);
//        return Inertia::render('UserComponent/Index', [
//            'user' => $petition,
//        ]);
//
//    }

}

?>
