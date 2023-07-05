<?php
namespace App\Contracts;

use Illuminate\Http\Request;

interface CardContract
{
    public function createCard();
    public function create(Request $request);

    public function destroy();
    public function MoveCard();
    public function SetDeadLine();
    public function OffDeadLine();


}


?>
