import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material/";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import st from "./EditForm.module.css";
import getCities from "../../../functions/getcities";
import dayjs from "dayjs";
export default function EditForm() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [phone, setPhone] = useState("");
  const [chronicDiseases, setChronicDiseases] = useState("");
  const [date, setDate] = useState(dayjs("2001-01-01"));
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
            <p>أكمل معلوماتك</p>
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
                  value={name}
                  id="fullname"
                  placeholder="جون سميث"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.fullname}</p>
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
                  اسم الأب
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  value={fname}
                  id="fathername"
                  placeholder="أدخل اسم الأب"
                  variant="standard"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.fname}</p>
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
                  اسم الأم
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  value={mname}
                  id="mname"
                  placeholder="أدخل اسم الأم"
                  variant="standard"
                  onChange={(e) => {
                    setMname(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.mname}</p>
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
                  className={st.field}
                  required
                  id="moblie"
                  placeholder="+963999999999"
                  sx={{direction:"ltr"}}
                  variant="standard"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.phone}</p>
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
                   الأمراض المزمنة
                </InputLabel>
                <br />
                <TextField
                  className={st.field}
                  required
                  id="fullname"
                  placeholder="أدخل الأمراض المزمنة"
                  variant="standard"
                  value={chronicDiseases}
                  onChange={(e) => {
                    setChronicDiseases(e.target.value);
                  }}
                />
                <p className={st.error}>{errors.chronic}</p>
              </div>

              {/* <div className={st.element}>
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
              </div> */}

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
                  تاريخ الميلاد 
                </InputLabel>
                <br />
                <div style={{ display: "block", alignContent: "center" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}   >
                    {/* <DemoContainer components={["DatePicker"]}   */}
                    <DatePicker
                      key="date"
                      label="تاريخ الميلاد"
                      format="DD/MM/YYYY"
                      sx={{ direction: "rtl" }}
                      value={date}
                      onChange={(newvalue) => {
                        setDate(newvalue);
                        console.log(newvalue.$D ,'/',newvalue.$M,'/',newvalue.$y,"\n",newvalue);
                      }}
                    />
                    {/* </DemoContainer> */}
                  </LocalizationProvider>
                </div>
                <p className={st.error}>{errors.date}</p>
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
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                >
                  {cities.map((e) => (
                    <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                  ))}
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
                <p className={st.error}>{errors.city}</p>
              </div>
              {/* </Box> */}
              {/* </div> */}
            </Grid>
          </Grid>
          <Grid item>
            <div>
              <Button
                className={st.button}
                style={{
                  background: "#f45d48",
                  bordeRadius: "5px",
                  color: "#fff",
                }}
                onClick={() => {}}
              >
                <ModeEditIcon sx={{ color: "#FFFFFF" }} />
                <p style={{}}> حفظ التعديلات </p>
              </Button>
            </div>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
