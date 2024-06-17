import { configureStore } from "@reduxjs/toolkit";
import SelectedDoctorReducer from "./SelectedDoctorReducer";
const store = configureStore({ reducer: {selectedDoctor : SelectedDoctorReducer} });

export default store;
