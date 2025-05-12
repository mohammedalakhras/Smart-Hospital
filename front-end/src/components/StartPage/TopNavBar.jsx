import { Box, AppBar, Toolbar, Button } from "@mui/material";
import classes from "./TopNavBar.module.css";
import logo from "../../assets/image/logo.png";
import {Link} from 'react-router-dom'
export default function TopNavBar() {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            background: "var(--primary)",
          }}
        >
          <Toolbar className={classes.Toolbar}>
            <img src={logo} alt="" className={classes.logo} />
            <Box className={classes.groupButton}>
              <Link to='/signup'>
                <Button>أبدا</Button>
              </Link>
              <Button>كيف يعمل</Button>
              <Button>من نحن</Button>
              <Button>تسجيل الدخول</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Toolbar /> */}
    </>
  );
}
