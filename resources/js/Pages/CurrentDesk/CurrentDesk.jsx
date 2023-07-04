import DashBoardLayout from "@/Layouts/DashBoardLayout.jsx";

import "../../../css/current_desk/current_desk.css";

export default function CurrentDesk (){

    return(
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
                            <ul className="task-list" id="to-do">
                                <li className="task">
                                    <p>Analysis Analysis Analysis Analysis Analysis</p>
                                </li>
                                <li className="task">
                                    <p>Coding</p>
                                </li>
                                <li className="task">
                                    <p>Card Sorting</p>
                                </li>
                                <li className="task">
                                    <p>Measure</p>
                                </li>
                                <li className="task">
                                    <img src="images/background1.png" alt=""/>
                                </li>
                            </ul>
                            <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                        </li>

                        <li className="column doing-column">
                            <div className="column-header">
                                <h4>Doing</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <ul className="task-list" id="doing">
                                <li className="task">
                                    <p>Hypothesis</p>
                                </li>
                                <li className="task">
                                    <p>User Testing</p>
                                </li>
                                <li className="task">
                                    <p>Prototype</p>
                                </li>
                            </ul>
                            <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                        </li>

                        <li className="column done-column">
                            <div className="column-header">
                                <h4>Done</h4>
                                <img src="images/bookmark (2) 2.png" alt=""/>
                            </div>
                            <ul className="task-list" id="done">
                                <li className="task">
                                    <p>Ideation</p>
                                </li>
                                <li className="task">
                                    <p>Sketches</p>
                                </li>
                            </ul>
                            <img className="plus_task" src="images/plus (3) 1.png" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </DashBoardLayout>
    )
}
