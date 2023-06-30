import DashBoardLayout from "@/Layouts/DashBoardLayout.jsx";


export default function DeskPanel () {

    return(
        <DashBoardLayout>
            <div className="middle_desks_container">
                <div className="middle_top_body">
                    <h1>Доски</h1>
                </div>
                <div className="middle_middle_body">
                    <select className="combobox">
                        <option value="" disabled selected hidden>Фильтр</option>
                    </select>
                    <div className="search_sorting">
                        <div className="search_desk">
                            <p>Поиск:</p>
                            <input className="searcher1" type="text" placeholder="Поиск досок..." />
                        </div>
                        <div className="search_desk">
                            <p>Сортировка:</p>
                            <select className="combobox">
                                <option value="" disabled selected hidden>Активность</option>
                            </select>
                        </div>
                    </div>
                    <h1 className="desks_amount">Всего досок : 10</h1>
                    <div className="boards">
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/readLeavesBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/readLeavesBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/cloadyWeatherBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/cloadyWeatherBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/pinkCloadsBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/pinkCloadsBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/purpleCloadsBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/purpleCloadsBackground.png" alt="" />
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/OpacityBackground.png" alt="" />
                                <p><img src="images/locked-padlock (2) 2.png" alt="" /></p>
                        </div>
                        <div className="group_container">
                            <p>Курсовой проект</p>
                            <img src="images/OpacityBackground.png" alt="" />
                                <p><img src="images/locked-padlock (2) 2.png" alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    )
}
