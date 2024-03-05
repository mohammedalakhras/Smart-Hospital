import { Box, Typography, Grid, Button } from "@mui/material";
import classes from './WellcomSection.module.css'
import {useContext} from 'react'
import { StartPageContext } from "../../../../pages/StartPage"; 
export default function WellcomSection() {
  const IsMobile = useContext(StartPageContext)
  return (
    <Box>
      <Grid container p={10}>
        <Grid item xs={IsMobile ? 12 : 8}>
          <Box pt={5} textAlign="center">
            <Typography variant="h3">
              مرحبا بك في منتدانا
              <div>الطبي المميز</div>
            </Typography>
            <Typography variant="subtitle1">
              نحن هنا لتقديم بيئة داعمة ومعلومات ذات مصداقية في عالم الصحة والطب
              . انضم إلينا في هذا المكان الذي يجمع المعرفة والتفاعل لتشارك في
              المحادثات و تستفيد من تبادل الخبرات
            </Typography>
            <Box className={classes.groupButton}>
              <Button>تسجيل دخول</Button>
              <Button>إنشاء حساب</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
