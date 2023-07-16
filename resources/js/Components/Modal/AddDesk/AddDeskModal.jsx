import "../../../../css/modal/add_desk_modal.css";
import {useAddDeskModalVisibility} from "@/Hooks/useAddDeskModalVisibility.js";
import {useEffect, useState} from "react";

export const AddDeskModal = ({isVisible}) => {
    const [visible, setVisble] = useState(isVisible);
    const NotVisibleHandler = () => {
        setVisble(false);
        console.log(isVisible);
    }

    useEffect(()=>{setVisble(isVisible)},[isVisible])

    if (visible){
        return(
            <div className="modal-container"
            onClick={NotVisibleHandler}>

            </div>
        )
    }

}
