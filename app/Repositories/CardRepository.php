<?php
namespace App\Repositories;

use App\Contracts\CardContract;
use App\Models\Card;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CardRepository implements CardContract
{
    protected $model;

    function __construct()
    {
        $this->model=new CardRepository();
    }

    public function createCard():Response
    {
        //dd("hello");
        return Inertia::render('UserComponent/CreateCard');

    }
    public function create(Request $request)
    {

        $user = Auth::user();

        $card=new Card();
        $card->cardName=$request->post('cardName');
        $card->description=$request->post('description');
        $card->columnId=1;
        $card->userId= $user->id;

        $card->save();
      //  return redirect('/dashboard');

        //return Card::create($data);
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
