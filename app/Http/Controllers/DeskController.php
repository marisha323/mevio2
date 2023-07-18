<?php

namespace App\Http\Controllers;

use App\Contracts\DeskContract;
use App\Contracts\DesksUsersContract;
use App\Contracts\ThemeContract;
use App\Http\Requests\Desk\StoreRequest;
use App\Http\Resources\Desk\DeskResource;
use App\Repositories\DeskRepository;
use App\Repositories\DesksUsersRepository;
use App\Repositories\ThemeRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DeskController extends Controller
{
    protected DeskRepository $desk_model;
    protected ThemeRepository $themeModel;

    protected DesksUsersRepository $deskUserModel;

    public function __construct (
            DeskContract $desk_repos,
            ThemeContract $themeRepos,
            DesksUsersContract $deskUserRepos
        ){
        $this->desk_model = $desk_repos;
        $this->themeModel = $themeRepos;
        $this->deskUserModel = $deskUserRepos;
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

    public function actionGetUserOwnDesks (): bool|string
    {
        $desks = $this->desk_model->getUserOwnDesks(Auth::getUser()->getAuthIdentifier());
        return json_encode($desks,true);
    }

    public function actionGetAllUsersDesks (): Response
    {
        $desksData = $this->desk_model->getAllUserDesks(Auth::user()->getAuthIdentifier());
        return Inertia::render('DeskPanel/DeskPanel', compact('desksData'));
    }

    public function actionGetAllThemes () : bool|string
    {
        return json_encode( $this->themeModel->getAllThemes() );
    }


    public function actionCreateDesk (StoreRequest $deskRequest)
    {
        $desk = $deskRequest->validated();
        $desk = $this->desk_model->create($desk);

        if( isset($desk) ){
            $deskUser = $this->deskUserModel->create($desk->id, Auth::user()->getAuthIdentifier());
            if ($deskUser){
                return DeskResource::make($desk)->resolve();
            }
        }
    }

}
