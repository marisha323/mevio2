<?php
namespace App\Contracts;

use App\Models\Card;
use Illuminate\Http\Request;
use Ramsey\Uuid\Type\Integer;

interface CardContract
{
    public function create();
    public function store(Request $request);

    public function currentDesk();
    public function updateCardColumn(Request $request);

    public function destroy();
    public function MoveCard();
    public function SetDeadLine();
    public function OffDeadLine();


}


?>
