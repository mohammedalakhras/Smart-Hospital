import { Box, useMediaQuery } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import AppNavBar from "../../components/DoctorComponents/AppNavBar/AppNavBar";
import SideBar from "../../components/DoctorComponents/SideBar/SideBar";
import classes from "./DoctorLayout.module.css";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import DoctorWrapper from "./DoctorWrapperAuth";
export const MainContext = createContext();
function DoctorLayout() {
  const IsMobile = useMediaQuery("(max-width:800px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
    <DoctorWrapper>

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
    </DoctorWrapper>
    </>
  );
}

export default DoctorLayout;
