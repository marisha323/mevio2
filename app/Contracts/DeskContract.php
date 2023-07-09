<?php
namespace App\Contracts;

interface DeskContract
{
    public function create($data);

    public function delete($id);

    public function AddToFavourite();

    public function ArchiveDesk();

    public function update($id, array $data);

    //public function showCurrentDesk();

}

?>
