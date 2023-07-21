<?php
namespace App\Repositories;

use App\Contracts\CalendarContract;
use App\Contracts\CardContract;
use App\Models\Card;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CalendarRepository implements CalendarContract
{
    protected $model;

    function __construct(Card $card)
    {
        $this->model=$card;
    }
    public function index($userId)
    {
        return Card::where('userId',$userId)->get();
    }
    public function index_week($userId)
    {
        return Card::where('userId',$userId)->get();
    }


}


?>
