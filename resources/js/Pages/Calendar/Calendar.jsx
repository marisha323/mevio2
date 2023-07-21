import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";
import { Link } from "@inertiajs/react";
import {useEffect,useState} from "react";
import "../../../css/calendar/calendar.css";
import React from "react";

const Calendar = ({ cardsData }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
    const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    const daysInNextMonth = 6 - lastDay;

    const previousMonthDays = Array.from(
        { length: firstDay - 1 },
        (_, index) => daysInPreviousMonth - firstDay + index + 2
    );

    const nextMonthDays = Array.from(
        { length: daysInNextMonth + 1 },
        (_, index) => index + 1
    );

    const [cards,setCards] = useState([]);

    useEffect(()=>{
        setCards(cardsData);
    },[]);


    return (
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body">
                    <h1>Календар</h1>
                </div>
                <div className="middle_middle_body">
                    <h1 className="calendar_month_h1">
                        <span>{getMonthName(currentMonth) + " " + currentYear}</span>
                        <button className="button_week"> <Link href={"/week-calendar"}>Тижневий</Link></button>
                    </h1>
                    <div className="calendar_container">
                        <div className="display_weeks">
                            <p>
                                Понеділок
                            </p>
                            <p>
                                Вівторок
                            </p>
                            <p>
                               Середа
                            </p>
                            <p>
                                Четвер
                            </p>
                            <p>
                                П'ятниця
                            </p>
                            <p>
                                Субота
                            </p>
                            <p>
                                Неділя
                            </p>
                        </div>
                        <div className="display_dates">
                            {previousMonthDays.map((day) => (
                                <div className="date previous-month" key={day}>
                                    {day}
                                </div>
                            ))}
                            {monthDays.map((monthDay) => {
                                const tasksForDay = [];

                                cardsData.forEach((card) => {
                                    const deadline = new Date(card.deadLine);
                                    if (deadline.getDate() === monthDay && card.cardName && card.description && currentYear) {
                                        tasksForDay.push({
                                            cardName: card.cardName,
                                            cardDes: card.description,
                                            cardDeadLine: card.deadLine,
                                            currentYear: currentYear
                                        });
                                    }
                                });

                                return (
                                    <div className="date" key={monthDay}>
                                        {monthDay}
                                        <div className="info">
                                            {tasksForDay.length > 0 && tasksForDay.map((task, index) => (
                                                <div className='task' key={index}>
                                                    <ul>
                                                        <li>{'Name: ' + task.cardName}</li>
                                                        <li>{'Description: ' + task.cardDes}</li>
                                                        <li>{'DeadLine: ' + new Date(task.cardDeadLine).getDate()+'.0'+new Date(task.cardDeadLine).getMonth()+'.'+task.currentYear}</li>
                                                    </ul>
                                                </div>
                                            ))}</div>
                                    </div>
                                );
                            })}


                            {nextMonthDays.map((day) => (
                                <div className="date next-month" key={day}>
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    );
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

export default Calendar;
