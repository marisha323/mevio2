<?php
namespace App\Repositories;

use App\Contracts\UserContract;
use App\Models\User;


class UserRepository implements UserContract
{
    protected $model;

    function __construct(User $user)
    {
        $this->model = $user;
    }
    public function create($data)
    {

        return UserRepository::create($data);
    }
    public function index($email): Response
    {
        $petition = User::findOrFail($email);

        //dd($petition);
        return Inertia::render('UserComponent/Index', [
            'user' => $petition,
        ]);

    }
}

?>
