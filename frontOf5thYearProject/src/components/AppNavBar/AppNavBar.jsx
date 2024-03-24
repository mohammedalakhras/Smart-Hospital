//mui components
import { Box, AppBar, Toolbar, Avatar, Stack, Button } from "@mui/material";

//style css file
import classes from "./AppNavBar.module.css";

//icon
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

//image
import logo from "../../assets/image/logo.png";
import avaterImage from "../../assets/image/aghiad.jpg";

//context
import { MainContext } from "../../pages/App";
import { useContext, useEffect, useState } from "react";
import getData from "../../functions/getData";

//standaer profile image 
import prof from "../../assets/image/Profile/patient.png";

export default function AppNavBar() {
  const {IsMobileValue  , isOpenValue} = useContext(MainContext)
  const [  , setIsSideBarOpen] = isOpenValue
  const [isMobile] = IsMobileValue
  const [avtr, setAvtr] = useState(null);

  useEffect(()=>{
    getData(window.localStorage.getItem("token"))
      .then((r) => {
        setAvtr(
          r.data.pation.profile == null ? (
            <Avatar src={prof} />
          ) : (
            <Avatar src={r.data.pation.profile} />
          )
        );
      })
      .catch((er) => {
        setAvtr(<Avatar src={prof} />);
      });
  },[])
  return (
    <>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          {isMobile && (
            <Button p={0} className={classes.menuButton} onClick={()=>{setIsSideBarOpen(true)}}>
              <MenuIcon />
            </Button>
          )}
          <Box className={classes.logo}>
            <img src={logo} alt="logo" />
          </Box>
          <Box>
            <input placeholder="أبحث هنا..... " />
          </Box>
          <Box>
            <Stack direction="row" className={classes.AvaterContainer}>
              <Box>
                <span>3</span>
                <NotificationsIcon />
              </Box>
              {/* <Avatar src={avaterImage} /> */}
              {avtr}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
