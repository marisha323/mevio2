<?php

namespace App\Http\Controllers;

use App\Contracts\CardContract;
use App\Models\Card;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use App\Repositories\CardRepository;
use Inertia\Inertia;
use Inertia\Response;


class CardController extends Controller
{

    protected $cardModel;

    public function __construct(CardContract $cardRepository)
    {
        $this->cardModel = $cardRepository;

    }

    public function create()
    {
        $this->cardModel->create();
       // return Inertia::render('CurrentDesk/CurrentDesk');
    }
    public function store(Request $request): RedirectResponse
    {
        //dd($request);
        $this->cardModel->store($request);
        return redirect('/dashboard');
       //return Inertia::render('CurrentDesk/CurrentDesk');
    }

    public function currentDesk():Response
    {
        $cards=$this->cardModel->currentDesk();
       //dd($cards);
        return Inertia::render('CurrentDesk/CurrentDesk', ['cards' => $cards]);
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
