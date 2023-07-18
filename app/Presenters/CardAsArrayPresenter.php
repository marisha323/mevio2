<?php

namespace App\Presenters;

use App\Models\Card;

class CardAsArrayPresenter implements IPresenter
{
    public function present(Card $model): array
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
