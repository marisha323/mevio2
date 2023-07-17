import "../../../../css/modal/add_desk_modal.css";
import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {useEffect, useState} from "react";
import {useActions} from "@/Hooks/useActions.js";
import {ModalWindow} from "@/Components/Modal/AddDesk/ModalWindow.jsx";

export const AddDeskModal = () => {
    const { isVisible } = useAddDeskModalVisibility();
    const { hideAddDeskModal } = useActions();

    return (
        <div className={`modal-container ${isVisible ? 'modal-is-visible' : ''}`}
         onClick={()=>{hideAddDeskModal()}}>
            <ModalWindow />
        </div>
    )

}
