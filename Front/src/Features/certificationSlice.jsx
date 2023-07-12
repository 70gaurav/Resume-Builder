import { createSlice } from "@reduxjs/toolkit";

export const certificationSlice = createSlice({
    name: "certification",

    initialState: {
        certificates: [""]
    },

    reducers: {
        addCertificationInput: (state) => {
            state.certificates.push("")
        },
        certificationInput: (state, action) => {
            const { index, value } = action.payload;
            state.certificates[index] = value;
        },
        removeCertificationInput: (state, action) => {
            state.certificates.splice(action.payload, 1);
        },

    }
})

export const {addCertificationInput , certificationInputHandler , removeCertificationInput} = certificationSlice.actions

export default certificationSlice.reducer