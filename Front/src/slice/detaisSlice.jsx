import { createSlice } from "@reduxjs/toolkit";
import dummy from "./images/dummy.png"

export const detailSlice = createSlice({
    name : "details",

    initialState: {
        image : dummy,
        name : "Name",
        role : "Role",
        totalExperience : ""

    },
    reducers : {
        imageHandler : (state , action) =>  {

           console.log(action.payload)
            state.image = action.payload

        },
        nameHandler: (state , action) => {
            state.name = action.payload
        },
        roleHandler: (state , action) => {
            state.role = action.payload
        },
        experienceHandler: (state , action) => {
            state.totalExperience = action.payload
        }

    }
})

export const {imageHandler , nameHandler , roleHandler , experienceHandler} = detailSlice.actions
export default detailSlice.reducer