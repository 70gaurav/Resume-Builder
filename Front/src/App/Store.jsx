import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../slice/detaisSlice"
import aboutReducer from "../slice/aboutSlice";
import skillsReducer from "../slice/skillsSlice";


export default configureStore({
    reducer : {
        details : detailReducer,
        about : aboutReducer,
        skills : skillsReducer,
    }
})