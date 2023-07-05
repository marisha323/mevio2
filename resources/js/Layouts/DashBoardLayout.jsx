import "../../css/layouts/dashboard_layout.css";

const redirectToDeskPanel = () => {
  window.location.href = "/desk_panel";
};

const redirectToUsers = () => {
  window.location.href = "/users";
};

const redirectToCalendar = () => {
  window.location.href = "/calendar";
};

const redirectToCurrentDesk = () => {
  window.location.href = "/current-desk";
};

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <div className="TopInfo_Container">
        <div className="Mevio_Title">
          <img src="images/MevioGreen_rec.png" alt="" />
          <h2>Mevio</h2>
        </div>
        <div className="toTheRight_container">
          <div className="loupe_container">
            <img src="images/loupe (1) 1.png" alt="" />
            <input className="searcher" type="text" placeholder="Пошук..." />
          </div>
          <button className="create_btn">Створити</button>
          <img src="images/paint-brush (2) 1.png" alt="" />
          <img src="images/bell (3) 1.png" alt="" />
          <img src="images/Ellipse 11.png" alt="" />
        </div>
      </div>
      <div className="desks_body_container">
        <div className="side_Menu_Container">
          <button onClick={redirectToDeskPanel}>
            <span>
              <img src="images/blackboard (1) 1.png" alt="" />
              <span>Дошки</span>
            </span>
          </button>
          <hr />
          <button onClick={redirectToUsers}>
            <span>
              <img src="images/group (1) 1.png" alt="" />
              <span>Учасники</span>
            </span>
          </button>
          <hr />
          <p>Робочий простір</p>
          <hr />
          <button onClick={redirectToCalendar}>
            <span>
              <img src="images/calendar (1) 1.png" alt="" />
              <span>Календар</span>
            </span>
          </button>
          <hr />
          <p>Мої дошки <span>+</span></p>
          <hr />
          <div className="myDesks">
            <button className="desk" onClick={redirectToCurrentDesk}>
              <span>
                <img src="images/background1.png" alt="" />
                <span>Курсовий проект</span>
              </span>
            </button>
            <hr />
            <button className="desk">
              <span>
                <img src="images/background2.png" alt="" />
                <span>CRM Project</span>
              </span>
            </button>
            <hr />
          </div>
          <p>Вибране<span><img className="rotate_img" src="images/right-arrow-angle (1) 1.png" alt="" /></span></p>
          <hr />
          <div className="myDesks">
            <button className="desk">
              <span>
                <img src="images/background1.png" alt="" />
                <span>Курсовий проект</span>
              </span>
            </button>
            <hr />
            <button className="desk">
              <span>
                <img src="images/background2.png" alt="" />
                <span>CRM Project</span>
              </span>
            </button>
            <hr />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default DashBoardLayout;