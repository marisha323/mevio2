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
    public function findById($id)
    {
        return User::find($id);
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

    public function delete($id)
    {
        return User::destroy($id);
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
