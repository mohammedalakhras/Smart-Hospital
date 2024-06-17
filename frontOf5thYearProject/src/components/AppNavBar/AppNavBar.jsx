//mui components
import { Box, AppBar, Toolbar, Avatar, Stack, Button } from "@mui/material";

//import router components
import { Link } from "react-router-dom";
//style css file
import classes from "./AppNavBar.module.css";

//icon
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

//image
import logo from "../../assets/image/logo.png";


//context
import { MainContext } from "../../pages/App";
import { useContext} from "react";


//standaer profile image
import prof from "../../assets/image/Profile/patient.png";

export default function AppNavBar() {
  const { IsMobileValue, isOpenValue } = useContext(MainContext);
  const [, setIsSideBarOpen] = isOpenValue;
  const [isMobile] = IsMobileValue;

  return (
    <>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          {isMobile && (
            <Button
              p={0}
              className={classes.menuButton}
              onClick={() => {
                setIsSideBarOpen(true);
              }}
            >
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
              <Avatar src={prof} component={Link} to='/profile' sx={{textDecoration:'none'}}/>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
