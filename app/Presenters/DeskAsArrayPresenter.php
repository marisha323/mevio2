<?php

namespace App\Presenters;

use App\Models\Archive;
use App\Models\Desk;
use App\Models\FavoriteDesk;
use App\Models\Theme;
use App\Repositories\ThemeRepository;

class DeskAsArrayPresenter implements IPresenter
{
    public function present(Desk $model): array
    {
        $result = [];
        $result = $model->attributesToArray();

        $result['deskTheme'] = (new ThemeRepository())->getThemeByDesk($model)->attributesToArray();
        $isArchive = Archive::where('deskId', $model->id)->first();
        $result['isArchive'] = $isArchive ? true : false;

        $isFavorite = FavoriteDesk::where('deskId',$model->id)->first();

        dd($isFavorite);
        $result['isFavorite'] = $isFavorite ? true : false;

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
