import { createSlice } from "@reduxjs/toolkit";

const SelectedDoctoerSlice = createSlice({
    name: "SelectedDoctoerSlice",
    initialState: {id:-1 , name:""  ,  info : ""  , profile : "" },
    reducers :{
        setDoctoer : (state , action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.info = action.payload.info;
            state.profile = action.payload.profile;
        }
    }
})

export const {setDoctoer } = SelectedDoctoerSlice.actions;
export default SelectedDoctoerSlice.reducer;
