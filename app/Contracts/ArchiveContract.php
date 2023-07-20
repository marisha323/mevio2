<?php
namespace App\Contracts;

interface ArchiveContract
{
    public function create($data):bool;

    public function destroy($data):bool;

    public function update($data);

}


