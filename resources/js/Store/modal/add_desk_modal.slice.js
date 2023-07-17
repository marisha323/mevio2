import { createSlice} from "@reduxjs/toolkit";


const addDeskModalSlice
    = createSlice({
    name: 'addDeskModalVisibility',
    initialState: {
        isVisible: true
    },
    reducers: {
        hideAddDeskModal: (state) => {
            state.isVisible = false;
        },
        showAddDeskModal: (state) => {
            state.isVisible = true;
        }
    }
})


export const {actions, reducer} = addDeskModalSlice;