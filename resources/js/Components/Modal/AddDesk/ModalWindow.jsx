

export const ModalWindow = () => {
    return(
        <div onClick={(e)=>{e.stopPropagation()}} className="modal-window">
            <div>
                <h1>Створити дошку</h1>
                <div>
                    <img src="" alt=""/>
                </div>
            </div>
            <div>
                <div>Фон</div>
                <div>
                    <img src="/images/themes/1/1.png" alt=""/>
                    <img src="/images/themes/2/2.png" alt=""/>
                    <img src="/images/themes/3/3.png" alt=""/>
                    <img src="/images/themes/4/4.png" alt=""/>
                    <img src="/images/themes/5/5.png" alt=""/>
                </div>
            </div>
            <div>
                <div>Назва дошки</div>
                <input type="text"/>
            </div>
            <div>
                <div>
                    Видимість
                </div>
                <select>
                    <option selected value="public">Публічна</option>
                    <option value="private">Приватна</option>
                </select>
            </div>
            <div>
                <button>Відміна</button>
                <button>Створити</button>
            </div>
        </div>
    )
}
