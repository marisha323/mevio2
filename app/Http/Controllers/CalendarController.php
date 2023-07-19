<?php

namespace App\Http\Controllers;

use App\Contracts\CalendarContract;
use App\Models\Card;
use App\Presenters\CardAsArrayPresenter;
use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CalendarController extends Controller
{
    protected CalendarRepository $calendarRepository;
    function __construct(CalendarContract $calendarRepository)
    {
        $this->calendarRepository = $calendarRepository;
    }

    public function index() : Response
    {
       $cards = (new CardAsArrayPresenter())->presentCollection($this->calendarRepository->index());

       return Inertia::render('Calendar/Calendar', ['cardsData' => $cards]);
    }
}
