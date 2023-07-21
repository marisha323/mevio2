import {useEffect} from "react";
import {useActions} from "@/Hooks/useActions.js";
import {Link} from "@inertiajs/react";


export const InfoAddDesk = () => {
    const { hideAddDeskModal } = useActions();

    function HideModal () {
        hideAddDeskModal();
        setTimeout(()=>{
            const formWindow = document.querySelector(".modal-window");
            formWindow.classList.remove("modal-not-visible");

            const successWindow = document.querySelector(".info-desk-modal");
            if (successWindow){
                successWindow.classList.remove("modal-is-visible");
            }
        },300)
    }

    return(
        <div className="info-desk-modal"
            onClick={(e)=>{e.stopPropagation()}}>
            <h1 className="info-desk-title"></h1>
            <Link href={'/desk-panel'} className="ok-button">OK</Link>
        </div>
    )
}
