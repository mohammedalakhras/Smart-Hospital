import { Grid, Typography, Box, Button } from "@mui/material";
import doctoerImage from "../../../../assets/image/doctoer.png";
import classes from "./adviceSection.module.css";
export default function Advice({ IsMobile }) {
  return (
    <Grid
      container
      className={`${classes.containerOfAdviceSubSection} ${classes.containerTypoSection}`}
    >
      <Grid item xs={IsMobile ? 12 : 6}>
        <Typography variant="subtitle1">
          1- ابدأ بنظام غذائي متوازن يحتوي على العناصر الغذائية الضرورية لصحتك.
        </Typography>
        <hr />
        <Typography variant="subtitle1">
          2- حافظ على نشاطك البدني لتعزيز لياقتك العامة والوقاية من الأمراض.
        </Typography>
        <hr />
        <Typography variant="subtitle1">
          3- أشرب كمية كافية من الماء حيث يساعد في الحفاظ على ترطيب الجسم ودعم
          وظائف الأعضاء.
        </Typography>
        {IsMobile && (
          <Box mb={5}>
            <img src={doctoerImage} alt="doctoer" width="90%" />
          </Box>
        )}
        <Box>
          <Button>قراءة المزيد من النصائح الطبية</Button>
        </Box>
      </Grid>
      {!IsMobile && (
        <Grid item xs={6}>
          <img src={doctoerImage} alt="doctoer" width="90%" />
        </Grid>
      )}
    </Grid>
  );
}
