<?php
namespace App\Repositories;

use App\Contracts\InvitationContract;
use App\Models\Invitation;
use App\Models\User;

class InvitationRepository implements InvitationContract
{
    protected $model;

    function __construct()
    {

    }
    public function create($data)
    {
        return Invitation::create($data);
    }


    public function destroy($id)
    {
        return Invitation::destroy($id);
    }

    public function getInvitationStatus($data)
    {

    }

    public function getAllInvitationsByUserId ($userId):array
    {
        $invitations = Invitation::where('targetId',$userId);

        dd($invitations);
    }
}

