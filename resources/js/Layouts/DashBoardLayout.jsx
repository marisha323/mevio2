import {Link, Head} from "@inertiajs/react";
import {useState,useEffect, useLayoutEffect} from "react";


import "../../css/layouts/dashboard_layout.css";




const DashBoardLayout = ({children, auth}) => {

    const [desks, setDesks] = useState([]);

    async function fetchData () {
        const resp = await axios.get('/user-desks');
        if (resp) {
            const data = await resp.data;
            setDesks(data);
        }
    }

    useLayoutEffect(()=>{
        fetchData();
    },[])


    const deskItems = desks.map((desk) => (
        <Link key={desk.id} href={'/current-desk'} className="desk">
          <span>
            <img src="images/background1.png" alt=""/>
            <span>{desk.deskName}</span>
          </span>
        </Link>
    ))

    if (desks === null) {
        return <>Loading...</>
    }

    return (
        <>
            <Head title={"Desks"}/>
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
                    <Link href={'/profile'}>
                        <img src="images/Ellipse 11.png" alt=""/>
                    </Link>
                </div>
            </div>
            <div className="desks_body_container">
                <div className="side_Menu_Container">
                    <Link href={'/desk-panel'}>
                        <button>
              <span>
                <img src="images/blackboard (1) 1.png" alt=""/>
                <span>Дошки</span>
              </span>
                        </button>
                    </Link>
                    <hr/>
                    <Link href={'/users'}>
                        <button>
              <span>
                <img src="images/group (1) 1.png" alt=""/>
                <span>Учасники</span>
              </span>
                        </button>
                    </Link>
                    <hr/>
                    <p>Робочий простір</p>
                    <hr/>
                    <Link href={'/calendar'}>
                        <button>
              <span>
                <img src="images/calendar (1) 1.png" alt=""/>
                <span>Календар</span>
              </span>
                        </button>
                    </Link>
                    <hr/>
                    <p>Мої дошки <span>+</span></p>
                    <hr/>
                    <div className="myDesks">
                        {deskItems}
                    </div>
                    <p>Вибране<span><img className="rotate_img" src="images/right-arrow-angle (1) 1.png" alt=""/></span>
                    </p>
                    <hr/>
                    <div className="myDesks">
                        <button className="desk">
              <span>
                <img src="images/background1.png" alt=""/>
                <span>Курсовий проект</span>
              </span>
                        </button>
                        <hr/>
                        <button className="desk">
              <span>
                <img src="images/background2.png" alt=""/>
                <span>CRM Project</span>
              </span>
                        </button>
                        <hr/>
                    </div>
                </div>
                {children}
            </div>
        </>
    );

};

export default DashBoardLayout;


