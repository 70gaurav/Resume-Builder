import { createSlice } from "@reduxjs/toolkit";

export const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    fields: [{ role: "", company: "" }],
  },
  reducers: {
    fieldHandler: (state, action) => {
      const { index, field, value } = action.payload;
      state.fields[index][field] = value;
    },
    addFieldInput: (state) => {
      state.fields.push({ role: "", company: "" });
    },
    removeFieldInput: (state, action) => {
      state.fields.splice(action.payload, 1);
    },
  },
});

export const { fieldHandler, addFieldInput, removeFieldInput } = experienceSlice.actions;

export default experienceSlice.reducer;
