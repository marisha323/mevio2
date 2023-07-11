<?php

namespace App\Presenters;

use App\Models\Desk;

class DeskAsArrayPresenter implements IPresenter
{
    public function present(Desk $model): array
    {
        return $model->attributesToArray();
    }

    public function presentCollection($models): array
    {
        $returns = [];
        foreach ($models as $model){
            $returns[] = $this->present($model);
        }
        return $returns;
    }
}
