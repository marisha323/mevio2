<?php
namespace App\Contracts;

use App\Models\User;

interface UserContract
{
    public function create($data);

    public function findByEmail($email);
    public function index();


}

?>
