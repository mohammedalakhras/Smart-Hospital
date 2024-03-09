import { Grid } from "@mui/material";
import st from "./Logging.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Logging(props) {
  const navigate = useNavigate();
  const [value, setValue] = useState(
    window.location.pathname === "/signin/" ? 0 : 1
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div>
      <div className={st.container}>
        <div className={`${st.circle} ${st.circleblue}`}></div>
        <div className={`${st.circle} ${st.circlewhite}`}></div>

        <div className={st.content}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} xl={6}>
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
                      aria-label="signup/signin"
                      centered
                    >
                      <Tab label="تسجيل الدخول" />
                      <Tab label="انشاء حساب" />
                    </Tabs>
                    {/* {value === 0 && <LoginInputs />}
                    {value === 1 && <SignUpInputs />} */}
                    <Outlet context={[value,setValue]} />
                  </Box>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              xl={6}
              className={`${st.contentcontainer} ${st.sidecontent}`}
            >
              <div
                style={{
                  backgroundColor: "#f2f6ff",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                }}
              >
                <div
                  className={st.sidebar}
                  style={{
                    backgroundImage: `url(/src/assets/image/Logging/${
                      value == 0 ? 'Signin.svg' : 'Signup.svg'
                    })`,
                  }}
                >
                  {" "}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
