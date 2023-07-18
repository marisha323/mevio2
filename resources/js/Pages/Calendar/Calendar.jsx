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
                        {getMonthName(currentMonth) + " " + currentYear}
                    </h1>
                    <div className="calendar_container">
                        <div className="display_weeks">
                            <p>
                                <Link href={"/week-calendar"}>Понеділок</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>Вівторок</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>Середа</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>Четвер</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>П'ятниця</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>Субота</Link>
                            </p>
                            <p>
                                <Link href={"/week-calendar"}>Неділя</Link>
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
                                    if (deadline.getDate() === monthDay && card.cardName && card.description) {
                                        tasksForDay.push({
                                            cardName: card.cardName,
                                            cardDes: card.description,
                                            cardDeadLine: card.deadLine
                                        });
                                    }
                                });

                                return (
                                    <div className="date" key={monthDay}>
                                        {monthDay}
                                        {tasksForDay.length > 0 && tasksForDay.map((task, index) => (
                                            <div className='task' key={index}>
                                                <div className='task__tags'>
                        <span className='task__tag task__tag--copyright'>
                            {'Name: ' + task.cardName}
                        </span>
                                                    <button className='task__options'>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </button>
                                                </div>
                                                <p>{'Description: ' + task.cardDes}</p>
                                                <div className='task__stats'>
                        <span>
                            <time dateTime={task.cardDeadLine}>
                                <i className="fas fa-flag"></i>
                                {'Date: ' + task.cardDeadLine}
                            </time>
                        </span>
                                                    <span><i className="fas fa-comment"></i>3</span>
                                                    <span><i className="fas fa-paperclip"></i>7</span>
                                                    <span className='task__owner'></span>
                                                </div>
                                            </div>
                                        ))}
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
