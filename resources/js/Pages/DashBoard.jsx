import "../../css/layouts/dashboard_layout.css";

import {useState, useEffect, useLayoutEffect} from "react";

import { Head } from "@inertiajs/react";
import {Routes, Route, Link} from "react-router-dom";

import DeskPanel from "@/Pages/DeskPanel/DeskPanel.jsx";


const DashBoard = ({ desksData }) => {

    const [desks, setDesks] = useState([]);

    async function fetchData() {
        const resp = await axios.get('/user-own-desks');
        if (resp) {
            const data = await resp.data;
            setDesks(data);
        }
    }

    useLayoutEffect(() => {
        // fetchData();
        setDesks(desksData);
        console.log(desksData);
    }, [])

    const myDesks = desks.map((desk) => (
        <Link key={desk.id} to={'/current-desk'} className="my-desk-item">
          <span className="my-desk-item-span">
            <img className="my-desk-item-image" src={desk.deskTheme.backGroundImage} alt=""/>
            <span className="my-desk-item-title">{desk.deskName}</span>
          </span>
        </Link>
    ))

    return (
        <>
            <Head title={"Desks"}/>
            {/*<div className="TopInfo_Container">
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
                    <Link to={'/profile'}>
                        <img src="images/Ellipse 11.png" alt=""/>
                    </Link>
                </div>
            </div>*/}


            <div className="desks_body_container">
                <div className="side_Menu_Container">
                    <Link to={'/desk-panel'} className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/blackboard (1) 1.png" alt=""/>
                            <span>Дошки</span>
                          </span>
                        </button>
                    </Link>
                    {/*<Link to={'/users'} className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/group (1) 1.png" alt=""/>
                            <span>Учасники</span>
                          </span>
                        </button>
                    </Link>
                    <p className="sidebar-category-title">Робочий простір</p>
                    <Link to={'/calendar'} className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src="images/calendar (1) 1.png" alt=""/>
                            <span>Календар</span>
                          </span>
                        </button>
                    </Link>
                    <p className="sidebar-category-title">Мої дошки <span>+</span></p>
                    <div className="myDesks">
                        {myDesks}
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
                    </div>*/}
                </div>
                {/*{children}*/}
            </div>

            <Routes>
                <Route path='/desk-panel' element={<DeskPanel />} />
            </Routes>
        </>
    );

};

export default DashBoard;


