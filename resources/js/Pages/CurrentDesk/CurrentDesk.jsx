import '../../../css/current_desk/current_desk.css';

import {DashBoardLayout} from "@/Layouts/DashBoardLayout.jsx";
import {Link} from "@inertiajs/react";
import React, { useRef } from 'react';
import { Card, Board } from '@/React-dnd-Components';

export default function CurrentDesk({cards}) {

    const redirectToCreateCard = () => {
       // console.log(111);
        window.location.href = '/create-card';
    };
    const cardRef = useRef(null);

    const handleDragEnd = () => {
      const card = cardRef.current;
      const parent = card.parentElement;
      const board = parent.closest('.board');
  
      if (!board) {
        // If the card is dragged outside the Board, append it back to its original parent
        const originalBoard = document.getElementById(card.dataset.originalBoard);
        if (originalBoard) {
          originalBoard.appendChild(card);
        }
      }
    };

  return (
    <DashBoardLayout>
      <div className="middle_desks_container">
        <div className="middle_top_body_tasks">
          <h1>Курсовой проект</h1>
          <div className="tasks_user_profiles">
            <img src="images/profile1.png" alt="" />
            <img src="images/profile2.png" alt="" />
            <img src="images/profile3.png" alt="" />
            <img src="images/Ellipse 11.png" alt="" />
          </div>
          <button>Поделиться</button>
          <img src="images/settings (1) 1.png" alt="" />
        </div>
        <div className="main-container">
          <ul className="columns">
            <li className="column to-do-column">
              <div className="column-header">
                <h4>Нужно сделать</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <Board id="to-do" className="task-list">
                {cards.card1.map((card)=>(
                  <div>
                  <Card className="task"
                   key={card.id}
                   id={card.id}
                   draggable="true"
                   ref={cardRef}
                   onDragEnd={handleDragEnd}
                   data-original-board="to-do"
                   >
                      <p>{card.cardName}</p>
                  </Card>
              </div>
                ))}
                {/* <Card
                id="card-1"
                className="task"
                draggable="true"
                ref={cardRef}
                onDragEnd={handleDragEnd}
                data-original-board="to-do"
                > 
                  <p>Card one</p>
                </Card> */}
                
              </Board>
                <Link href="/create-card?columnId=1">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>

            <li className="column doing-column">
              <div className="column-header">
                <h4>Pобити</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <Board id="doing" className="task-list">
                {cards.card2.map((card)=>(
                  <div>
                  <Card className="task"
                   key={card.id}
                   id={card.id}
                   draggable="true"
                   ref={cardRef}
                   onDragEnd={handleDragEnd}
                   data-original-board="doing"
                   >
                      <p>{card.cardName}</p>
                  </Card>
              </div>
                ))}
              </Board>
                <Link href="/create-card?columnId=2">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>

            <li className="column done-column">
              <div className="column-header">
                <h4>Готово</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <Board id="done" className="task-list">
                {cards.card3.map((card)=>(
                  <div>
                  <Card className="task"
                  id={card.id}
                   key={card.id}
                   draggable="true"
                   ref={cardRef}
                   onDragEnd={handleDragEnd}
                   data-original-board="done"
                   >
                      <p>{card.cardName}</p>
                  </Card>
              </div>
                ))}
              </Board>
                <Link href="/create-card?columnId=3">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </DashBoardLayout>
  );
}


