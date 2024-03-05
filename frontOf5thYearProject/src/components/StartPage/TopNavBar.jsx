import { Box, AppBar, Toolbar, Button } from "@mui/material";
import classes from "./TopNavBar.module.css";
export default function TopNavBar() {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            background:'var(--primary)',
          }}
        >
          <Toolbar className={classes.Toolbar}>
            <Box className={classes.groupButton}>
              <Button>تسجيل الدخول</Button>
              <Button>من نحن</Button>
              <Button>كيف يعمل</Button>
              <Button>أبدا</Button>
            </Box>

            <img src="./Group 27.png" alt="" className={classes.logo}/>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
}
