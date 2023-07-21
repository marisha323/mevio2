import { createSlice} from "@reduxjs/toolkit";


const addDeskModalSlice
    = createSlice({
    name: 'addDeskModalVisibility',
    initialState: {
        isVisible: false,
        isSuccess: false
    },
    reducers: {
        hideAddDeskModal: (state) => {
            state.isVisible = false;
        },
        showAddDeskModal: (state) => {
            state.isVisible = true;
        },
        setToSuccess: (state)=> {
            state.isSuccess = true;
        },
        setToFail: (state)=>{
            state.isSuccess = false;
        }
    }
})


export const {actions, reducer} = addDeskModalSlice;
