import {actions} from "../Store/desk_themes/desk_themes.slice";
import {actions as addDeskModalActions} from "../Store/modal/add_desk_modal.slice.js";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...actions,
    ...addDeskModalActions
}

export const useActions = () => {
    const dispatch = useDispatch ()

    return useMemo(()=>
            bindActionCreators(rootActions, dispatch)
        ,[dispatch])
}
