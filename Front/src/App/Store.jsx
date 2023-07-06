import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../Features/detaisSlice"
import aboutReducer from "../Features/aboutSlice";
import skillsReducer from "../Features/skillsSlice";
import registerReducer from "../Features/registerSlice";


export default configureStore({
    reducer : {
        register : registerReducer,
        details : detailReducer,
        about : aboutReducer,
        skills : skillsReducer,
    }
})