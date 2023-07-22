import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/Store/desk_themes/desk_themes.slice.js";
import {reducer as addDeskModalVisibility} from "@/Store/modal/add_desk_modal.slice.js";
import {reducer as favoriteArchiveSlice} from "@/Store/favorite_archive/favorite_archive.slice.js";
import {reducer as userDesksSlice} from "@/Store/user_desks/user_desks.slice.js";
const reducers
    = combineReducers({
    defaultTheme: reducer,
    addDeskModalVisibility: addDeskModalVisibility,
    favoriteArchiveSlice: favoriteArchiveSlice,
    userDesksSlice: userDesksSlice
})

export const store
    = configureStore({
    reducer: reducers
})
