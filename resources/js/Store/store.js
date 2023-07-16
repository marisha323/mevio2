import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/Store/desk_themes/desk_themes.slice.js";
import {reducer as addDeskModalVisibility} from "@/Store/modal/add_desk_modal.slice.js";
const reducers
    = combineReducers({
    defaultTheme: reducer,
    addDeskModalVisibility: addDeskModalVisibility
})

export const store
    = configureStore({
    reducer: reducers
})
