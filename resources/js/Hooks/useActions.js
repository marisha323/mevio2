import {actions as deskThemesActions} from "../Store/desk_themes/desk_themes.slice.js";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...deskThemesActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(()=>
        bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}
