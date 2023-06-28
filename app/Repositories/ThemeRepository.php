<?php

namespace App\Repositories;

use App\Contracts\ThemeContract;
use App\Models\Theme;

class ThemeRepository implements ThemeContract
{

    protected $model;

    function __construct()
    {
        $this->model=new ThemeRepository();
    }
    public function create($data)
    {
        // TODO: Implement create() method.
    }
}

?>
