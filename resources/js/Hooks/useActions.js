import {actions} from "../Store/desk_themes/desk_themes.slice";
import {actions as addDeskModalActions} from "../Store/modal/add_desk_modal.slice.js";
import {actions as favoriteArchiveActions} from "../Store/favorite_archive/favorite_archive.slice.js";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...actions,
    ...addDeskModalActions,
    ...favoriteArchiveActions
}

export const useActions = () => {
    const dispatch = useDispatch ()

    return useMemo(()=>
            bindActionCreators(rootActions, dispatch)
        ,[dispatch])
}
