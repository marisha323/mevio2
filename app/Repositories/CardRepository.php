<?php
namespace App\Repositories;

use App\Contracts\CardContract;
use App\Models\Card;

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

       // dd($user);
        $userId= $user->id;

        $card=new Card();

        $card->cardName = $request->post('cardName');
        $card->description = $request->post('description');
        $card->deadLine = $request->post('deadLine');
        $card->columnId = $request->post('columnId');
        $card->userId = $userId;


        $card->created_at = new \DateTime();
        $card->updated_at = new \DateTime();
        $card->save();
        return redirect('/current-desk');

       // return Card::create();
    }

    public function currentDesk()
    {
        //  $data = ['cards' => Card::all()];

        $cards1 = Card::where('columnId', 1)->get();
        $cards2 = Card::where('columnId', 2)->get();
        $cards3 = Card::where('columnId', 3)->get();


        $cards=[
          'card1'=> $cards1,
          'card2'=> $cards2,
          'card3'=> $cards3,
        ];
       return $cards;

    }

    public function updateCardColumn(Request $request)
    {
        $cardId = $request->route('id');
        $card = Card::findOrFail($cardId);

        $card->columnId = $request->post('columnId');
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
