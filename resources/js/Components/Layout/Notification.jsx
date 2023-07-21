import "../../../css/layouts/notification.css";

export const Notification = ({mainTheme}) => {
    return(
        <div className="notification-container">
            <img className="notification-img"
                src={`/images/themes/${mainTheme.id}/bell.png`} alt=""/>
        </div>
    )
}
