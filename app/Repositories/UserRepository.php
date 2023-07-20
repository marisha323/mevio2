<?php
namespace App\Repositories;

use App\Contracts\UserContract;
use App\Models\User;
use App\Models\DesksUsers;
use App\Models\Desk;
use Inertia\Inertia;
use App\Models\Theme;


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

        $userDesks = Desk::join('desks_users', 'desks.id', '=', 'desks_users.deskId')
            ->where('desks_users.userId', $loggedInUserId)
            ->select('desks.*')
            ->get();

        $desks = DesksUsers::whereIn('deskId', $userDesks->pluck('id')->toArray())
            ->get();

        $usersInSameDesks = User::join('desks_users', 'users.id', '=', 'desks_users.userId')
            ->whereIn('desks_users.deskId', $desks->pluck('id')->toArray())
            ->select('users.*')
            ->distinct()
            ->get();

            $themes = Theme::all();
            // dd($userDesks);
        return [
            'loggedInUserId' => $loggedInUserId,
            'desks' => $userDesks,
            'desksusers' => $desks,
            'users' => $usersInSameDesks,
            'themes' => $themes
        ];
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

    public function delete($userId, $deskId)
    {
        //removing user from desk!
        $deskUser = DesksUsers::where('userId', $userId)->where('deskId', $deskId)->first();
        if ($deskUser) {
            $deskUser->delete();
        }
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
