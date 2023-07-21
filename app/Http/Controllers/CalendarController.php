<?php

namespace App\Http\Controllers;

use App\Contracts\CalendarContract;
use App\Models\Card;
use App\Presenters\CardAsArrayPresenter;
use App\Repositories\CalendarRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
       $userId = Auth::user()->getAuthIdentifier();
       $cards = (new CardAsArrayPresenter())->presentCollection($this->calendarRepository->index($userId));



       return Inertia::render('Calendar/Calendar', ['cardsData' => $cards]);
    }
    public function index_week() : Response
    {
        $userId = Auth::user()->getAuthIdentifier();
        $cards = (new CardAsArrayPresenter())->presentCollection($this->calendarRepository->index_week($userId));

        return Inertia::render('Calendar/WeekCalendar', ['cardsData' => $cards]);
    }
}
