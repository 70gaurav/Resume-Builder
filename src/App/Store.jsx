import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../slice/detaisSlice"


export default configureStore({
    reducer : {
        detail : detailReducer
    }
})