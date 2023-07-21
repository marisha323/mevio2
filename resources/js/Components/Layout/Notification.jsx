import "../../../css/layouts/notification.css";
import {useEffect, useState} from "react";
import {NotificationModal} from "@/Components/Layout/NotificationModal.jsx";

export const Notification = ({mainTheme}) => {

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
                setInvitations(resp.data)
            })
    },[])

    const [isVisible, setIsVisible] = useState(true);


    return(
        <div className="notification-container">
            <NotificationModal isVisible={isVisible} invitations={invitations} />

            <img onClick={()=>setIsVisible(!isVisible)}
                className={`notification-img ${isInvitations ? 'notification-animate' : ''}`}
                src={`/images/themes/${mainTheme.id}/bell.png`} alt=""/>

            {/*<div className={`notification-alert ${isInvitations ? 'alert' : ''}`}>
                <img className="alert-img"
                    src="/images/alert.png" alt="" />
            </div>*/}
        </div>
    )
}
