import { Box, Typography, Grid, Button } from "@mui/material";
import classes from "./VariantSection.module.css";
import MobileImage from "../../../../assets/image/Mobile.png";
import { StartPageContext } from "../../../../pages/StartPage";
import { useContext } from "react";
import Xray from "../../../../assets/image/Xray.png";
import Analysis from "../../../../assets/image/Analysis.png";
import contact from "../../../../assets/image/contact.png";
export default function VariantSection() {
  const isMobile = useContext(StartPageContext);
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.tittle}>
        <Typography variant="h3">أقسامنا المتنوعة</Typography>
      </Box>
      <Box className={classes.sections}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="subtitle2" fontSize={20}>تحليل صور أشعلة</Typography>
            <img src={Xray} alt="doctoerTool" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" fontSize={20}> تحاليل طبية </Typography>
            <img src={Analysis} alt="microscope" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" fontSize={20}>تواصل مع أطباء</Typography>
            <img src={contact} alt="doctoerTool" />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container p={10}>
          <Grid item xs={isMobile ? 12 : 8} className={classes.typoSection}>
            <Typography
              variant="subtitle1"
              fontSize={isMobile ? "20px" : "30px"}
              p={isMobile ? 0 : 3}
            >
              تجمع منصتنا بين مجتمع من الأطباء والمتخصصين الصحيين والمهتمين
              بالرعاية الصحية. يمكنك هنا الاستفادة من النقاشات العلمية المتقدمة،
              وطرح الأسئلة حول الأمور الطبية، ومشاركة الخبرات الشخصية.
            </Typography>
            {isMobile && <img src={MobileImage} alt="mobile" width="50%" />}
            <Button>اطرح سؤالاً الآن</Button>
          </Grid>
          <Grid item xs={isMobile ? 0 : 4} pt={4}>
            {!isMobile && (
              <img src={MobileImage} alt="mobile" className={classes.image} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
