import {createSlice} from "@reduxjs/toolkit"

export const signupSlice = createSlice({
    name : "signup" , 

    initialState : {
        username : "" ,
        email : "" , 
        password : ""
    },

    reducers : {
        nameHandler : (state , action) => {
            state.name = action.payload
        },

        emailHandler : (state , action) => {
            state.email = action.payload
        },

        passwordHandler : (state , action) => {
            state.password = action.payload
        }


    }

})

export const {nameHandler , emailHandler , passwordHandler} = signupSlice.actions

export default signupSlice.reducer