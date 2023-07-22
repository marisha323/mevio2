<?php

namespace App\Http\Controllers;

use App\Contracts\InvitationContract;
use App\Http\Requests\Invitation\CreateRequest;
use App\Models\Invitation;
use App\Repositories\InvitationRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvitationController extends Controller
{
    protected $invitationModel;

    function __construct(InvitationContract $invitationRepos)
    {
        $this->invitationModel = $invitationRepos;
    }
    public function actionGetAllInvitations ()
    {
        $invitations = $this->invitationModel->getAllInvitationsByUserId(Auth::user()->getAuthIdentifier());
        return json_encode($invitations, true);
    }

    public function actionCreateInvitation (CreateRequest $request):bool|string
    {
        $invitation = new Invitation();
        $invitation = $request->validated();
        $invitation['senderId'] = Auth::user()->getAuthIdentifier();

        $isCreated = $this->invitationModel->create($invitation);

        $message = $isCreated ? "success" : "error";


        return json_encode(compact('message'));
    }
}
