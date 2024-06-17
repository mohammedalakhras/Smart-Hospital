import { Box, Typography, Avatar} from "@mui/material";
import classes from "./SideBarContent.module.css";
import { MainContext } from "../../../pages/App";
import { useContext } from "react";
import { Link } from "react-router-dom";

//import default image
import prof from "../../../assets/image/Profile/patient.png";

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
        <Typography variant="h6" component={Link} to='/' sx={{textDecoration:'none'}}>الرئيسية</Typography>
      </Box>
      <Box>
        <Typography variant="h6">توابعها</Typography>
        <hr />
        <Typography variant="string">الإطلاع على الأسئلة </Typography>
        <Typography variant="string">إضافة سؤال </Typography>
        <Typography variant="string">حذف سؤال</Typography>
      </Box>
      <Box>
        <Typography variant="h6">الحجوزات</Typography>
        <hr />
        <Typography variant="string">الإطلاع على المواعيد </Typography>
        <Typography component={Link} to='/find_doctor' sx={{textDecoration:'none' , color:'initial'}} variant="string">حجز مخبر</Typography><br />
        <Typography component={Link} to='/find_doctor' sx={{textDecoration:'none' , color:'initial'}} variant="string">حجز طبيب</Typography>
      </Box>
      <Box>
        <Typography variant="h6">البحث عن طبيب</Typography>
      </Box>
    </Box>
  );
}
