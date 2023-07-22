import {createSlice} from "@reduxjs/toolkit";


const UserDesksSlice = createSlice({
    name: 'userDesksSlice',
    initialState:{
        toUpdate: false
    },
    reducers:{
        toggleUpdateDesksTrue:(state)=>{
            state.toUpdate = true;
        },
        toggleUpdateDesksFalse:(state=>{
            state.toUpdate = false;
        })
    }
})

export const {actions, reducer} = UserDesksSlice;
