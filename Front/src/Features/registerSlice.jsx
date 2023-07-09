import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name : "register",

    initialState : {
        visibility : false , 
        toggle : ""
        
    } ,

    reducers : {
        toggleHandler : (state , action ) => {
            state.toggle = action.payload
        } ,

        visibilityHandler : (state , action) => {
            state.visibility = action.payload
        }
    }
})

export const {toggleHandler , visibilityHandler} = registerSlice.actions

export default registerSlice.reducer