import { createSlice } from "@reduxjs/toolkit";


export const experinceSlice = createSlice({
    name : "experience",

    initialState : {
       fields : [{ role: '', company: '' }],

    },

    reducers : {
        fieldHandler: (state, action) => {
            state.fields = [...state.fields, { role: '', company: '' }];
          },
          addFieldInput: (state) => {
            state.roles.push("");
          },
          removeFieldInput: (state, action) => {
            state.roles.splice(action.payload, 1); 
          },
    }


})

export const {fieldHandler , addFieldInput , removeFieldInput} = experinceSlice.actions

export default experinceSlice.reducer