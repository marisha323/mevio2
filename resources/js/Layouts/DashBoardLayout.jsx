import "../../css/layouts/dashboard_layout.css";
const DashBoard = ({ children }) => {

    return (
        <>
            <div className="TopInfo_Container">
                <div className="Mevio_Title">
                    <img src="images/MevioGreen_rec.png" alt=""/>
                    <h2>Mevio</h2>
                </div>
                <div className="toTheRight_container">
                    <div className="loupe_container">
                        <img src="images/loupe (1) 1.png" alt=""/>
                        <input className="searcher" type="text" placeholder="Пошук..."/>
                    </div>

                    <img src="images/bell (3) 1.png" alt=""/>
                    <button>
                        <img src="images/Ellipse 11.png" alt=""/>
                    </button>
                </div>
            </div>


            <div className="desks_body_container">
                <div className="side_Menu_Container">
                    <button className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/blackboard (1) 1.png" alt=""/>
                            <span>Дошки</span>
                          </span>
                        </button>
                    </button>
                    <button className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/group (1) 1.png" alt=""/>
                            <span>Учасники</span>
                          </span>
                        </button>
                    </button>
                    <p className="sidebar-category-title">Робочий простір</p>
                    <button className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/calendar (1) 1.png" alt=""/>
                            <span>Календар</span>
                          </span>
                        </button>
                    </button>
                    <p className="sidebar-category-title">Мої дошки <span>+</span></p>
                    <div className="myDesks">
                    </div>
                    <p className="sidebar-category-title">Обране<span><img className="rotate_img"
                                                                           src="images/right-arrow-angle (1) 1.png"
                                                                           alt=""/></span>
                    </p>
                    <div className="myDesks">
                        <button className="desk">
                          <span>
                            <img src="images/background1.png" alt=""/>
                            <span>Курсовий проект</span>
                          </span>
                        </button>
                        <button className="desk">
              <span>
                <img src="images/background2.png" alt=""/>
                <span>CRM Project</span>
              </span>
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default DashBoard;


