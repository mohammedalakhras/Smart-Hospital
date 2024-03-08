import { Box, Typography, Grid, Button } from "@mui/material";
import classes from "./WellcomSection.module.css";
import { useContext } from "react";
import { StartPageContext } from "../../../../pages/StartPage";
import screenImage from "../../../../assets/image/Group 244.png";
import { Link } from "react-router-dom";
export default function WellcomSection() {
  const IsMobile = useContext(StartPageContext);
  return (
    <Box className={classes.container}>
      <Box className={classes.trangleBackGround}>
        <Grid container p={10}>
          <Grid item xs={IsMobile ? 12 : 8}>
            <Box pt={10} textAlign="center">
              <Typography variant="h3">
                مرحبا بك في منتدانا
                <div>الطبي المميز</div>
              </Typography>
              {IsMobile && (
                <img
                  src={screenImage}
                  alt="screen around it medical stiker"
                  className={classes.ScreenImage}
                />
              )}
              <Typography
                variant="subtitle1"
                fontSize={20}
                color="#979191"
                p={3}
              >
                نحن هنا لتقديم بيئة داعمة ومعلومات ذات مصداقية في عالم الصحة
                والطب . انضم إلينا في هذا المكان الذي يجمع المعرفة والتفاعل
                لتشارك في المحادثات و تستفيد من تبادل الخبرات
              </Typography>
              <Box className={classes.groupButton}>
                <Link to='/signup'>
                  <Button>إنشاء حساب</Button>
                </Link>
                <Link to='/signin'>
                  <Button>تسجيل دخول</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          {!IsMobile && (
            <Grid item xs={IsMobile ? 0 : 4}>
              <img
                src={screenImage}
                alt="screen around it medical stiker"
                className={classes.ScreenImage}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
