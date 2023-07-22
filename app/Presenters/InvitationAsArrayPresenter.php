<?php

namespace App\Presenters;

use App\Models\Desk;
use App\Models\Invitation;
use App\Models\User;
use App\Presenters\IPresenter;

class InvitationAsArrayPresenter implements IPresenter
{
    public function present(Invitation $invitation): array
    {
        $results = [];

        $results = $invitation->attributesToArray();

        $user = User::where('id',$invitation->senderId)->first();
        $results['senderUser'] = (new UserAsArrayPresenter())->present($user);

        $desk = Desk::where('id',$invitation->deskId)->first();
        $results['Desk'] = (new DeskAsArrayPresenter())->present($desk);

        return $results;
    }

    public function presentCollection($models): array
    {
        $presents = [];

        foreach ($models as $model) {
            $presents[] = $this->present($model);
        }

        return $presents;
    }

}
