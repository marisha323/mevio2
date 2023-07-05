<?php
namespace App\Contracts;

interface CardContract
{
    public function create($data);

    public function destroy();
    public function MoveCard();
    public function SetDeadLine();
    public function OffDeadLine();


}


?>
