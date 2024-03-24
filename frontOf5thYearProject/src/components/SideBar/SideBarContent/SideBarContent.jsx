import { Box, Typography , Avatar } from "@mui/material";
import classes from "./SideBarContent.module.css";
import Logo from '../../../assets/image/aghiad.jpg'
import { MainContext } from "../../../pages/App";
import { useContext, useEffect, useState } from "react";


import getData from "../../../functions/getData";
import prof from "../../../assets/image/Profile/patient.png";


export default function SideBarContent() {
  const { IsMobileValue } = useContext(MainContext);
  const [isMobile] = IsMobileValue;

  const [avtr, setAvtr] = useState(null);
const [profDt,setDt]=useState()


  useEffect(()=>{
    getData(window.localStorage.getItem("token"))
    .then((r) => {
      setDt(r.data.pation)
      setAvtr(
        r.data.pation.profile == null ? (
          <Avatar src={prof} />
        ) : (
          <Avatar src={r.data.pation.profile} />
        )
      );
    })
    .catch((er) => {
      setAvtr(<Avatar src={prof} />);
    });
    
  })
  return (
    <Box className={classes.container}>
      {isMobile && <span>
        <Typography variant="string" >{profDt.full_name}</Typography>
        {/* <Avatar  src={Logo}></Avatar > */}
        {avtr}
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
