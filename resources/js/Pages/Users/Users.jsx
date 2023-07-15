import DashBoard from "@/Pages/DashBoard.jsx";

import "../../../css/users/users.css";

export default function Users() {

    return (
        <DashBoard>
            <div className="middle_desks_container">
                <div className="middle_top_body_users">
                    <div className="working_space">
                        <div className="working_space_img">
                            <img src="images/workingspaceborderfirst.png" alt=""/>
                            <img src="images/workingspace.png" alt=""/>
                            <img src="images/workingspaceborder.png" alt=""/>
                        </div>
                        <div className="workingspace_title">
                            <h3>Робочий простір Mevio <img src="images/edit_pen.png" alt=""/></h3>
                            <p><img src="images/graylock.png" alt=""/>Приватно</p>
                        </div>
                        <button><img src="images/inv_peopleIcon.png" alt=""/> Заглушити в робочий простір</button>
                    </div>
                </div>
                <div className="middle_middle_body">
                    <div className="users_container">
                        <h3>Учасники робочого простору(?)</h3>
                        <p>Учасники робочого простору можуть переглядати дошки для робочого простору та
                            приєднуватися до них і створювати дошки в цьому просторі</p>
                        <input type="text" placeholder="Фільтр за іменами"/>
                        <div className="users_list">
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Адміністратор</button>
                                    <button className="remove_user_btn"><img src="images/x_icon.png"
                                                                             alt=""/> Виключити
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Администратор</button>
                                    <button className="remove_user_btn"><img src="images/x_icon.png"
                                                                             alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Администратор</button>
                                    <button className="remove_user_btn"><img src="images/x_icon.png"
                                                                             alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Администратор</button>
                                    <button className="remove_user_btn"><img
                                        src="images/x_icon.png" alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Администратор
                                    </button>
                                    <button className="remove_user_btn"><img
                                        src="images/x_icon.png" alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button className="admin_user_btn">Администратор
                                    </button>
                                    <button className="remove_user_btn"><img
                                        src="images/x_icon.png" alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="list_user">
                                <img src="images/profile1.png" alt=""/>
                                <div className="user_name">
                                    <h4>Name</h4>
                                    <p>@name1234</p>
                                </div>
                                <div className="user_list_control">
                                    <h4>На доске(?)</h4>
                                    <button
                                        className="admin_user_btn">Администратор
                                    </button>
                                    <button className="remove_user_btn"><img
                                        src="images/x_icon.png" alt=""/> Исключить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashBoard>
    )
}
