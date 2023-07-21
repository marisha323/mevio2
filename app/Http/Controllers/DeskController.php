<?php

namespace App\Http\Controllers;

use App\Contracts\ArchiveContract;
use App\Contracts\DeskContract;
use App\Contracts\DesksUsersContract;
use App\Contracts\FavoriteDeskContract;
use App\Contracts\ThemeContract;
use App\Http\Requests\Desk\ChangeArchiveRequest;
use App\Http\Requests\Desk\ChangeFavoriteRequest;
use App\Http\Requests\Desk\StoreRequest;
use App\Http\Resources\Desk\DeskResource;
use App\Models\Archive;
use App\Models\FavoriteDesk;
use App\Repositories\ArchiveRepository;
use App\Repositories\DeskRepository;
use App\Repositories\DesksUsersRepository;
use App\Repositories\FavoriteDeskRepository;
use App\Repositories\ThemeRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Inertia\Inertia;
use Inertia\Response;

class DeskController extends Controller
{
    protected DeskRepository $desk_model;
    protected ThemeRepository $themeModel;
    protected FavoriteDeskRepository $favoriteModel;
    protected DesksUsersRepository $deskUserModel;
    protected ArchiveRepository $archiveModel;

    public function __construct (
            DeskContract $desk_repos,
            ThemeContract $themeRepos,
            DesksUsersContract $deskUserRepos,
            FavoriteDeskContract $favoriteRepos,
            ArchiveContract $archiveRepos
        ){
        $this->desk_model = $desk_repos;
        $this->themeModel = $themeRepos;
        $this->deskUserModel = $deskUserRepos;
        $this->favoriteModel = $favoriteRepos;
        $this->archiveModel = $archiveRepos;
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

    public function actionChangeDeskFavorite (ChangeFavoriteRequest $request): bool|string
    {
        $favoriteDesk = $request->validated();
        $isUpdated = $this->favoriteModel->update([
            'userId' => Auth::user()->getAuthIdentifier(),
            'deskId' => $favoriteDesk['deskId'],
            'isFavorite' => $favoriteDesk['isFavorite']
        ]);

        $message = $isUpdated ? "success" : "error";

        return json_encode(['message' => $message]);
    }


    public function actionChangeDeskArchive (ChangeArchiveRequest $request):bool|string
    {
        $archiveDesk = $request->validated();
        $isUpdated = $this->archiveModel->update([
            'userId'=> Auth::user()->getAuthIdentifier(),
            'deskId' => $archiveDesk['deskId'],
            'isArchive' => $archiveDesk['isArchive']
        ]);

        $message = $isUpdated ? "success" : "error";

        return json_encode(['message' => $message]);
    }

    public function actionGetFavoriteDesks():bool|string
    {
        $favoriteDesks = $this->favoriteModel
            ->getFavoriteDesksByUserId(Auth::user()->getAuthIdentifier());

        return json_encode($favoriteDesks, true);
    }

    public function actionGetArchiveDesks():bool|string
    {
        $archiveDesks = $this->archiveModel->getArchiveDesksByUserId(Auth::user()->getAuthIdentifier());

        return json_encode($archiveDesks, true);
    }
}
