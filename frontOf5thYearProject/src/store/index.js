import { configureStore } from "@reduxjs/toolkit";
import SelectedDoctorReducer from "./SelectedDoctorReducer";
import informationOfUserReducer from "./informationOfUserReducer";
const store = configureStore({ reducer: {selectedDoctor : SelectedDoctorReducer
    , informaionOfUser : informationOfUserReducer
} });

export default store;
