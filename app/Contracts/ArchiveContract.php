<?php
namespace App\Contracts;

interface ArchiveContract
{
    public function create($data);

    public function destroy($id);

}

?>