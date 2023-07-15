<?php

namespace App\Http\Controllers;

use App\Contracts\DeskContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    protected $deskModel;

    public function __construct(DeskContract $deskRepos)
    {
        $this->deskModel = $deskRepos;
    }


}
