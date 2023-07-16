import DashBoard from "@/Pages/DashBoard.jsx";

import "../../../css/calendar/week_calendar.css";
import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";

export default function WeekCalendar () {

    return(
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body">
                    <h1>Календарь</h1>
                </div>
                <div className="middle_middle_body">
                    <div className="weekly_control_box_container">
                        <select className="combobox_weekly">
                            <option value="" disabled selected hidden>Май 2023 г.</option>
                        </select>
                        <div className="control_box">
                            <button>&lt;</button>
                            <label htmlFor="">Сегодня</label>
                            <button>&gt;</button>
                        </div>
                    </div>
                    <div className="week_boxes">
                        <div className="week_box">Пн <p>Май 1</p></div>
                        <div className="week_box">Вт <p>2</p></div>
                        <div className="week_box">Ср <p>3</p></div>
                        <div className="week_box">Чт <p>4</p></div>
                        <div className="week_box">Пт <p>5</p></div>
                        <div className="week_box">Сб <p>6</p></div>
                        <div className="week_box">Вс <p>7</p></div>
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    )
}
