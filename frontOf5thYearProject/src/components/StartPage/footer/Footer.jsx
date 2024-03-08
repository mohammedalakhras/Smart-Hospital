import { Box, Grid, Typography } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import Logo from "../../../assets/image/logo.png";
import classes from "./Footer.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useContext } from "react";
import { StartPageContext } from "../../../pages/StartPage";
export default function Footer() {
  const IsMobile = useContext(StartPageContext);
  return (
    <Box bgcolor="#D6D6D6" p={IsMobile ? 3 : 10}>
      <Box>
        <Grid container className={classes.container}>
          <Grid item xs={IsMobile ? 12 : 6}>
            <Grid container>
              <Grid item xs={4}>
                <img src={Logo} alt="logo" width="50%" />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="var(--secondary)">
                  تواصل معنا
                </Typography>
                <TelegramIcon color="primary" />
                <TwitterIcon color="primary" />
                <FacebookSharpIcon color="primary" />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">شروط الاستخدام</Typography>
                <Typography variant="subtitle2">سياسة الخصوصية</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mt={IsMobile ? 5 : 0} xs={IsMobile ? 12 : 6}>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="subtitle2">النصائح الطبية</Typography>
                <Typography variant="subtitle2">العلاجات الطبية</Typography>
                <Typography variant="subtitle2">الأخبار الطبية</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="var(--secondary)" textAlign='left'>
                  الروابط السريعة
                </Typography>
                <Box className={classes.borderBoxForArrow} width={IsMobile ? 80 : 'initial'}>
                  <Box>
                    <Typography variant="string">الرئيسية</Typography>
                    <ArrowRightAltIcon />
                  </Box>
                  <Box>
                    <Typography variant="string">من نحن</Typography>
                    <ArrowRightAltIcon />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="var(--secondary)" textAlign='left'>
                  معلومات الاتصال
                </Typography>
                <Box className={classes.borderBoxForArrow} width={IsMobile ? 130 : 'initial'}>
                  <Box  >
                    <Typography variant="string">
                     host@gmail.com
                    </Typography>
                    <ArrowRightAltIcon />
                  </Box>
                  <Box>
                    <Typography variant="string">0999999999 </Typography>
                    <ArrowRightAltIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={10}>
        <hr  />
        <Typography variant="subtitle1" pr={5} pt={3} >
        جميع الحقوق محفوظة بواسطة web developers©2024
        </Typography>
      </Box>
    </Box>
  );
}
