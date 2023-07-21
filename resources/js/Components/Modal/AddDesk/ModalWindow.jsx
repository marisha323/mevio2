import "../../../../css/modal/info_desk_modal.css";
import "../../../../css/modal/add_desk_modal.css";

import {useEffect, useState} from "react";
import {useActions} from "@/Hooks/useActions.js";
import {InfoAddDesk} from "@/Components/Modal/AddDesk/InfoAddDesk.jsx";


export const ModalWindow = () => {
    const { hideAddDeskModal, setToSuccess, setToFail } = useActions();
    const [themeId, setThemeId] = useState(1);
    const [postDesk, setPostDesk] = useState({
        deskName: '',
        isPublic: 1,
        themeId: themeId,
    })

    useEffect(()=>setToFail,[]);

    useEffect(()=>{
        setPostDesk({
            ...postDesk,
            themeId: themeId
        })
    },[themeId])


    function HandleSelectChange (e) {
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
            .then((resp)=>{
                console.log(resp);
                HandleSuccess();
                HandleResponse();
            })
            .catch((error)=>{
                console.log(error);
                HandleError();
                HandleResponse();
            });
    }

    function HandleCancel (e) {
        e.preventDefault();
        hideAddDeskModal();
        const formWindow = document.querySelector(".modal-window");
        // formWindow.classList.add("modal-not-visible");

        const successWindow = document.querySelector(".success-desk-modal");
        // successWindow.classList.add("modal-is-visible");
    }


    function HandleResponse () {
        const formWindow = document.querySelector(".modal-window");
        formWindow.classList.add("modal-not-visible");

        const infoWindow = document.querySelector(".info-desk-modal");
        infoWindow.classList.add("modal-is-visible");
    }

    function HandleSuccess () {
        setToSuccess();
        const title = document.querySelector(".info-desk-title");
        title.innerText = postDesk.deskName.toUpperCase() + " успішно створена";

        const container = document.querySelector(".modal-container");
        container.href = "/desk-panel";

        const okButton = document.querySelector(".ok-button");
        okButton.addEventListener("click",(e)=>{

            const infoWindow = document.querySelector(".info-desk-modal");
            infoWindow.classList.remove("modal-is-visible");
            setTimeout(()=>{
                const formWindow = document.querySelector(".modal-window");
                formWindow.classList.remove("modal-not-visible");
            },300);
            hideAddDeskModal();

        })

    }

    function HandleError () {
        const title = document.querySelector(".info-desk-title");
        title.innerText = "Помилка при створенні дошки";

        const okButton = document.querySelector(".ok-button");
        okButton.addEventListener("click",(e)=>{
            e.preventDefault();
            hideAddDeskModal();
            const infoWindow = document.querySelector(".info-desk-modal");
            infoWindow.classList.remove("modal-is-visible");

            setTimeout(()=>{
                const formWindow = document.querySelector(".modal-window");
                formWindow.classList.remove("modal-not-visible");
            },300);
        })
    }


    return (
        <div>
            <InfoAddDesk  />
        <form onSubmit={HandleSubmit} method="post" onClick={(e)=>e.preventDefault()}>
        <div onClick={(e) => {
            e.preventDefault();
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
                <select onChange={HandleSelectChange} className="desk-privacy-select">
                    <option selected value="1">Публічна</option>
                    <option value="0">Приватна</option>
                </select>
            </div>
            <div className="modal-window-div buttons">
                <button type="button" onClick={HandleCancel} className="modal-window-form-button">Відміна</button>
                <button onClick={HandleSubmit} className="modal-window-form-button">Створити</button>
            </div>
        </div>
        </form>
        </div>
    )
}
