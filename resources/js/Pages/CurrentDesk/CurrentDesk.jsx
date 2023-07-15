import React, { useEffect,useState } from 'react';
import DashBoardLayout from '@/Layouts/DashBoardLayout.jsx';
import axios from 'axios';

import '../../../css/current_desk/current_desk.css';
import {Link} from "@inertiajs/react";

export default function CurrentDesk({cards}) {
    const [values, setValues] = useState(

    );

    const redirectToCreateCard = () => {
        // console.log(111);
        window.location.href = '/create-card';
    };

    useEffect(() => {
        // Script initialization and event listeners
        const rotateImg = document.querySelector('.rotate_img');

        rotateImg.addEventListener('click', () => {
            rotateImg.classList.toggle('rotate180');
        });

        // Initialize drag and drop functionality
        const containers = [
            document.getElementById('to-do'),
            document.getElementById('doing'),
            document.getElementById('done'),
            document.getElementById('trash')
        ];

        const drake = dragula(containers);

        // Remove on spill
        drake.removeOnSpill = false;

        // Event listeners for drag and drop
        drake.on('drag', (el) => {
            el.className.replace('ex-moved', '');
        });

        // drake.on('drop', (el) => {
        //     el.className += ' ex-moved';
        // });

        drake.on('over', (el, container) => {
            container.className += ' ex-over';
        });

        drake.on('out', (el, container) => {
            container.className.replace('ex-over', '');
        });

        /////////

        drake.on('drop', (el, target, source, sibling) => {
            el.className += 'ex-moved';

          //  console.log(el);
            const cardId = el.querySelector('.task').getAttribute('data-card-id');
            const newColumnId = target.getAttribute('data-column-id');


            //  const cardId = el.key; //
            console.log("cardId: "+ cardId);
            console.log("columnId: "+ newColumnId);
            // Оновлюємо значення columnId у стані
            setValues((prevState) => ({
                ...prevState,
                columnId: newColumnId,
            }));

            // Робимо запит до сервера, щоб оновити значення columnId в базі даних
            axios.post(`/update-card-column/${cardId}`, { columnId: newColumnId })
                .then((response) => {
                    console.log('Column updated successfully!');
                    window.location.href = '/current-desk';
                })
                .catch((error) => {
                    console.error('Failed to update column:', error);
                });
        });
        return () => {
            // Clean up event listeners
            rotateImg.removeEventListener('click', () => {
                rotateImg.classList.toggle('rotate180');
            });

            drake.destroy();
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/dragula/dist/dragula.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);


    return (
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body_tasks">
                    <h1>Курсовой проект</h1>
                    <div className="tasks_user_profiles">
                        <img src="images/profile1.png" alt=""/>
                        <img src="images/profile2.png" alt=""/>
                        <img src="images/profile3.png" alt=""/>
                        <img src="images/Ellipse 11.png" alt=""/>
                    </div>
                    <button>Поделиться</button>
                    <img src="images/settings (1) 1.png" alt=""/>
                </div>
                <div className="main-container">
                    <ul className="columns">
                        <li className="column to-do-column">
                            <div className="column-header">
                                <h4>Нужно сделать</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <ul className="task-list" id="to-do" data-column-id="1">
                                {cards.card1.map((card) => (
                                    <div>
                                        <li className="task" key={card.id} data-card-id={card.id}>
                                            <p>{card.cardName}</p>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <Link href="/create-card?columnId=1">
                                <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                            </Link>
                        </li>

                        <li className="column doing-column">
                            <div className="column-header">
                                <h4>Pобити</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <ul className="task-list" id="doing" data-column-id="2">
                                {cards.card2.map((card) => (
                                    <div>
                                        <li className="task" key={card.id} data-card-id={card.id}>
                                            <p>{card.cardName}</p>
                                        </li>
                                    </div>
                                ))}

                            </ul>
                            <Link href="/create-card?columnId=2">
                                <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                            </Link>
                        </li>

                        <li className="column done-column">
                            <div className="column-header">
                                <h4>Готово</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <ul className="task-list" id="done" data-column-id="3">
                                {cards.card3.map((card) => (
                                    <div>
                                        <li className="task" key={card.id} data-card-id={card.id}>
                                            <p>{card.cardName}</p>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <Link href="/create-card?columnId=3">
                                <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </DashBoardLayout>
    );
}
