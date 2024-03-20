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
import { useContext } from "react";
export default function AppNavBar() {
  const {IsMobileValue  , isOpenValue} = useContext(MainContext)
  const [  , setIsSideBarOpen] = isOpenValue
  const [isMobile] = IsMobileValue
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
              <Avatar src={avaterImage} />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
