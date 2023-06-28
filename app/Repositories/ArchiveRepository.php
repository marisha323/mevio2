<?php

namespace App\Repositories;

use App\Contracts\ArchiveContract;
use App\Models\Archive;
use App\Models\User;


class ArchiveRepository implements ArchiveContract
{
    protected $model;

    function __construct()
    {
        $this->model=new ArchiveRepository();
    }
    public function create($data)
    {
        return Archive::create($data);
    }

    public function update($id, array $data)
    {
        $user = Archive::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return Archive::destroy($id);
    }
}
?>
