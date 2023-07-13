import { createSlice } from "@reduxjs/toolkit";


export const fontSlice = createSlice({
    name: "font",

    initialState : {
        font : "Roboto Slab"
    } ,

    reducers : {

        fontHandler : (state , action) => {
            state.font = action.payload
        }
    }

})

export const {fontHandler} = fontSlice.actions

export default fontSlice.reducer