<?php

namespace App\Presenters;

interface IPresenter
{
    public function presentCollection ($models): array;
}
