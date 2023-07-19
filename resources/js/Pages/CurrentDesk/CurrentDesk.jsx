import '../../../css/current_desk/current_desk.css';

import React, { useRef, useEffect, useState } from 'react';
import { Card, Board } from '@/React-dnd-Components';
import axios from 'axios';
import { DashBoardLayout } from '@/Layouts/DashBoardLayout.jsx';
import { Link } from '@inertiajs/react';

export default function CurrentDesk({ cards, users }) {

  const [searchValue, setSearchValue] = useState('');

  //filter user display search
  const [filteredUsers, setFilteredUsers] = useState(users);

  //needed to remove text later from the search bar
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Filter the users based on the searchValue
    const filtered = users.filter(
      (user) => user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchValue, users]);

  const redirectToCreateCard = () => {
    window.location.href = '/create-card';
  };

  //needed for card display
  const cardRef = useRef(null);

  //drag and drop
  const handleDragEnd = () => {
    const card = cardRef.current;
    const parent = card.parentElement;
    const board = parent.closest('.board');

    if (!board) {
      const originalBoard = document.getElementById(card.dataset.originalBoard);
      if (originalBoard) {
        originalBoard.appendChild(card);
      }
    }
  };

  //Display the toggle invite div
  const ToggleInviteDesk = () => {
    const inv_desk = document.getElementsByClassName('Add_User_Overlayer')[0];
    const overlayer = document.getElementsByClassName(
      'Add_User_Background_Overlayer'
    )[0];

    if (overlayer.style.display == 'none' || overlayer.style.display == '') {
      inv_desk.style.display = 'block';
      overlayer.style.display = 'block';
    } else {
      inv_desk.style.display = 'none';
      overlayer.style.display = 'none';
    }
  };

  const sendEmail = async () => {
    if (searchValue.trim() === '') {
      // Empty search value, do not send email
      return;
    }

    const email = searchValue;
    const data = {
      email,
    };

    try {
      const response = await axios.post(
        'https://send-email-invitation-api.onrender.com/api/sendemail',
        data
      );
      //displays email sent!
      console.log(response.data);
      setNotification({
        type: 'success',
        message: 'Success! Your email has been sent.',
      });
      setSearchValue(''); // Clear the search bar
    } catch (error) {
      console.error(error);
      setNotification({
        type: 'error',
        message: 'An error occurred while sending the email.',
      });
    }
  };

  return (
    <DashBoardLayout>
      <div className='Add_User_Background_Overlayer' onClick={ToggleInviteDesk}></div>
      <div className='middle_desks_container'>
        <div className='middle_top_body_tasks'>
          <h1>Курсовой проект</h1>
          <div className='tasks_user_profiles'>
            <img src='images/profile1.png' alt='' />
            <img src='images/profile2.png' alt='' />
            <img src='images/profile3.png' alt='' />
            <img src='images/Ellipse 11.png' alt='' />
          </div>
          <button onClick={ToggleInviteDesk}>Поделиться</button>
          <img src='images/settings (1) 1.png' alt='' />
        </div>
        <div className='Add_User_Overlayer'>
          <h1 className='add_user_desk_h1'>Додати користувача до дошки</h1>
          <div className='Search_engine_add_desk'>
            <input
              type='text'
              className='Search_user_add'
              placeholder='Пошук...'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className='Add_unk_user' onClick={sendEmail}>
              Запросіть
            </button>
          </div>

          <div className='User_Add_List_Container'>
            <hr />
            {filteredUsers.map((user) => (
              <React.Fragment key={user.email}>
                <div className='User_Add_Container'>
                  <img className='add_user_pfp' src='{image}' alt='' />
                  <p>{user.email}</p>
                  <button className='add_btn_user_desk'>Додати</button>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
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
                <Card
                id="card-1"
                className="task"
                draggable="true"
                ref={cardRef}
                onDragEnd={handleDragEnd}
                data-original-board="to-do"
                > 
                  <p>Card one</p>
                </Card>
                
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