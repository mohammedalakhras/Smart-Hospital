//mui components
import { Box, AppBar, Toolbar, Avatar, Stack, Button } from "@mui/material";

// import hook
import { useState } from "react";

//import router components
import { Link } from "react-router-dom";
//style css file
import classes from "./AppNavBar.module.css";

//icon
import MenuIcon from "@mui/icons-material/Menu";

//image
import logo from "../../assets/image/logo.png";


//context
import { MainContext } from "../../pages/App";
import { useContext, useEffect} from "react";

//import function data
import getData from "../../functions/getData";

//standaer profile image
import prof from "../../assets/image/Profile/patient.png";

//import for redux 
import { useDispatch } from "react-redux";
import { setInfo } from "../../store/informationOfUserReducer";

export default function AppNavBar() {
  const dispatch = useDispatch()
  const { IsMobileValue, isOpenValue } = useContext(MainContext);
  const [, setIsSideBarOpen] = isOpenValue;
  const [isMobile] = IsMobileValue;
  const [profile , setProfile ] = useState()
  useEffect(()=>{
    getData(window.localStorage.getItem("token")).then((res) => {
      console.log(res.data.pation.id)
      console.log(res.data)
      setProfile(res.data.pation.profile)
      dispatch(setInfo({id:res.data.pation.id  , name:res.data.pation.full_name , profile:res.data.pation.profile }))

    })
},[])
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
              
              {/* <Avatar src={avaterImage} /> */}
              <Avatar src={profile? profile :prof} component={Link} to='/profile' sx={{textDecoration:'none'}}/>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
