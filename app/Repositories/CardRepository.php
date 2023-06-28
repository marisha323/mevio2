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
}


?>
