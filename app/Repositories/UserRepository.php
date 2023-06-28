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
    public function create($data)
    {

        return UserRepository::create($data);
    }
}

?>
