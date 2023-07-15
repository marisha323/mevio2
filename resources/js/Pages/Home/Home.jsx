import {Link, Head} from "@inertiajs/react";
import '../../../css/home/home.css';



function StartPage() {
  return (
    <>
    <Head title={"Welcome"} />
    <div className="Start-Container">
    <div className="topMenuLogin">
        <h4>MEVIO</h4>
        <Link href={"/login"}><h4>Увійти</h4></Link>
      </div>
      <div className="StartBody">
      <div className="startGImage">
        <div className="h1-btn-register">
          <h1 className="h1Mevio">MEVIO Version 2 <span>допомагає зібрати всіх співробітників, завдання та інструменти в одному місці</span></h1>
          <Link href={"/register"} className={"register-btn"}>Зареєструватися</Link>
          <img className="vector" src="images/Vector.png" alt="Vector" />
        </div>
      </div>
        <h5>MEVIO Version 2</h5>
        <div className="BoostSource">
            <h1>Джерело підвищення <br/> продуктивності</h1>
        </div>
        <li className="start-li">
            Прості, з гнучкими налаштуваннями та широкими можливостями.<br/>&nbsp;&nbsp;&nbsp;&nbsp;
            Дошки, колонки та картки дають вичерпне уявлення про <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            те, хто чим займається і що потрібно виконати.<br/>
        </li>
        <div className="Columns">
            <h4>Дошки</h4>
            <p>Завдяки дошкам<span>MEVIO</span>завдання упорядковуються, а робота рухається.
                Достатньо одного погляду, щоб побачити всі завдання, від запланованих до виконаних.
            </p>
        </div>
        <div className="Columns">
            <h4>Колонки</h4>
            <p>
                Різні етапи виконання завдання. Почніть із простих етапів (&lt;&lt; Треба)
                 зробити&gt;&gt;, &lt;&lt;В роботі&gt;&gt;, &lt;&lt;Зроблено&gt;&gt;) або
                створіть власний робочий процес, який точно відповідає вашим потребам
                команди. В <span>MEVIO</span> немає неправильних підходів.
            </p>
        </div>
        <div className="Columns">
            <h4>Картки</h4>
            <p>
                Картки представляють завдання та ідеї та містять всю інформацію, необхідну для виконання роботи.
                У міру виконання завдань перетягуйте картки між колонками, щоб змінити статус
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
        <h2 className="h2-intelect">Захист Вашої Інтелектуальної Власності</h2>
        <div className="BoostSource1">
            <h1>Ваша <br/> безпека.<br/>Наша турбота.</h1>
        </div>
        <ul className="protectionList">
            <li>В MEVIO,ми серйозно ставимося до вашої конфіденційності та безпеки.</li>
            <li>MEVIO є сервісом, сертифікованим Trusted Cloud, та повністю відповідає EU-GDPR.</li>
            <li>Всі наші програми розміщуються на території Європейського Союзу в дата-центрах, сертифікованих
                за стандартом ISO 27001 у Франкфурті, Німеччина.</li>
            <li>Інші функції безпеки верхнього рівня включають стандартне 256-бітове шифрування SSL,
                двофакторну автентифікацію та детальні дозволи у додатках.</li>
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
        <h5>О нас<span><br/>Контракти</span></h5>
        <h5>Навігація<span> Безпека<br/>Дошки</span></h5>
        <h5>Зворотній зв'язок<span> +380 6789891239<hr/></span><br/>
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
