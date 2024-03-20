import { Box, Typography , Avatar } from "@mui/material";
import classes from "./SideBarContent.module.css";
import Logo from '../../../assets/image/aghiad.jpg'
import { MainContext } from "../../../pages/App";
import { useContext } from "react";
export default function SideBarContent() {
  const { IsMobileValue } = useContext(MainContext);
  const [isMobile] = IsMobileValue;
  return (
    <Box className={classes.container}>
      {isMobile && <span>
        <Typography variant="string" >Aghiad</Typography>
        <Avatar  src={Logo}></Avatar >
        </span>}
      <Box>
        <Typography variant="h6">الرئيسية</Typography>
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
        <Typography variant="string">حجز مخبر</Typography>
        <Typography variant="string">حجز طبيب</Typography>
      </Box>
      <Box>
        <Typography variant="h6">البحث عن طبيب</Typography>
      </Box>
    </Box>
  );
}
