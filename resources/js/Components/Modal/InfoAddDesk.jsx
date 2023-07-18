import {useEffect} from "react";
import {useActions} from "@/Hooks/useActions.js";


export const InfoAddDesk = () => {
    const { hideAddDeskModal } = useActions();

    function HideModal () {
        hideAddDeskModal();
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

    return(
        <div className="success-desk-modal"
            onClick={(e)=>{e.stopPropagation()}}>
            <h1 className="success-desk-title"></h1>
            <button onClick={()=>HideModal()}  className="ok-button">OK</button>
        </div>
    )
}
