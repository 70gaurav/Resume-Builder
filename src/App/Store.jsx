import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../slice/Resumeslice"


export default configureStore({
    reducer : {
        detail : detailReducer
    }
})