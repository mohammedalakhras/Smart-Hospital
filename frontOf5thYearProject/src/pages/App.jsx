import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppNavBar from "../components/AppNavBar/AppNavBar";
import SideBar from "../components/SideBar/SideBar";
import classes from "./App.module.css";
import { createContext, useState } from "react";
export const MainContext = createContext();
function App() {
  const IsMobile = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const [isSideBarOpen , setIsSideBarOpen] = useState(false)
  return (
    <>
      <MainContext.Provider value={{IsMobileValue :[IsMobile] ,isOpenValue:[ isSideBarOpen , setIsSideBarOpen]}}>
        <AppNavBar />
        <Box className={classes.container}>
          <SideBar />
          <div className={classes.main}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10%",
                margin: "10%",
                padding: "10%",
                backgroundColor: "#116a3b",
              }}
            >
              <button
                onClick={() => {
                  navigate("start");
                }}
              >
                Start Page
              </button>

              <button
                onClick={() => {
                  navigate("signup");
                }}
              >
                Signup Page
              </button>
            </div>
          </div>
        </Box>
      </MainContext.Provider>
    </>
  );
}

export default App;
