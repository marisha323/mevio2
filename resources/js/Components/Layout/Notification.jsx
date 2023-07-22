import "../../../css/layouts/notification.css";
import {useEffect, useState} from "react";

export const Notification = ({mainTheme}) => {




    return(
        <div className="notification-container">

            <div className={`notification-modal ${isVisible ? 'notification-modal-visible' : ''}`}>
                {invites}
            </div>

            <img onClick={()=>setIsInvitesVisible(!isInvitesVisible)}
                className={`notification-img ${isInvitations ? 'notification-animate' : ''}`}
                src={`/images/themes/${mainTheme.id}/bell.png`} alt=""/>

            {/*<div className={`notification-alert ${isInvitations ? 'alert' : ''}`}>
                <img className="alert-img"
                    src="/images/alert.png" alt="" />
            </div>*/}
        </div>
    )
}
