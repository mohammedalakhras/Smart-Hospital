import { Grid } from "@mui/material";
import st from "./Signup.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function SignUp() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={st.container}>
        <div className={`${st.circle} ${st.circleblue}`}></div>
        <div className={`${st.circle} ${st.circlewhite}`}></div>

        <div className={st.content}>
          {" "}
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} xl={6} className={`${st.sidecontent}`}>
            <div
                style={{
                  backgroundColor: "#2cacae",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                }}
              >
                <div className={st.controlers}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      centered
                    >
                      <Tab label="تسجيل الدخول" />
                      <Tab label="انشاء حساب" />
                    </Tabs>
                    {value === 0 && <div>صفحة تسجيل الدخول </div>}
                    {value === 1 && <div>صفحة انشاء الحساب </div>}
                  </Box>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} xl={6} className={st.contentcontainer}>
              <div
                style={{
                  backgroundColor: "#f2f6ff",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                }}
              >
                <div className={st.sidebar}></div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
