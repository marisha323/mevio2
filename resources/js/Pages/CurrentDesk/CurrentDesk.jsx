import '../../../css/current_desk/current_desk.css';
import "../../../css/modal/modal_desk.css";

import React, { useRef, useEffect, useState } from 'react';
import { Card, Board } from '@/React-dnd-Components';
import axios from 'axios';
import { DashBoardLayout } from '@/Layouts/DashBoardLayout.jsx';
import {Link, router} from '@inertiajs/react';
//import card from "@/React-dnd-Components/Card.jsx";

export default function CurrentDesk({ cards, users }) {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const columnId = urlSearchParams.get("columnId");

  const [searchValue, setSearchValue, setValues] = useState({
      cardName: "",
      description: "",
      deadLine: "",
      columnId: columnId || "", // FROM QUERY PARAMS
  });





  //filter user display search
  const [filteredUsers, setFilteredUsers] = useState(users);

  //needed to remove text later from the search bar
  const [notification, setNotification] = useState(null);

  useEffect(() => {
      console.log(11);
    // Filter the users based on the searchValue
    const filtered = users.filter(
      (user) => user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchValue, users]);

  // const redirectToCreateCard = () => {
  //   window.location.href = '/create-card';
  // };

  //needed for card display
  const cardRef = useRef(null);

  //drag and drop
    const handleDragEnd = (e, cardId, newColumnId) => {
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

    //drag and drop


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
//////////////////////////////// FOR MODAL WINDOW
    const [isVisible, setIsVisible] = useState(false);
    function ToggleVisibleModal () {
        console.log("sinvdn");
        setIsVisible(!isVisible);
    }




    // const [values, setValues] = useState({
    //     cardName: "",
    //     description: "",
    //     deadLine: "",
    //     columnId: columnId || "", // Встановлюємо значення columnId з queryParams, або пустий рядок, якщо параметр відсутній
    // });
    console.log(111);
    console.log(columnId);
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await router.post("/posts/createCard", values);
        setValues({
            cardName: "",
            description: "",
            deadLine: "",
            columnId: columnId,
        });
    }

  return (
    <DashBoardLayout>
        <div onClick={ToggleVisibleModal} className ={`modal-card-container ${isVisible ? 'modal-card-visible' : 'modal-card-hide'}`}>
            <div className="modal-card-window">

                <div className="m-10">

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">
                                Назва картки:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={values.cardName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="form-label">
                                Опис:</label>
                            <textarea
                                className="form-textarea"
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={handleChange}>

                    </textarea>
                        </div>
                        <div>
                            <input
                                type="date"
                                id="deadLine"
                                name="deadLine"
                                value={values.deadLine}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-info">
                                Зберегти карточку
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
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
                <h4>Потрібно зробити</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
                <Board id="to-do" className="task-list" columnId={1}>
                    {cards.card1.map((card) => (
                        <div key={card.id}>
                            <Card
                                className="task"
                                columnId={1} // add
                                cardId={card.id} // add
                                key={card.id}
                                id={card.id}
                                draggable="true"
                                ref={cardRef}
                                onDragEnd={(e) => handleDragEnd(e, card.id, 1)}
                                data-original-board="to-do"
                            >
                                <p>{card.cardName}</p>
                            </Card>
                        </div>
                    ))}
                    {/*<Card*/}
                    {/*    id="card-1"*/}
                    {/*    className="task"*/}
                    {/*    draggable="true"*/}
                    {/*    ref={cardRef}*/}
                    {/*    onDragEnd={(e) => handleDragEnd(e, "card-1", 1)}*/}
                    {/*    data-original-board="to-do"*/}
                    {/*>*/}
                    {/*    <p>Card one</p>*/}
                    {/*</Card>*/}
                </Board>
                <button onClick={ToggleVisibleModal} id='1'>
                    <img
                        className="plus_task"
                        src="images/plus (3) 1.png"
                        alt=""
                    />
                </button>
            </li>

              <li className="column doing-column">
                  <div className="column-header">
                      <h4>В Pоботі</h4>
                      <img src="images/bookmark (2) 2.png" alt="" />
                  </div>
                  <Board id="doing" className="task-list" columnId={2}>
                      {cards.card2.map((card) => (
                          <div key={card.id}>
                              <Card
                                  className="task"
                                  //columnId={2} //add
                                  cardId={card.id} // add
                                  key={card.id}
                                  id={card.id}
                                  draggable="true"
                                  ref={cardRef}
                                  onDragEnd={(e) => handleDragEnd(e, card.id, 2)}
                                  data-original-board="doing"
                              >
                                  <p>{card.cardName}</p>
                              </Card>
                          </div>
                      ))}
                      {/*<Card*/}
                      {/*    id="card-2"*/}
                      {/*    className="task"*/}
                      {/*    draggable="true"*/}
                      {/*    ref={cardRef}*/}
                      {/*    onDragEnd={(e) => handleDragEnd(e, "card-2", 2)}*/}
                      {/*    data-original-board="doing"*/}
                      {/*>*/}
                      {/*    <p>Card two</p>*/}
                      {/*</Card>*/}
                  </Board>
                  <button onClick={ToggleVisibleModal}>
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </button>
            </li>

            <li className="column done-column">
              <div className="column-header">
                <h4>Виконано</h4>
                <img src="images/bookmark (2) 2.png" alt="" />
              </div>
              <Board id="done" className="task-list" columnId={3}>
                {cards.card3.map((card)=>(
                  <div key={card.id}>
                  <Card className="task"
                  columnId={3}
                  cardId={card.id}
                  id={card.id}
                   key={card.id}
                   draggable="true"
                   ref={cardRef}
                   onDragEnd={(e) => handleDragEnd(e, card.id, 3)}
                   data-original-board="done"
                   >
                      <p>{card.cardName}</p>
                  </Card>
              </div>
                ))}
                  {/*<Card*/}
                  {/*    id="card-3"*/}
                  {/*    className="task"*/}
                  {/*    draggable="true"*/}
                  {/*    ref={cardRef}*/}
                  {/*    onDragEnd={(e) => handleDragEnd(e, "card-3", 3)}*/}
                  {/*    data-original-board="done"*/}
                  {/*>*/}
                  {/*    <p>Card one</p>*/}
                  {/*</Card>*/}
              </Board>
                <button onClick={ToggleVisibleModal}>
                    <img className="plus_task" src="images/plus (3) 1.png" alt="" />
                </button>
            </li>
          </ul>
        </div>
      </div>
    </DashBoardLayout>
  );
}
