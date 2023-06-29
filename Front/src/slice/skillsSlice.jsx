import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
    name: "skills" , 

    initialState : {
        skills : [""]
    },

    reducers : {
        skillsHandler: (state, action) => {
            state.skills[action.payload.index] = action.payload.value;
          },
          addSkillsInput: (state) => {
            state.skills.push("");
          },
          removeSkillsInput: (state, action) => {
            state.skills.splice(action.payload, 1); 
          },
    }
})

export const {skillsHandler , addSkillsInput , removeSkillsInput} = skillsSlice.actions

export default skillsSlice.reducer
