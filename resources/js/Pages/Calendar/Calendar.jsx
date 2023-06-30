import DashBoardLayout from "@/Layouts/DashBoardLayout.jsx";
import {Link} from "@inertiajs/react";

import "../../../css/calendar/calendar.css";


const Calendar = () => {
    return (
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body">
                    <h1>Календарь</h1>
                </div>
                <div className="middle_middle_body">
                    <h1 className="calendar_month_h1">Май 2023</h1>
                    <div className="calendar_container">
                        <div className="display_weeks">
                            <p>
                                <Link href={'/week-calendar'}>
                                    Понедельник
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Вторник
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Среда
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Четверг
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Пятница
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Суббота
                                </Link>
                            </p>
                            <p>
                                <Link href={'/week-calendar'}>
                                    Воскресенье
                                </Link>
                            </p>
                        </div>
                        <div className="display_dates">
                            <div className="date">1</div>
                            <div className="date">2</div>
                            <div className="date">3</div>
                            <div className="date">4</div>
                            <div className="date">5</div>
                            <div className="date">6</div>
                            <div className="date">7</div>
                            <div className="date">8</div>
                            <div className="date">9</div>
                            <div className="date">10</div>
                            <div className="date">11</div>
                            <div className="date">12</div>
                            <div className="date">13</div>
                            <div className="date">14</div>
                            <div className="date">15</div>
                            <div className="date">16</div>
                            <div className="date">17</div>
                            <div className="date">18</div>
                            <div className="date">19</div>
                            <div className="date">20</div>
                            <div className="date">21</div>
                            <div className="date">22</div>
                            <div className="date">23</div>
                            <div className="date">24</div>
                            <div className="date">25</div>
                            <div className="date">26</div>
                            <div className="date">27</div>
                            <div className="date">28</div>
                            <div className="date">29</div>
                            <div className="date">30</div>
                            <div className="date current-month-last-date excluded">31</div>
                            <div className="date">1</div>
                            <div className="date">2</div>
                            <div className="date">3</div>
                            <div className="date">4</div>
                        </div>
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    )
}


export default Calendar;
