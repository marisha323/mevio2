import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";


export const ModalWindow = () => {
    const { isVisible } = useAddDeskModalVisibility();
    return(
        <div onClick={(e)=>{e.stopPropagation()}}
             className={`modal-window`}>
            <div>
                <h1 className="modal-window__desk-title">Створити дошку</h1>
                <div>
                    <img src="" alt=""/>
                </div>
            </div>
            <div>
                <div className="modal-window__subcategory-title">Фон</div>
                <div className="theme-images">
                    <img className="theme-images-mini" src="/images/themes/1/1.png" alt=""/>
                    <img className="theme-images-mini" src="/images/themes/2/2.png" alt=""/>
                    <img className="theme-images-mini" src="/images/themes/3/3.png" alt=""/>
                    <img className="theme-images-mini" src="/images/themes/4/4.png" alt=""/>
                    <img className="theme-images-mini" src="/images/themes/5/5.png" alt=""/>
                </div>
            </div>
            <div>
                <div className="modal-window__subcategory-title">Назва дошки</div>
                <input type="text"/>
            </div>
            <div>
                <div className="modal-window__subcategory-title">
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
