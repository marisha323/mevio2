<?php
namespace App\Repositories;

use App\Contracts\CardContract;
use App\Models\Card;

class CardRepository implements CardContract
{
    protected $model;

    function __construct()
    {
        $this->model=new CardRepository();
    }
    public function create($data)
    {
        // TODO: Implement create() method.
    }
    public function AddCard(){

    }

    public function DeleteCard(){

    }

    public function MoveCard(){

    }

}


?>
