<?php

namespace App\Http\Controllers;

use App\Contracts\InvitationContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvitationController extends Controller
{
    protected $invitationModel;

    function __construct(InvitationContract $invitationRepos)
    {
        $this->invitationModel = $invitationRepos;
    }
    public function actionGetAllInvitations ():bool|string
    {
        $invitations = $this->invitationModel->getAllInvitationsByUserId(Auth::user()->getAuthIdentifier());
    }
}
