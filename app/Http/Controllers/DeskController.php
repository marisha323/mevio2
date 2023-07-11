<?php

namespace App\Http\Controllers;

use App\Contracts\DeskContract;
use App\Repositories\DeskRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeskController extends Controller
{
    protected DeskRepository $desk_model;

    public function __construct (DeskContract $desk_repos){
        $this->desk_model = $desk_repos;
    }

    public function create($data)
    {

    }


    public function destroy($id)
    {

    }

//    public function showCurrentDesk()
//    {
//
//    }
    public function AddToFavorite()
    {

    }
    public function ArchiveDesk()
    {

    }

    public function actionGetUserDesks ()
    {
        $desks = $this->desk_model->getDesksByUserId(Auth::getUser()->getAuthIdentifier());
        return json_encode($desks,true);
    }
}
