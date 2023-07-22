<?php
namespace App\Contracts;

use App\Models\Invitation;

interface InvitationContract
{
    public function create($data):bool;
    public function destroy($id);
    public function getInvitationStatus($data);

    public function getAllInvitationsByUserId ($userId):array;

    public function isExists($data):bool;

    public function rejectInvitation($data):bool;
}


