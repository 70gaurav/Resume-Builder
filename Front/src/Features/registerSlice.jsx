import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name : "register",

    initialState : {
        switch : ""
    } ,

    reducers : {
        switchHandler : (state , action ) => {
            state.switch = action.payload
        } 
    }
})

export const {switchHandler} = registerSlice.actions

export default registerSlice.reducer