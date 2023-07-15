<?php

namespace App\Presenters;

use App\Models\Desk;
use App\Models\Theme;
use App\Repositories\ThemeRepository;

class DeskAsArrayPresenter implements IPresenter
{
    public function present(Desk $model): array
    {
        $result = [];
        $result = $model->attributesToArray();

        $result['deskTheme'] = (new ThemeRepository())->getThemeByDesk($model)->attributesToArray();
        return $result;
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
