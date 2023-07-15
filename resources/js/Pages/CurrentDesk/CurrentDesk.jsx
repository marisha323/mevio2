import React, { useEffect } from 'react';
import DashBoard from '@/Pages/DashBoard.jsx';

import '../../../css/current_desk/current_desk.css';
import {Link} from "@inertiajs/react";

export default function CurrentDesk({cards}) {


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

    drake.on('drop', (el) => {
      el.className += ' ex-moved';
    });

    drake.on('over', (el, container) => {
      container.className += ' ex-over';
    });

    drake.on('out', (el, container) => {
      container.className.replace('ex-over', '');
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
    <DashBoard>
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
              <ul className="task-list" id="to-do">
                  {cards.card1.map((card) => (
                      <div >
                          <li className="task" key={card.id}>
                              <p>{card.cardName}</p>
                          </li>
                      </div>
                  ))}
              </ul>
                <Link href="/create-card?columnId=1">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
              </li>

            <li className="column doing-column">
              <div className="column-header">
                <h4>Pобити</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <ul className="task-list" id="doing">
                  {cards.card2.map((card) => (
                      <div >
                          <li className="task" key={card.id}>
                              <p>{card.cardName}</p>
                          </li>
                      </div>
                  ))}

              </ul>
                <Link href="/create-card?columnId=2">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>

            <li className="column done-column">
              <div className="column-header">
                <h4>Готово</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <ul className="task-list" id="done">
                  {cards.card3.map((card) => (
                      <div >
                          <li className="task" key={card.id}>
                              <p>{card.cardName}</p>
                          </li>
                      </div>
                  ))}
              </ul>
                <Link href="/create-card?columnId=3">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </DashBoard>
  );
}


