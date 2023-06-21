import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name : "details",
    initialState: {
        image : "",
        name : "Name",
        role : "",
        totalExperience : ""

    },
    reducers : {
        imageHandler : (state , action) =>  {

           
            state.image = action.payload
        }

    }
})

export const {imageHandler} = detailSlice.actions
export default detailSlice.reducer