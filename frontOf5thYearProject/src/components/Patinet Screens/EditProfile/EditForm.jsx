import React, { useEffect, useState } from "react";
import { Box, Grid, Button, InputLabel, TextField ,Select,MenuItem } from "@mui/material/";

import st from "./EditForm.module.css";
import getCities from "../../../functions/getcities";
export default function EditForm() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [email, setEmail] = useState("");
  const [chronicDiseases, setChronicDiseases] = useState("");
  const [errors, setError] = useState({});
  const [cities, setCities] = useState([]);
  const [city, setcity] = useState(1);
  
  useEffect(() => {
    getCities().then((e) => setCities(e.data.data));
    console.log(cities);
  }, []);
  return (
    <div className={st.container}>
      <div className={st.form}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={st.head}
          >
            <p>
              أكمل معلوماتك
           
            </p>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              {/* <div> */}
              {/* <Box sx={{ flexGrow: 1, textAlign: "center" }}> */}
              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>
              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              {/* </Box> */}
              {/* </div> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              {/* <div> */}
              {/* <Box sx={{ flexGrow: 1, textAlign: "center" }}> */}
              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  الاسم الكامل
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                    
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  رقم الهاتف
                </InputLabel>
                <br />
                <TextField
                  sx={{textAlign:"left"}}
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="+963999999999"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.name}</p>
              </div>

              <div className={st.element}>
                <InputLabel
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "24px",
                    color: "#84A1FF",
                  }}
                  variant="standard"
                  htmlFor="email"
                >
                  المدينة
                </InputLabel>
                <br />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="Age"
                  onChange={(e)=>{setcity(e.target.value)
                    
                      console.log('city',city)
                    
                  }}
                >
                 {cities.map(e=>
              
                  <MenuItem value={e.id}>{e.name}</MenuItem>
                  
                  
                  

                 )}
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
                <p className={st.error}>{errors.name}</p>
              </div>
              {/* </Box> */}
              {/* </div> */}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
