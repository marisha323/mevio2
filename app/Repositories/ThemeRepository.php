<?php

namespace App\Repositories;

use App\Contracts\ThemeContract;
use App\Models\Desk;
use App\Models\Theme;
use App\Presenters\ThemeAsArrayPresenter;

class ThemeRepository implements ThemeContract
{

    protected $model;

    function __construct(Theme $theme = null)
    {
        $this->model = $theme;
    }
    public function create($data)
    {
        // TODO: Implement create() method.
    }

    public function getThemeByDesk(Desk $desk): Theme
    {
        return Theme::where('id',$desk->themeId)->first();
    }

    public function getAllThemes (): array
    {
        return (new ThemeAsArrayPresenter())->presentCollection(Theme::all());
    }
}


