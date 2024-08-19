import { Box, Typography, Avatar} from "@mui/material";
import classes from "./SideBarContent.module.css";
import { MainContext } from "../../../../pages/Doctor Screens/DoctorLayout";
import { useContext } from "react";
import { Link } from "react-router-dom";

//import default image
import prof from "../../../../assets/image/Profile/patient.png";

export default function SideBarContent() {
  const { IsMobileValue } = useContext(MainContext);
  const [isMobile] = IsMobileValue;

  return (
    <Box className={classes.container}>
      {isMobile && (
        <span>
          <Typography variant="string">
            <Avatar src={prof} />
          </Typography>
        </span>
      )}
      <Box>
        <Typography variant="h6" component={Link} to='/doctor' sx={{textDecoration:'none'}}>الرئيسية</Typography>
      </Box>
      <Box>
        <Typography variant="h6">خدمات الذكاء الصنعي</Typography>
        <hr />
        <Typography variant="string" component={Link} to='/doctor/AI_Analysis'>تحليل شبكية العين </Typography>
        <Typography variant="string" component={Link} to='/doctor/chatbot' sx={{mt:'10px' , display:'block'}}> chat doctor </Typography>
        <Typography variant="string" component={Link} to='/doctor/ChestXray' sx={{mt:'10px' , display:'block'}}> تحليل أشعة للصدر </Typography>
        <Typography variant="string" component={Link} to='/doctor/BrainTumor' sx={{mt:'10px' , display:'block'}}> تحليل أشعة للدماغ </Typography>
      </Box>
      <Box>
        <Typography variant="h6">الحجوزات</Typography>
        <hr />
        <Typography variant="string" component={Link} to='/doctor/appointment' sx={{my:'10px' , display:'block'}}>الإطلاع على المواعيد </Typography>
        {/* <Typography component={Link} to='/find_doctor' sx={{textDecoration:'none' , color:'initial'}} variant="string">حجز مخبر</Typography><br />
        <Typography component={Link} to='/find_doctor' sx={{textDecoration:'none' , color:'initial'}} variant="string">حجز طبيب</Typography> */}
      </Box>
      <Box>
        <Typography variant="h6">البحث عن طبيب</Typography>
      </Box>
    </Box>
  );
}
