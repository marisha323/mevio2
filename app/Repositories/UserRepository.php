<?php
namespace App\Repositories;

use App\Contracts\UserContract;
use App\Models\User;


class UserRepository implements UserContract
{
    protected $model;

    function __construct()
    {
        $this->model=new UserRepository();
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
}

?>
