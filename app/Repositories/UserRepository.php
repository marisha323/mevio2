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

    // Get the desks of the authenticated user
    $userDesks = Desk::whereHas('users', function ($query) use ($loggedInUserId) {
            $query->where('users.id', $loggedInUserId);
        })
        ->get();

    $deskIds = $userDesks->pluck('id')->toArray();

    // Get users who belong to the same desks as the authenticated user
    $usersInSameDesks = User::whereHas('desks', function ($query) use ($deskIds) {
            $query->whereIn('desks.id', $deskIds);
        })
        ->get();

    $themes = Theme::all();
    // dd($userDesks);

    return [
        'loggedInUserId' => $loggedInUserId,
        'desks' => $userDesks,
        'desksusers' => $deskIds,
        'users' => $usersInSameDesks,
        'themes' => $themes
    ];
}
public function delete($userId, $deskId)
    {
        //removing user from desk!
        $deskUser = DesksUsers::where('userId', $userId)->where('deskId', $deskId)->first();
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
