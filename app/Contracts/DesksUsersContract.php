<?php
namespace App\Contracts;

interface DesksUsersContract
{
    public function create($deskId, $userId);
}


