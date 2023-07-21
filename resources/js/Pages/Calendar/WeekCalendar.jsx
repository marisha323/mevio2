import React, { useEffect, useState } from "react";
import { DashBoardLayout } from "@/Layouts/DashBoardLayout.jsx";
import { Link } from "@inertiajs/react";
import "../../../css/calendar/calendar.css";
import "../../../css/calendar/week_calendar.css";
import {useThemes} from "@/Hooks/useThemes.js";

const WeekCalendar = ({ cardsData }) => {

    const [mainTheme, setMainTheme] = useState({});
    const {defaultTheme} = useThemes();

    useEffect( () => {
        setMainTheme(defaultTheme);
    },[defaultTheme])


    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const firstDayOfWeek = new Date(currentYear, currentMonth, currentDay - currentDate.getDay() + 1);
    const weekDays = Array.from({ length: 7 }, (_, index) => new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + index));

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    return (
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body"
                     style={{backgroundColor: mainTheme.page_header_bg_color}}>
                    <h1>Тижневий календар</h1>
                </div>
                <div className="middle_middle_body">
                    <div className="weekly_control_box_container">

                    </div>
                    <div className="week_boxes">
                        {weekDays.map((date, index) => {
                            const tasksForDay = [];

                            cardsData.forEach((card) => {
                                const deadline = new Date(card.deadLine);
                                if (deadline.getDate() === new Date(date).getDate() && card.cardName && card.description && currentYear) {
                                    tasksForDay.push({
                                        cardName: card.cardName,
                                        cardDes: card.description,
                                        cardDeadLine: card.deadLine,
                                        currentYear: currentYear
                                    });
                                }
                            });


                           return <div className="week_box" key={index}
                                style={index === 5 || index === 6 ? {backgroundColor: mainTheme.layout_header_bg_color}
                                    : {opacity: 0.7}}>
                                <div className="dateRange">
                                    {getWeekDayName(index + 1)}
                                    <p>{`${getMonthName(new Date(date).getMonth())} ${new Date(date).getDate()}`}</p>
                                </div>
                               {tasksForDay.length > 0 && tasksForDay.map((task, index) => (
                                   <div className='task_info' key={index}>
                                       <ul>
                                           <li>{'Name: ' + task.cardName}</li>
                                           <li>{'Description: ' + task.cardDes}</li>
                                           <li>{'DeadLine: ' + new Date(task.cardDeadLine).getDate()+'.0'+new Date(task.cardDeadLine).getMonth()+'.'+task.currentYear}</li>
                                       </ul>
                                   </div>
                               ))}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    );
};

const getWeekDayName = (dayNumber) => {
    const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    return weekDayNames[dayNumber - 1];
};

const getMonthName = (monthNumber) => {
    const monthNames = [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
    ];
    return monthNames[monthNumber];
};

export default WeekCalendar;
