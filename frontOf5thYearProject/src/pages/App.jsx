import { Box, useMediaQuery } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import AppNavBar from "../components/AppNavBar/AppNavBar";
import SideBar from "../components/SideBar/SideBar";
import classes from "./App.module.css";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import PatientWrapperAuth from "./Patient Screens/patientWrapperAuth";
export const MainContext = createContext();
function App() {
  const IsMobile = useMediaQuery("(max-width:800px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
    <PatientWrapperAuth>
      <MainContext.Provider
        value={{
          IsMobileValue: [IsMobile],
          isOpenValue: [isSideBarOpen, setIsSideBarOpen],
        }}
      >
        <AppNavBar />
        <Box className={classes.container}>
          <SideBar />
          <div className={classes.main}>
            <Outlet />
          </div>
        </Box>
      </MainContext.Provider>
    </PatientWrapperAuth>
    </>
  );
}

export default App;


