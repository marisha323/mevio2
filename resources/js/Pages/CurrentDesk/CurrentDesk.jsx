import React, { useEffect, useState } from 'react';
import DashBoardLayout from '@/Layouts/DashBoardLayout.jsx';

import '../../../css/current_desk/current_desk.css';
import {Link} from "@inertiajs/react";

export default function CurrentDesk() {
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

  const [infoCardVisible, setInfoCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleTaskClick = () => {
    setInfoCardVisible(true);
    setOverlayVisible(true);
  };

  const handleOverlayClick = () => {
    setInfoCardVisible(false);
    setOverlayVisible(false);
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
              <ul className="task-list" id="to-do">
                <li className="task" onClick={handleTaskClick}>
                  <p>Analysis Analysis Analysis Analysis Analysis</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>Coding</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>Card Sorting</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>Measure</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <img src="images/background1.png" alt="" />
                </li>
              </ul>
              <img className="plus_task" src="images/plus (3) 1.png" alt="" />
            </li>

            <li className="column doing-column">
              <div className="column-header">
                <h4>Pобити</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <ul className="task-list" id="doing">
                <li className="task" onClick={handleTaskClick}>
                  <p>Hypothesis</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>User Testing</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>Prototype</p>
                </li>
              </ul>
                <Link href="/create-card">
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </Link>
            </li>

            <li className="column done-column">
              <div className="column-header">
                <h4>Готово</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <ul className="task-list" id="done">
              <li className="task" onClick={handleTaskClick}>
                  <p>Ideation</p>
                </li>
                <li className="task" onClick={handleTaskClick}>
                  <p>Sketches</p>
                </li>
              </ul>
              <img className="plus_task" src="images/plus (3) 1.png" alt="" ></img>
            </li>
          </ul>
        </div>
      </div>
      {infoCardVisible && (
        <div className="Info_Card">
        <h1>От вас требуется прочитать инструкцию по обезврежеванию бомы The Escapits 2</h1>
        <div className="Card_Links"><a>в колонке </a><a>To do</a></div>
        <div className="Card_View_Controller">
          <div>
            <p>Участники</p>
            <div className="images-container">
              <img src="images/user_Icon1.png" alt=""></img>
              <img src="images/Add_Card_User.png" alt=""></img>
            </div>  
          </div>
          <div>
            <p>Уведомления</p>
            <button><img src="images/eye 1.png" alt=""></img>Подписаться</button>
          </div>
          <div>
            <p>Срок</p>
            <button>7 мая в 11:27<p>Выполнить</p></button>
          </div>
        </div>
        <div className="Card_input">
          <h1><img src="images/card_settings.png" alt=""></img>Описание</h1>
          <div className="Card_input_Con">
            <textarea name="" id="" cols="30" rows="10">Добавить более подробное описание...</textarea>
            <div class="Card_input_buttons">
              <p>Добавить на карточку</p>
              <button><img src="images/group (1) 1.png" alt=""></img>Участники</button>
              <button><img src="images/pin-mark 1.png" alt=""></img>Метки</button>
              <button><img src="images/check-list 1.png" alt=""></img>Чек-лист</button>
              <button><img src="images/time-and-date 1.png" alt=""></img>Дата</button>
            </div>
          </div>
          <h1><img src="images/card_settings.png" alt=""></img>Действия</h1>
          <div className="Card_input_Con">
            <input type="text" value="Напишите комментарий...."></input>
            <div className="Card_input_buttons">
              <p>Действия</p>
              <button><img src="images/four_arrows.png" alt=""></img>Перемещение</button>
              <button><img src="images/finish-flag 1.png" alt=""></img>Поля пользователя</button>
              <button><img src="images/archive 1.png" alt=""></img>Архивация</button>
            </div>
          </div>
        </div>
      </div>
      )}
      
      {overlayVisible && (
        <div className="overlay-active" onClick={handleOverlayClick} />
      )}
    </DashBoardLayout>
  );
}
