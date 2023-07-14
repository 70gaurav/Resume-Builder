import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: "login" , 

    initialState : {
        email : "" ,
        password : ""
    },

    reducers : {
        emailHandler : (state , action) => {
            state.email = action.payload
        },

        passwordHandler : (state , action) => {
            state.password = action.payload
        }

    }

})

export const {emailHandler , passwordHandler } = loginSlice.actions

export default loginSlice.reducer