import { createSlice } from "@reduxjs/toolkit";


export const downloadSlice = createSlice({
    name: "download" ,

    initialState : {
        isDownloading : false ,
        templateId: ""
    },

    reducers: {
        startDownload : (state) => {
            state.isDownloading = true
        },

        finishDownload:(state) => {
            state.isDownloading = false
        }
    }
})

export const {startDownload , finishDownload} = downloadSlice.actions
export default downloadSlice.reducer