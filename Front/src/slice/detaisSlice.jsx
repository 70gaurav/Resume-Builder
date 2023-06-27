import { createSlice } from "@reduxjs/toolkit";
import dummy from "./images/dummy.png";

export const detailSlice = createSlice({
  name: "details",
  initialState: {
    image: dummy,
    name: "Name",
    roles: ["Role"], // Array to store multiple roles
    totalExperience: ""
  },
  reducers: {
    imageHandler: (state, action) => {
      state.image = action.payload;
    },
    nameHandler: (state, action) => {
      state.name = action.payload;
    },
    roleHandler: (state, action) => {
      state.roles[action.payload.index] = action.payload.value;
    },
    addRoleInput: (state) => {
      state.roles.push(""); // Add an empty string for a new role input
    },
    experienceHandler: (state, action) => {
      state.totalExperience = action.payload;
    }
  }
});

export const {
  imageHandler,
  nameHandler,
  roleHandler,
  addRoleInput,
  experienceHandler
} = detailSlice.actions;

export default detailSlice.reducer;
