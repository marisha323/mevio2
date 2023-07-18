import "../../../../css/modal/success_desk_modal.css";
import "../../../../css/modal/add_desk_modal.css";

import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {useEffect, useState} from "react";
import {useActions} from "@/Hooks/useActions.js";
import {InfoAddDesk} from "@/Components/Modal/InfoAddDesk.jsx";


export const ModalWindow = () => {
    const [addDeskInfoMessage, setAddDeskInfoMessage] = useState({
        message: ""
    });
    const [isDeskMayCreated, setIsDeskMayCreated] = useState(false);
    const {hideAddDeskModal} = useActions();
    const [themeId, setThemeId] = useState(1);
    const [postDesk, setPostDesk] = useState({
        deskName: '',
        isPublic: 1,
        themeId: themeId,
    })

    function HandleSlectChange(e) {
        setPostDesk({
            ...postDesk,
            isPublic: e.target.value,
            themeId: themeId
        })
    }

    function HandlePostTitleChange(e) {
        const input = e.target;
        input.style.border = "5px solid white";
        console.log(input);

        setPostDesk({
            ...postDesk,
            deskName: e.target.value,
            themeId: themeId
        })

    }

    function HandleSubmit(e) {
        e.preventDefault()

        if (postDesk.deskName === ""){
            const input = document.querySelector(".desk-title-input");
            input.style.border = "5px solid red";
            return;
        }

        axios.post('/create-desk', postDesk)
            .then((resp) => HandleSuccess(resp.data))
            .catch(HandleError);

    }


    function HandleError() {
        const formWindow = document.querySelector(".modal-window");
        formWindow.classList.add("modal-not-visible");

        const title = document.querySelector(".success-desk-title");
        if (title) {
            title.innerText = postDesk.deskName + "успішно створена";
        }

        ShowInfoHandle();
    }

    function HandleSuccess(data) {
        const formWindow = document.querySelector(".modal-window");
        formWindow.classList.add("modal-not-visible");

        const title = document.querySelector(".success-desk-title");
        if (title) {
            title.innerText = postDesk.deskName + "  успішно створена";
        }

        ShowInfoHandle();
    }


    function ShowInfoHandle() {
        setPostDesk({
            deskName: "",
            themeId: 1,
            isPublic: 1
        })

        const successWindow = document.querySelector(".success-desk-modal");
        if (successWindow) {
            successWindow.classList.add("modal-is-visible");
        }
    }

    useEffect(() => {
        setPostDesk({
            ...postDesk,
            themeId: themeId
        })
    }, [themeId])


    return (
        <div>
            <InfoAddDesk/>

            <form onSubmit={HandleSubmit} method="post">
                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                     className={`modal-window `}>
                    <h1 className="modal-window__desk-title">Створити дошку</h1>
                    <div className="mini-background-box">
                        <img className="mini-background-img"
                             src={`/images/themes/${themeId}/mini-background.svg`} alt=""/>
                    </div>
                    <div className="modal-window-div">
                        <div className="modal-window__subcategory-title">Фон</div>
                        <div className="theme-images">
                            <img onClick={() => {
                                setThemeId(1)
                            }} className="theme-images-mini" src="/images/themes/1/1.png" alt=""/>
                            <img onClick={() => {
                                setThemeId(2)
                            }} className="theme-images-mini" src="/images/themes/2/2.png" alt=""/>
                            <img onClick={() => {
                                setThemeId(3)
                            }} className="theme-images-mini" src="/images/themes/3/3.png" alt=""/>
                            <img onClick={() => {
                                setThemeId(4)
                            }} className="theme-images-mini" src="/images/themes/4/4.png" alt=""/>
                            <img onClick={() => {
                                setThemeId(5)
                            }} className="theme-images-mini" src="/images/themes/5/5.png" alt=""/>
                        </div>
                    </div>
                    <div className="modal-window-div">
                        <div className="modal-window__subcategory-title">Назва дошки</div>
                        <input value={postDesk.deskName} onChange={HandlePostTitleChange} className="desk-title-input" type="text"/>
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
                        <button type={"button"} onClick={() => {
                            hideAddDeskModal()
                        }} className="modal-window-form-button">Відміна
                        </button>
                        <button onClick={HandleSubmit} className="modal-window-form-button">Створити</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
