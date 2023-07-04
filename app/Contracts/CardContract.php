<?php
namespace App\Contracts;

interface CardContract
{
    public function create($data);

    public function AddCard();
    public function DeleteCard();
    public function MoveCard();
}


?>
