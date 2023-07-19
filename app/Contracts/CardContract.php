<?php
namespace App\Contracts;

use Illuminate\Http\Request;

interface CardContract
{
    public function create();
    public function store(Request $request);

    public function currentDesk(Request $request);

    public function updateCardColumn(Request $request, $id);

    public function destroy();
    public function MoveCard();
    public function SetDeadLine();
    public function OffDeadLine();


}


?>
