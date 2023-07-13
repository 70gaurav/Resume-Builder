import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../Features/detailsSlice"
import aboutReducer from "../Features/aboutSlice";
import skillsReducer from "../Features/skillsSlice";
import registerReducer from "../Features/registerSlice";
import experienceReducer from "../Features/experienceSlice"
import educationReducer from "../Features/educationSlice"
import certificationReducer from "../Features/certificationSlice";
import downloadReducer from "../Features/downloadSlice";
import fontReducer from "../Features/fontSlice";
import signupReducer from "../Features/signupSlice";


export default configureStore({
    reducer : {
        register : registerReducer,
        signup : signupReducer,
        details : detailReducer,
        about : aboutReducer,
        skills : skillsReducer,
        experience : experienceReducer,
        education : educationReducer,
        certification: certificationReducer,
        download: downloadReducer,
        font : fontReducer
    }
})