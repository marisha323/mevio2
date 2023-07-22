import "../../css/layouts/dashboard_layout.css";

import {useState, useEffect, useLayoutEffect, useCallback} from "react";

import { Head, Link } from "@inertiajs/react";
import {Preloader} from "@/Components/Preloader.jsx";
import {useSelector, useDispatch} from "react-redux";
import {useActions} from "@/Hooks/useActions.js";
import {useThemes} from "@/Hooks/useThemes.js";
import {AddDeskModal} from "@/Components/Modal/AddDesk/AddDeskModal.jsx";
import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {FavoriteDesks} from "@/Components/Sidebar/FavoriteDesks.jsx";
import {ArchiveDesks} from "@/Components/Sidebar/ArchiveDesks.jsx";
import {Notification} from "@/Components/Layout/Notification.jsx";




export const DashBoardLayout = ({ children }) => {
    const [showFavorite, setShowFavorite] = useState(false);
    const [showMyDesks, setShowMyDesks] = useState(true);
    const [showArchive, setShowArchive] = useState(false);

    const {
        showAddDeskModal
    } = useActions();


    const AddDeskHandler = (e) => {
        e.preventDefault();
        showAddDeskModal();
    }

    const [mainTheme, setMainTheme] = useState({});

    const {
        fillThemes,
        getThemeById,
        setDefaultTheme,
        getDefaultTheme
    } = useActions();

    const {defaultTheme} = useThemes();

    const [desks, setDesks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function fetchData() {
        const resp = await axios.get('/user-own-desks');
        if (resp) {
            const data = await resp.data;
            setDesks(data);
            setIsLoading(false);
        }
    }

    useEffect(  () => {
        fetchData();
        fillThemes();
    }, [])

    useEffect( () => {
        setMainTheme(defaultTheme);
    },[defaultTheme])


    const myDesks = desks.map((desk) => (
        <Link key={desk.id} href={`/current-desk?desk_id=${desk.id}`} className="my-desk-item"
              onClick={()=>{setDefaultTheme(desk.themeId)}}
            style={{borderBottom: `5px solid ${mainTheme.sidebar_category_bg_color}`}}>
          <span className="my-desk-item-span">
            <img className="my-desk-item-image" src={desk.deskTheme.backGroundImage} alt=""/>
            <span className="my-desk-item-title"
                  style={{color: mainTheme.left_sidebar_font_color}}>{desk.deskName}</span>
          </span>
        </Link>
    ))





    const [invitations, setInvitations] = useState([]);
    const [isInvitations, setIsInvitations] = useState(false);

    useEffect(()=>{
        if (invitations.length > 0){
            setIsInvitations(true);
        }
    },[invitations])


    useEffect(()=>{
        axios.get("/get-all-invitations")
            .then((resp)=>{
                setInvitations(resp.data);
                console.log(resp.data);
            })
    },[])

    const [isInvitesVisible, setIsInvitesVisible] = useState(false);


    function RejectInviteHandle (id) {
        // setInvitations(invitations.filter((item)=>item.id !== id))
        const invite = document.getElementById(`invite_${id}`);
        invite.classList.add("invite-reject");
        setTimeout(()=>{
            invite.remove();
        },300)

    }

    function AcceptInviteHandle (id) {
        // setInvitations(invitations.filter((item)=>item.id !== id))
        const invite = document.getElementById(`invite_${id}`);
        invite.classList.add("invite-accept");
        setTimeout(()=>{
            invite.remove();
        },300)
    }


    const invites = invitations.map((invite)=>{
        return(
            <div className="invite"
                id={`invite_${invite.id}`}>
                <div className="invite-user-name">{invite.senderUser.name}</div>
                <div className="invite-user-email">{invite.senderUser.email}</div>
                <div className="invite-text">Запрошує вас до дошки:</div>
                <div className="invite-desk-name">"{invite.Desk.deskName}"</div>
                <div className="invite-buttons">
                    <button className="invite-button reject"
                            onClick={()=>RejectInviteHandle(invite.id)}>
                        Відхилити
                    </button>
                    <button className="invite-button accept"
                            onClick={()=>AcceptInviteHandle(invite.id)}>
                        Прийняти
                    </button>
                </div>

            </div>
        )
    })






    const image = mainTheme.backGroundImage ?? "/images/preloader/preload_background.png";

    if (isLoading){
        return(
            <>
                <Preloader image={image} />
            </>
        )
    }
    return (
        <div>
            <div className={`notification-modal ${isInvitesVisible ? 'notification-modal-visible' : ''} `}>
                {invites}
            </div>
            <div style={{backgroundImage: `url(${image})`}} className={"background-block"}>

            </div>
            <Head title={"Desks"}/>
            <div className="TopInfo_Container"
                style={{backgroundColor: mainTheme.layout_header_bg_color}}>
                <Link href={"/"}>
                <div className="Mevio_Title">

                        <img src={`/images/themes/${mainTheme.id}/logo.png`} alt=""/>

                    <h2 style={{color: mainTheme.logo_font_color}}>Mevis</h2>
                </div>
                </Link>
                <div className="toTheRight_container">
                    <div className="notification-container">


                        <img onClick={()=>setIsInvitesVisible(!isInvitesVisible)}
                             className={`notification-img ${isInvitations ? 'notification-animate' : ''}`}
                             src={`/images/themes/${mainTheme.id}/bell.png`} alt=""/>
                    </div>



                    {/*<Notification mainTheme={mainTheme} />*/}

                    <Link href={'/profile'}>
                        <img src="images/Ellipse 11.png" alt=""/>
                    </Link>
                </div>
            </div>


            <div className="desks_body_container">
                <div className="side_Menu_Container"
                    style={{background: mainTheme.left_sidebar_bg_color}}>
                    <Link href={"/desk-panel"} className="sidebar-menu-item"
                        style={{borderBottom: `5px solid ${mainTheme.sidebar_category_bg_color}`,
                                borderRight: `2px solid ${mainTheme.sidebar_category_bg_color}`}}>
                        <button>
                          <span>
                            <img src={`/images/themes/${mainTheme.id}/board.png`} alt=""/>
                            <span style={{color: mainTheme.left_sidebar_font_color}}>Дошки</span>
                          </span>
                        </button>
                        <button className="add-button add-desk"
                                style={{color: mainTheme.left_sidebar_font_color}}
                        onClick={AddDeskHandler}>+</button>
                    </Link>
                    <Link href={'/users'} className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src={`/images/themes/${mainTheme.id}/people.png`} alt=""/>
                            <span style={{color: mainTheme.left_sidebar_font_color}}>Учасники</span>
                          </span>
                        </button>
                    </Link>
                    <p className="sidebar-category-title"
                        style={{backgroundColor: mainTheme.sidebar_category_bg_color,
                            color: mainTheme.left_sidebar_font_color}}>Робочий простір</p>
                    <Link href={'/calendar'} className="sidebar-menu-item">
                        <button>
                          <span>
                            <img src={`/images/themes/${mainTheme.id}/calendar.png`} alt=""/>
                            <span style={{color: mainTheme.left_sidebar_font_color}}>Календар</span>
                          </span>
                        </button>
                    </Link>
                    <p className="sidebar-category-title pointer"
                       onClick={()=>setShowMyDesks(!showMyDesks)}
                       style={{backgroundColor: mainTheme.sidebar_category_bg_color,
                           color: mainTheme.left_sidebar_font_color,
                            borderBottom: `2px solid`}}>Мої дошки
                        <span>
                            <img src={`/images/themes/${mainTheme.id}/arrow_down.svg`} alt=""
                                className={`arrow-img ${showMyDesks ? "" : "rotate-arrow"}`}/>
                        </span>
                    </p>
                    <div className={`myDesks ${showMyDesks ? "" : "hide-my-desks"}`}>
                        {myDesks}
                    </div>
                    <p className="sidebar-category-title pointer"
                       onClick={()=>setShowFavorite(!showFavorite)}
                       style={{backgroundColor: mainTheme.sidebar_category_bg_color,
                           color: mainTheme.left_sidebar_font_color,
                            borderRight: `2px solid`}}>
                        Обране
                        <span>
                            <img className={`arrow-img ${showFavorite ? "" : "rotate-arrow"}`}
                                 src={`/images/themes/${mainTheme.id}/arrow_down.svg`}
                                 alt=""/>
                        </span>
                    </p>
                    <div className={`myDesks ${showFavorite ? "" : "hide-my-desks"}`}>
                        <FavoriteDesks mainTheme ={mainTheme} />
                    </div>

                    <p className="sidebar-category-title pointer"
                       onClick={()=>setShowArchive(!showArchive)}
                       style={{backgroundColor: mainTheme.sidebar_category_bg_color,
                           color: mainTheme.left_sidebar_font_color,
                            borderTop: `2px solid`}}>
                        Архів
                        <span>
                            <img className={`arrow-img ${showArchive ? "" : "rotate-arrow"}`}
                                 src={`/images/themes/${mainTheme.id}/arrow_down.svg`}
                                 alt=""/>
                        </span>
                    </p>
                    <div className={`myDesks ${showArchive ? "" : "hide-my-desks"}`}>
                        <ArchiveDesks mainTheme ={mainTheme} />
                    </div>
                </div>
                {children}
            </div>
            <AddDeskModal />

        </div>
    );
};


