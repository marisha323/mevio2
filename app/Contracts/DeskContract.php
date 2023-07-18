<?php
namespace App\Contracts;

interface DeskContract
{
    public function create($desk);

    public function delete($id);

    public function AddToFavourite();

    public function ArchiveDesk();

    public function update($id, array $data);

    public function getUserOwnDesks (int $user_id): array;

    public function getAllUserDesks (int $userId): array;

}


