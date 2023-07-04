<?php

namespace App\Http\Controllers;

use App\Models\Archive;
use App\Models\User;
use Illuminate\Http\Request;

class ArchiveController extends Controller
{

    protected $model;

    function __construct(Archive $archive)
    {
        $this->model = $archive;
    }

    public function destroy($id)
    {

    }


    public function create($data)
    {

    }
}
