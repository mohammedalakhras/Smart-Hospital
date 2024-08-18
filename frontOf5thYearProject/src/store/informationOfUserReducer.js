import { createSlice } from "@reduxjs/toolkit";

const informationOfUser = createSlice({
    name: "informationOfUser",
    initialState: {id:-1 , name:""  ,  info : ""  , profile : "" },
    reducers :{
        setInfo : (state , action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.profile = action.payload.profile;
        }
    }
})

export const {setInfo } = informationOfUser.actions;
export default informationOfUser.reducer;
