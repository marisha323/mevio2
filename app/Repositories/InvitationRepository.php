<?php
namespace App\Repositories;

use App\Contracts\InvitationContract;
use App\Models\Invitation;
use App\Models\User;
use App\Presenters\InvitationAsArrayPresenter;

class InvitationRepository implements InvitationContract
{
    protected $model;

    function __construct()
    {

    }
    public function create($data):bool
    {
        $invitation = new Invitation();
        $invitation->deskId = $data['deskId'];
        $invitation->senderId = $data['senderId'];
        $invitation->targetId = $data['targetId'];

        $isExists = $this->isExists($invitation);

        try{
            if(!$isExists){
                $invitation->save();
                return true;
            }
        }
        catch (\Exception $ex){
            return false;
        }

        return false;
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
        $invitations = Invitation::where('targetId',$userId)
            ->where('isAccept',0)
            ->where('isRejected',0)->get();
        return (new InvitationAsArrayPresenter())->presentCollection($invitations);
    }

    public function isExists($data): bool
    {
        $invitation = Invitation::where('targetId',$data->targetId)
            ->where('isAccept',0)
            ->where('deskId',$data->deskId)
            ->where('isRejected',0)->get();

        return count($invitation) > 0;
    }

    public function rejectInvitation($data):bool
    {
        $invitation = Invitation::where('id',$data['id'])->first();
        $invitation->isRejected = true;
        $invitation->save();

        return true;
    }
}

