<?php
namespace App\Repositories;

use App\Contracts\CardContract;
use App\Models\Card;

use App\Models\Desk;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CardRepository implements CardContract
{
    protected $model;

    function __construct(Card $card)
    {
        $this->model=$card;
    }

    public function create(): Response
    {
        //dd("hello");
        return Inertia::render('UserComponent/CreateCard');

    }
    public function store(Request $request)
    {
       // dd($request);
        $user = Auth::user();

        //dd($request->post('deskId'));
        $userId= $user->id;

        $card=new Card();

        $card->cardName = $request['cardName'];
        $card->description = $request['description'];
        $card->deadLine = $request['deadLine'];
        $card->columnId = $request['columnId'];
        $card->userId = $userId;
        $card->desk_id = $request['deskId'];


        $card->created_at = new \DateTime();
        $card->updated_at = new \DateTime();
        $card->save();

    }

    public function currentDesk(Request $request)
    {
        $deskId = $request->get('desk_id');


        $cards1 = Card::where('desk_id', $deskId)->where('columnId', 1)->get();
        $cards2 = Card::where('desk_id', $deskId)->where('columnId', 2)->get();
        $cards3 = Card::where('desk_id', $deskId)->where('columnId', 3)->get();

//        $cards1 = $cards->where('columnId', 1);
//        $cards2 = $cards->where('columnId', 2);
//        $cards3 = $cards->where('columnId', 3);


        $cards = [
            'card1' => $cards1->ToArray(),
            'card2' => $cards2->ToArray(),
            'card3' => $cards3->ToArray(),
        ];


        return $cards;
    }





    public function updateCardColumn(Request $request,$id)
    {

        $card = Card::findOrFail($id);


        $card->columnId = $request->columnId;
        $card->save();

        return redirect('/current-desk');
    }


    public function destroy(){

    }

    public function MoveCard(){

    }

    public function SetDeadLine(){

    }

    public function OffDeadLine(){

    }


}


?>
