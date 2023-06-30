import DashBoardLayout from "@/Layouts/DashBoardLayout.jsx";

import "../../../css/users/users.css";

export default function Users() {

    return (
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body_users">
                    <div className="working_space">
                        <div className="working_space_img">
                            <img src="images/workingspaceborderfirst.png" alt=""/>
                            <img src="images/workingspace.png" alt=""/>
                            <img src="images/workingspaceborder.png" alt=""/>
                        </div>
                        <div className="workingspace_title">
                            <h3>Рабочее пространство Mevio <img src="images/edit_pen.png" alt=""/></h3>
                            <p><img src="images/graylock.png" alt=""/>Приватно</p>
                        </div>
                        <button><img src="images/inv_peopleIcon.png" alt=""/> Приглосить в рабочее пространство</button>
                    </div>
                </div>
                <div className="middle_middle_body">
                    <div className="users_container">
                        <h3>Участники рабочего пространства(?)</h3>
                        <p>Участники рабочего пространства могут просматривать доски для рабочего пространства и
                            присоединяться к ним а так-же создавать доски в этом пространстве</p>
                        <input type="text" placeholder="Фильтр по именам"/>
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
        </DashBoardLayout>
    )
}
