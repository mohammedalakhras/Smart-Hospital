import st from "./ProfAndCovEdit.module.css";
import { Box, Grid, Button } from "@mui/material/";
import patient from "../../../assets/image/Profile/patient.png";
import { useState } from "react";
export default function ProfAndCovEdit(props) {
  // const [data, setdata] = useState({
  //   name: "اغيد علوان",
  //   email: "MabdMAk@gmail.com",
  //   bdate: "10/6/2001",
  //   phone: "+963999999999",
  //   dis: "None",
  // });

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
                style={{ backgroundImage: `url(${patient})` }}
              ></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div>
                <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <h2 className={st.name}>{props.data.full_name}</h2>
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
            ></Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
