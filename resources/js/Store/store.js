import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as deskThemesReducer} from "./desk_themes/desk_themes.slice.js";

const reducers
    = combineReducers({
    deskThemes: deskThemesReducer
})

export const store
    = configureStore({
    reducer: reducers,
})
