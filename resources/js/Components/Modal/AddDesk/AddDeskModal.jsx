import "../../../../css/modal/add_desk_modal.css";
import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {useEffect, useState} from "react";
import {useActions} from "@/Hooks/useActions.js";
import {ModalWindow} from "@/Components/Modal/AddDesk/ModalWindow.jsx";

export const AddDeskModal = () => {
    const { isVisible } = useAddDeskModalVisibility();
    const { hideAddDeskModal } = useActions();

    function HideModalHandle () {
        hideAddDeskModal();
        setTimeout(()=>{
            const formWindow = document.querySelector(".modal-window");
            formWindow.classList.remove("modal-not-visible");

            const successWindow = document.querySelector(".success-desk-modal");
            if (successWindow){
                successWindow.classList.remove("modal-is-visible");
            }
        },300)
    }

    return (
        <div className={`modal-container ${isVisible ? 'modal-is-visible' : 'modal-not-visible'}`}
         onClick={HideModalHandle}>
            <ModalWindow />
        </div>
    )

}
