<?php

namespace App\Presenters;

use App\Models\User;

class UserAsArrayPresenter implements IPresenter
{

    public function presentCollection($models): array
    {
        $presents = [];

        return $presents;
    }

    public function present(User $user):array
    {
        return $user->attributesToArray();
    }
}
