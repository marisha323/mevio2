<?php
namespace App\Contracts;

use App\Models\Desk;
use App\Models\Theme;

interface ThemeContract
{
    public function create($data);

    public function getThemeByDesk(Desk $desk): Theme;
}


