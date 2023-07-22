import '../../../css/current_desk/current_desk.css';
import "../../../css/modal/modal_desk.css";
import "../../../css/current_desk/modals.css";

import React, {useRef, useEffect, useState} from 'react';
import {Card, Board} from '@/React-dnd-Components';
import axios from 'axios';
import {DashBoardLayout} from '@/Layouts/DashBoardLayout.jsx';
import {Link, router} from '@inertiajs/react';



export default function CurrentDesk({cards, users,deskUsers}) {

    console.log(cards);
    console.log(users);
    console.log(deskUsers);

    //const cardsArray = Object.values(cards);//перетворення на масив
    const card1Array = Object.values(cards.card1);
    const card1Array2 = Object.values(cards.card2);
    const card1Array3 = Object.values(cards.card3);



    //  GET ColumnID
    const urlSearchParams = new URLSearchParams(window.location.search);
    const columnId = urlSearchParams.get("columnId");

    //GET DeskId

    const deskId = urlSearchParams.get('desk_id');
    console.log("DESK Id: " + deskId);
    const [searchValue, setSearchValue, setValues] = useState('');

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
    const [userId2, setUserId2] = useState('');

    // const ToggleVisibleModal = (id) => {
    //     setIsVisible(!isVisible);
    //     setSelectedCardId(id); // Зберігаємо значення id в стані для модального вікна
    // };

    const ToggleVisibleModal = (columnId,deskId) => {
        setIsVisible(!isVisible);
        setCardValues((prevValues) => ({
            ...prevValues,
            columnId: columnId,
            deskId:deskId,  ////////////////////////////added 21.7

        }));
    };

    //SAVE CARD TO DB


    // const handleCardChange = (userId) => {
    //     setSelectedUserId(userId);
    // };
    //Change values
    const [cardValues, setCardValues] = useState({
        cardName: "",
        description: "",
        deadLine: "",
        columnId: columnId || "",
        deskId:deskId,
    });


    function handleCardChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        console.log("VALUE:" + value);
        setCardValues((prevCardValues) => ({
            ...prevCardValues,
            [key]: value,
        }));
    }
// SAVE Card
    async function handleCardSubmit(e) {
        e.preventDefault();
        console.log(cardValues);
       axios.post("/posts/createCard", cardValues)
           .then((response)=>{console.log(response)})
           .catch((error)=>console.log(error));
        setCardValues({
            cardName: "",
            description: "",
            deadLine: "",
            columnId: "",
            deskId: ""
        });
        setIsVisible(false);
        // Reload the page to show the new card after successful submission.
        window.location.reload();
    }



    const [infoMessage, setInfoMessage] = useState("Fgjigj");

    function AddUserHandle(id){
        const infoModal = document.querySelector(".info-modal");
        const message = "Запрошення не відправлено"
        axios.post("/create-invitation",{
            targetId: id,
            deskId: parseInt(deskId)
        })
            .then((resp)=>{
                const data = resp.data.message;
                if(data === "success"){
                    setInfoMessage("Запрошення відправлено");
                }
                else {
                    setInfoMessage(message);
                }
                infoModal.classList.add("info-modal-visible");
            })
            .catch((error)=>{
                console.log(error);
                setInfoMessage(message);
                infoModal.classList.add("info-modal-visible");
            })

        ToggleInviteDesk();
    }

    function HideInfoModal () {
        const infoModal = document.querySelector(".info-modal");
        infoModal.classList.remove("info-modal-visible");
    }

    // Під час вибору опції з select, оновити значення userId в стані
    const handleUserSelect = (e) => {
        const selectedUserId = e.target.value;
        setUserId2(selectedUserId);
        setCardValues((prevCardValues) => ({
            ...prevCardValues,
            userId: selectedUserId,
        }));
    };
    return (
        <DashBoardLayout>
           <div onClick={ToggleVisibleModal}
                 className={`modal-card-container ${isVisible ? 'modal-card-visible' : 'modal-card-hide'}`}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <form className="modal-card-window" onSubmit={handleCardSubmit}>
                        <div>
                            <label className='label_style'>
                                Назва картки:
                            </label>
                            <div>
                                <input
                                    className="card_name"
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    value={cardValues.cardName}
                                    onChange={handleCardChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="description" className="label_style">
                                    Опис:</label>
                            </div>
                            <div>
                                <textarea className="card_textarea"
                                          id="description"
                                          name="description"
                                          value={cardValues.description}
                                          onChange={handleCardChange}>
                            </textarea>
                            </div>
                        </div>
                        <div><div>
                            <label  className="label_style">
                                Дата:</label>
                        </div>
                            <div>
                                <input type="date"
                                       className="card_date"
                                       id="deadLine"
                                       name="deadLine"
                                       value={cardValues.deadLine}
                                       onChange={handleCardChange}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description" className="label_style">
                                Відповідальний за завдання:</label>
                        </div>
                        <div>
                            <select value={userId2} onChange={handleUserSelect} className="select_card">
                                  {deskUsers.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-info btn2">
                                Зберегти карточку
                            </button>
                        </div>
                    </form>
                </div>
            </div>

           <div className="info-modal">
                <div className="info-modal-message">{infoMessage}</div>
               <button onClick={HideInfoModal}
                   className="info-modal-button">OK</button>
           </div>



            <div className='Add_User_Background_Overlayer' onClick={ToggleInviteDesk}></div>
            <div className='middle_desks_container'>
                <div className='middle_top_body_tasks'>
                    <h1>Курсовий проект</h1>
                    <div className='tasks_user_profiles'>
                        {deskUsers.map((user)=>(
                        <img className='imguser' src={`userLogoPath/${user.userLogoPath}`} alt=''/>

                        ))}

                    </div>
                    <button onClick={ToggleInviteDesk}>Поділитися</button>
                    <img src='images/settings (1) 1.png' alt=''/>
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
                            Запросити
                        </button>
                    </div>

                    <div className='User_Add_List_Container'>
                        <hr/>
                        {filteredUsers.map((user) => (
                            <React.Fragment key={user.email}>
                                <div className='User_Add_Container'>
                                    <img className='add_user_pfp' src={`userLogoPath/${user.userLogoPath}`} alt=''/>
                                    <p>{user.email}</p>
                                    <button onClick={()=>AddUserHandle(user.id)}
                                        className='add_btn_user_desk'>Додати</button>
                                </div>
                                <hr/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="main-container">
                    <ul className="columns">
                        <li className="column to-do-column">
                            <div className="column-header">
                                <h4>Потрібно зробити</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>

                            <Board id="to-do" className="task-list" columnId={1}>
                                {card1Array.map((card) => (
                                    <div key={card.id}>
                                        <Card
                                            className="task"
                                            columnId={1}
                                            cardId={card.id}
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
                            </Board>
                            <button onClick={() => ToggleVisibleModal('1',deskId,setSelectedUserId)}>
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
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <Board id="doing" className="task-list" columnId={2}>
                                {card1Array2.map((card) => (
                                    <div key={card.id}>
                                        <Card
                                            className="task"
                                            columnId={2}
                                            cardId={card.id}
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
                            </Board>
                            <button onClick={() => ToggleVisibleModal('2',deskId)}>
                                <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                            </button>
                        </li>

                        <li className="column done-column">
                            <div className="column-header">
                                <h4>Виконано</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <Board id="done" className="task-list" columnId={3}>
                                {card1Array3.map((card) => (
                                    <div key={card.id}>
                                        <Card
                                            className="task"
                                            columnId={3}
                                            cardId={card.id}
                                            key={card.id}
                                            id={card.id}
                                            draggable="true"
                                            ref={cardRef}
                                            onDragEnd={(e) => handleDragEnd(e, card.id, 3)}
                                            data-original-board="done"
                                        >
                                            <p>{card.cardName}</p>
                                        </Card>
                                    </div>
                                ))}
                            </Board>
                            <button onClick={() => ToggleVisibleModal('3',deskId)}>
                                <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </DashBoardLayout>
    );
}
