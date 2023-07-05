<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

use App\Repositories\CardRepository;
use Inertia\Inertia;
use Inertia\Response;


class CardController extends Controller
{

    protected $cardModel;

    public function __construct(CardRepository $cardRepository)
    {
        $this->cardModel = $cardRepository;

    }

    public function createCard():Response
    {
        dd("11");
        $this->cardModel->createCard();
        return Inertia::render('CurrentDesk/CurrentDesk');
    }
    public function create(Request $request)
    {

    }


    public function destroy(){

    }

    public function MoveCard(){

    }

    public function SetDeaadLine(){

    }
    public function OffDeadline(){

    }
}
