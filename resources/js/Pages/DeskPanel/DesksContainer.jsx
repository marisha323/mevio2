
export const DesksContainer = ({desksItems}) => {
    return(
        <div className="middle_desks_container">
            <div className="middle_top_body">
                <button className="create_btn">Створити</button>
                <h1>Дошки</h1>
            </div>
            <div className="middle_middle_body">
                <select className="combobox">
                    <option value="" disabled selected hidden>Фільтр</option>
                </select>
                <div className="search_sorting">
                    <div className="search_desk">
                        <p>Пошук:</p>
                        <input className="searcher1" type="text" placeholder="Пошук дощок..." />
                    </div>
                    <div className="search_desk">
                        <p>Сортування:</p>
                        <select className="combobox">
                            <option value="" disabled selected hidden>Активність</option>
                        </select>
                    </div>
                </div>
                <h1 className="desks_amount">Усього дощок : {desksItems.length}</h1>
                <div className="boards">
                    {desksItems}
                </div>
            </div>
        </div>
    )
}
