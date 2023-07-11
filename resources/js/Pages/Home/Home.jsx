import {Link, Head} from "@inertiajs/react";
import '../../../css/home/home.css';



function StartPage() {
  return (
    <>
    <Head title={"Welcome"} />
    <div className="Start-Container">
    <div className="topMenuLogin">
        <h4>MEVIO</h4>
        <Link href={"/login"}><h4>Войти</h4></Link>
      </div>
      <div className="StartBody">
      <div className="startGImage">
        <div className="h1-btn-register">
          <h1 className="h1Mevio">MEVIO Version 2 <span>помогает собрать всех сотрудников, задачи и инструменты в одном месте</span></h1>
          <Link href={"/register"} className={"register-btn"}>Зарегистрируйтесь</Link>
          <img className="vector" src="images/Vector.png" alt="Vector" />
        </div>
      </div>
        <h5>MEVIO Version 2</h5>
        <div className="BoostSource">
            <h1>Источник повышения <br/> производительности</h1>
        </div>
        <li className="start-li">
            Простые, с гибкими настройками и широкими возможностями.<br/>&nbsp;&nbsp;&nbsp;&nbsp;
            Доски, колонки и карточки дают исчерпывающее представление о <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            том, кто чем занимается и что нужно выполнить.<br/>
        </li>
        <div className="Columns">
            <h4>Доски</h4>
            <p>Благодаря доскам <span>MEVIO</span> задания упорядочиваются, а работа движется.
            Достаточно одного взгляда, чтобы увидеть все задачи, от запланированных до выполненных.
            </p>
        </div>
        <div className="Columns">
            <h4>Колонки</h4>
            <p>
                Различные этапы выполнения задания. Начните с простых этапов (&lt;&lt; Нужно)
                 сделать&gt;&gt;, &lt;&lt;В работе&gt;&gt;, &lt;&lt;Готово&gt;&gt;) или
                создайте собственный рабочий процесс, точно соответствующий потребностям вашей
                команды. В <span>MEVIO</span> нет неправильных подходов.
            </p>
        </div>
        <div className="Columns">
            <h4>Карточки</h4>
            <p>
                Карточки представляют задания и идеи и содержат всю информацию, необходимую для выполнения работы.
                По мере выполнения заданий перетаскивайте карточки между колонками, чтобы изменить из статус
            </p>
        </div>
        <div className="ImageContainer">
        <img className="topArrow" src="images/Vector 27.png" alt="Vector" />
        <img className="GroupBox1" src="images/Group 18.png" alt="Group1"/>
        <img className="leftArrow" src="images/Vector 25.png" alt="Vector" />
        <img className="GroupBox2" src="images/Group 19.png" alt="Group2"/>
        <img className="rightArrow" src="images/Vector 28.png" alt="Vector" />
        <img className="GroupBox3" src="images/Group 20.png" alt="Group2"/>
        </div>
        <h2 className="h2-intelect">Защита Вашей Интеллектуальной Собственности</h2>
        <div className="BoostSource1">
            <h1>Ваша <br/> безопасность.<br/>Наша забота.</h1>
        </div>
        <ul className="protectionList">
            <li>В MEVIO, мы серьезно относимся к вашей конфиденциальности и безопасности.</li>
            <li>MEVIO является сервисом, сертифицированным Trusted Cloud, и полностью соответствует EU-GDPR.</li>
            <li>Все наши приложения размещаются на территории Европейского Союза в дата-центрах, сертифицированных
                 по стандарту ISO 27001, во Франкфурте, Германия.</li>
            <li>Другие функции безопасности верхнего уровня включают стандартное 256-битное шифрование SSL, двухфакторную аутентификацию и детальные разрешения в приложениях.</li>
        </ul>
        <img className="Shield" src="images/document_0 1.png" alt="Shield"/>
        {/* <div className="container">
          <h1 id="polygon-heading" className="Start-h1">Начать</h1>
          <div className="image-container">
            <img className="Exclude" src={Exclude} alt="Exclude" />
           </div>
        </div> */}

        <div class="endGImage">
          <div class="image-container">
            <h1 id="polygon-heading" class="Start-h1">Начать</h1>
            <div class="polygon-image"></div>
          </div>
          <img className="Polygon" src="images/Polygon 7.png" alt="Polygon"/>
          <div className="ChatBot-Img">
            <img className="chatImg" src="images/chat-bot (1) 1.png" alt ="ChatImg"/>
          </div>
          <img className="Polygon1" src="images/Polygon 7.png" alt="Polygon"/>
          <div className="Lock-Img">
            <img className="chatImg" src="images/free-icon-lock-483412 2.png" alt ="ChatImg"/>
          </div>
          <img className="Polygon2" src="images/Polygon 7.png" alt="Polygon"/>
          <div className="Study-Img">
            <img className="StudyImg" src="images/free-icon-study-8131392 1.png" alt="Study"/>
          </div>
          <img className="Polygon3" src="images/Polygon 7.png" alt="Polygon"/>
          <div className="SofaImg" alt="Sofa">
            <img className="StudyImg" src="images/free-icon-sofa-4216214 1.png" alt="Study"/>
          </div>
          <img className="Polygon4" src="images/Polygon 7.png" alt="Polygon"/>
          <div className="BrushImg">
            <img className="StudyImg" src="images/free-icon-paint-brushes-751433 1.png" alt="Study"/>
          </div>
        </div>
      </div>





      <div className="Start-Footer">
        <h5>MEVIO<br/><br/><br/><br/><br/><span className="Language">🌍Українська</span></h5>
        <h5>О нас<span><br/>Контракты</span></h5>
        <h5>Навигация<span> Безопасность<br/>Доски</span></h5>
        <h5>Обратная связь<span> +380 6789891239<hr/></span><br/>
            <div className="Socials">
                <img src="images/instagram 1.png" alt="instagram"/>
                <img src="images/telegram-logo 1.png" alt="telegram"/>
                <img src="images/youtube 1.png" alt="youtube" />
                <img src="images/smallPoly.png" alt="smallPoly"/>
            </div>
        </h5>
      </div>
    </div>
    </>
  );
}

export default StartPage;
