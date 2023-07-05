<?php
namespace App\Contracts;

interface CardsUserContract
{
    public function create($data);

    public function destroy($id);

    public function MoveCard();
    public function SetDeadLine();
    public function OffDeadLine();





}

?>
