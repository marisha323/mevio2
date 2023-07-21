import {createSlice} from "@reduxjs/toolkit";


const FavoriteArchiveSlice = createSlice({
    name: 'favoriteArchiveSlice',
    initialState: {
        isArchiveToggle: true,
        isFavoriteToggle: true
    },
    reducers: {
        toggleArchiveTrue: (state)=>{
            state.isArchiveToggle = true
        },
        toggleArchiveFalse: (state)=>{
            state.isArchiveToggle = false
        },
        toggleFavoriteTrue: (state)=>{
            state.isFavoriteToggle = true
        },
        toggleFavoriteFalse: (state)=>{
            state.isFavoriteToggle = false
        }
    }
})

export const {actions, reducer} = FavoriteArchiveSlice;
