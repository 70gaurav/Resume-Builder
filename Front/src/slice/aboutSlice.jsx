import { createSlice } from "@reduxjs/toolkit";


export const aboutSlice = createSlice({
    name:"about",

    initialState: {
        about: ""
    },
    
    reducers : {
        aboutHandler : (state, action) => {
            state.about = action.payload
        }

    }
})

export const {aboutHandler} = aboutSlice.actions


export default aboutSlice.reducer