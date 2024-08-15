import { useEffect, useState } from "react";
import st from "./ProfileAndCover.module.css";
import { Box, Grid, Button } from "@mui/material/";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";
import patient from "../../../assets/image/Profile/patient.png";
import cover from "../../../assets/image/Profile/cover.svg";
export default function ProfileAndCover(props) {
  useEffect(() => {
    setdata(props.data);
  }, [props.data]);

  const [data, setdata] = useState(props.data);
  const navigate=useNavigate();
  
 


  return (
    <div>
      {" "}
      <div className={st.container}>
        <div className={st.cover} style={{backgroundImage: `url(${data.cover==null?cover:data.cover})`}}></div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}  justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div
                className={st.ProfileImage}
                style={{ backgroundImage: `url(${data.profile==null?patient:data.profile})` }}
              >
                {console.log(data)
                }
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div>
                <Box sx={{ flexGrow: 1,textAlign:'center' }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <h2 className={st.name}>{data.full_name}</h2>
                    </Grid>
                    
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>البريد الالكتروني</p>
                      <p className={st.pvalue}>{data.email}</p>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>تاريخ الولادة</p>
                      <p className={st.pvalue}>{data.Bdate}</p>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>الهاتف</p>
                      <p className={st.pvalue}>{data.mobile}</p>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>الأمراض المزمنة</p>
                      <p className={st.pvalue}>{data.dis}</p>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
            <Grid  item xs={12} sm={6} md={4} lg={4} xl={4} className={st.buttonContainer}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  justifyContent="center" alignItems="center">
                <div>
                  <Button
                    className={st.button}
                    style={{
                      background: "#f45d48",
                      bordeRadius: "5px",
                      
                    }}
                    onClick={()=>navigate('/editProfile')}
                  >
                    <ModeEditIcon sx={{ color: "#FFFFFF" }} />
                    <p> إكمال-تعديل المعلومات </p>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
            </Grid>
          </Grid>
        </Box>
        
      </div>
    </div>
  );
}
