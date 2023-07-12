import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    fields: [{ level: "", organization: "" , yearOfPassing: ""  }],
  },
  reducers: {
    fieldHandler: (state, action) => {
      const { index, field, value } = action.payload;
      state.fields[index][field] = value;
    },
    addFieldInput: (state) => {
      state.fields.push({ level: "", organization: "" ,yearOfPassing: "" });
    },
    removeFieldInput: (state, action) => {
      state.fields.splice(action.payload, 1);
    },
  },
});

export const { fieldHandler, addFieldInput, removeFieldInput } = educationSlice.actions;

export default educationSlice.reducer;
