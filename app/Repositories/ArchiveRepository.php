<?php

namespace App\Repositories;

use App\Contracts\ArchiveContract;
use App\Models\Archive;
use App\Models\FavoriteDesk;
use App\Models\User;
use App\Presenters\DeskAsArrayPresenter;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;


class ArchiveRepository implements ArchiveContract
{
    protected $model;

    function __construct()
    {

    }
     public function destroy($data):bool
    {
        try{
            DB::table('archives')
                ->where('userId', $data['userId'])
                ->where('deskId', $data['deskId'])
                ->delete();

            return true;
        }
        catch (\Exception $ex){
            return false;
        }
    }

    public function create($data):bool
    {
        try{
            DB::table('archives')->insert([
                'userId' => $data['userId'],
                'deskId' => $data['deskId'],
                'created_at' => Date::now(),
                'updated_at' => Date::now(),
            ]);

            return true;
        }
        catch (\Exception $ex){
            return false;
        }
    }

    public function update($data)
    {
        try {
            if ($data['isArchive'] === Archive::ADD_TO_ARCHIVE)
            {
                return $this->create($data);
            }
            if ($data['isArchive'] === Archive::DELETE_FROM_ARCHIVE)
            {
                return $this->destroy($data);
            }
        }
        catch (\Exception $ex){
            return false;
        }
    }


    public function getArchiveDesksByUserId ($userId):array
    {
        $idArrays = DB::table('archives')->select('deskId')
            ->where('userId',$userId)->get();

        return (new DeskAsArrayPresenter())->presentCollectionByIdArray($idArrays);
    }

}

