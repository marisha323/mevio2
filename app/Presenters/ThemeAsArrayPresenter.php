<?php
namespace App\Presenters;

use App\Models\Theme;
use App\Presenters\IPresenter;

class ThemeAsArrayPresenter implements IPresenter
{

    public function presentCollection($models): array
    {
        $presents = [];

        foreach ($models as $model){
            $presents[] = $this->present($model);
        }

        return $presents;
    }

    public function present (Theme $theme): array
    {
        return $theme->attributesToArray();
    }
}
