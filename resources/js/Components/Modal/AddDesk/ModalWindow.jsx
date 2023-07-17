import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {useEffect, useState} from "react";
import {useActions} from "@/Hooks/useActions.js";


export const ModalWindow = () => {
    const { hideAddDeskModal } = useActions();
    const [themeId, setThemeId] = useState(1);
    const [postDesk, setPostDesk] = useState({
        deskName: '',
        isPublic: 1,
        themeId: themeId,
    })

    function HandleSlectChange (e) {
        setPostDesk({
            ...postDesk,
            isPublic: e.target.value,
            themeId: themeId
        })
    }

    function HandlePostTitleChange (e) {
        setPostDesk({
            ...postDesk,
            deskName: e.target.value,
            themeId: themeId
        })
    }

    function HandleSubmit (e) {
        e.preventDefault()
        axios.post('/create-desk',postDesk)
            .then((resp)=>console.log(resp))
            .catch(()=>console.log("error"));
    }

    useEffect(()=>{
        setPostDesk({
            ...postDesk,
            themeId: themeId
        })
    },[themeId])



    return (
        <form onSubmit={HandleSubmit} method="post">
        <div onClick={(e) => {
            e.stopPropagation()
        }}
             className={`modal-window`}>
            <h1 className="modal-window__desk-title">Створити дошку</h1>
            <div className="mini-background-box">
                <img className="mini-background-img"
                     src={`/images/themes/${themeId}/mini-background.svg`} alt=""/>
            </div>
            <div className="modal-window-div">
                <div className="modal-window__subcategory-title">Фон</div>
                <div className="theme-images">
                    <img onClick={()=>{setThemeId(1)}} className="theme-images-mini" src="/images/themes/1/1.png" alt=""/>
                    <img onClick={()=>{setThemeId(2)}} className="theme-images-mini" src="/images/themes/2/2.png" alt=""/>
                    <img onClick={()=>{setThemeId(3)}} className="theme-images-mini" src="/images/themes/3/3.png" alt=""/>
                    <img onClick={()=>{setThemeId(4)}} className="theme-images-mini" src="/images/themes/4/4.png" alt=""/>
                    <img onClick={()=>{setThemeId(5)}} className="theme-images-mini" src="/images/themes/5/5.png" alt=""/>
                </div>
            </div>
            <div className="modal-window-div">
                <div className="modal-window__subcategory-title">Назва дошки</div>
                <input onChange={HandlePostTitleChange} className="desk-title-input" type="text"/>
            </div>
            <div className="modal-window-div">
                <div className="modal-window__subcategory-title">
                    Видимість
                </div>
                <select onChange={HandleSlectChange} className="desk-privacy-select">
                    <option selected value="1">Публічна</option>
                    <option value="0">Приватна</option>
                </select>
            </div>
            <div className="modal-window-div buttons">
                <button onClick={()=>hideAddDeskModal()} className="modal-window-form-button">Відміна</button>
                <button onClick={HandleSubmit} className="modal-window-form-button">Створити</button>
            </div>
        </div>
        </form>
    )
}
