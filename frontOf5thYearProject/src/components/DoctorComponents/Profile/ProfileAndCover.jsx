import { useEffect, useState } from "react";
import st from "./ProfileAndCover.module.css";
import { Box, Grid, Button } from "@mui/material/";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import patient from "../../../assets/image/Profile/patient.png";
import { useNavigate } from "react-router-dom";
export default function ProfileAndCover(props) {
  const nav = useNavigate();
  const [data, setdata] = useState(props.data[0]);
  useEffect(() => {
    setdata(props.data[0]);
  }, [props.data]);

  console.log(data);

  return (
    <div>
      {" "}
      <div className={st.container}>
        <div className={st.cover}></div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div
                className={st.ProfileImage}
                style={{
                  backgroundImage: `url(${
                    data.profile == null ? patient : data.profile
                  })`,
                }}
              ></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div>
                <Box sx={{ flexGrow: 1, textAlign: "center" }}>
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
                      <p className={st.ptitle}>الرقم الوطني </p>
                      <p className={st.pvalue}>
                        {data.SSN ? data.SSN : "غير مدخل بعد"}
                      </p>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>الهاتف</p>
                      <p className={st.pvalue}>
                        {data.mobile ? data.mobile : "غير مدخل بعد"}
                      </p>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <p className={st.ptitle}>الاختصاص</p>
                      <p className={st.pvalue}>
                        {data.specialazation
                          ? data.specialazation
                          : "غير مدخل بعد"}
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              className={st.buttonContainer}
            >
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justifyContent="center"
                alignItems="center"
              >
                <div>
                  <Button
                    className={st.button}
                    style={{
                      background: "#f45d48",
                      bordeRadius: "5px",
                    }}
                    onClick={() => nav("/doctor/edit profile")}
                  >
                    <ModeEditIcon sx={{ color: "#FFFFFF" }} />
                    <p> أكمال-تعديل المعلومات </p>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              </Grid>
              <Grid item xs={5
              } sm={12} md={12} lg={12} xl={12}>
                <p className={st.ptitle}>المعلومات</p>
                <p className={st.pvalue}>
                  {data.info ? data.info : "غير مدخل بعد"}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
