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

    public function __construct(CardRepository $cardRepository)
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
        return redirect('/current-desk');
       //return Inertia::render('CurrentDesk/CurrentDesk');
    }

    public function currentDesk(Request $request):Response
    {
       // $desk_id = $request->get('desk_id');
        $cards=$this->cardModel->currentDesk($request);
        return Inertia::render('CurrentDesk/CurrentDesk', ['cards' => $cards]);
//        return Inertia::render('CurrentDesk/CurrentDesk');
    }

    public function updateCardColumn(Request $request,$id)
    {
        $this->cardModel->updateCardColumn($request,$id);
        return redirect('/current-desk');
    }


    public function destroy(){

    }

    public function MoveCard(){

    }

    public function SetDeadLine(){

    }
    public function OffDeadline(){

    }
}
