<?php
namespace App\Contracts;

interface InvitationContract
{
    public function create($data);
    public function destroy($id);
    public function getInvitationStatus($data);

    public function getAllInvitationsByUserId ($userId):array;
}


