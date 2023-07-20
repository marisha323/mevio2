<?php

namespace App\Http\Controllers;

use App\Contracts\CardContract;
use App\Models\Card;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use App\Repositories\CardRepository;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\User;
use App\Models\DesksUsers;


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
        return redirect('/current-desk');
       //return Inertia::render('CurrentDesk/CurrentDesk');
    }

//     public function currentDesk(Request $request):Response
//     {
//         $desk_id = $request->get('desk_id');
//         $cards=$this->cardModel->currentDesk();
//         return Inertia::render('CurrentDesk/CurrentDesk', ['cards' => $cards]);
// //        return Inertia::render('CurrentDesk/CurrentDesk');
//     }

    public function currentDesk(Request $request): Response
    {
        $desk_id = $request->get('desk_id');

        // Fetch users who do not exist in the given desk using the doesNotHave relationship.
        $users = User::whereDoesntHave('desks', function ($query) use ($desk_id) {
            $query->where('desk_id', $desk_id);
        })->get();

        // Fetch the cards associated with the desk. I'm assuming you already have a method in your cardModel for this.
        $cards = $this->cardModel->currentDesk();

        return Inertia::render('CurrentDesk/CurrentDesk', [
            'cards' => $cards,
            'users' => $users,
        ]);
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
