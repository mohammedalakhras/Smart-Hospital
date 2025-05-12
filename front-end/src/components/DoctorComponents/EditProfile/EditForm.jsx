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

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import st from "./EditForm.module.css";
import getCities from "../../../functions/getcities";
import dayjs from "dayjs";
import updateProfile from "../../../functions/UpdateProfile";

//import for Prof and cover :
import stProf from "./ProfAndCovEdit.module.css";
import patient from "../../../assets/image/Profile/patient.png";
import cover from "../../../assets/image/Profile/cover.svg";
import EditIcon from "@mui/icons-material/Edit";
import getSpec from "../../../functions/getSpec";
import UpdateDoctorProfile from "../../../functions/UpdateDoctroProfile";

export default function EditForm(props) {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(dayjs("2001-01-01"));
  const [errors, setError] = useState({});
  const [cities, setCities] = useState([]);
  const [city, setcity] = useState(1);
  const [prof, setProf] = useState(null);
  const [cov, setCov] = useState(null);
  const [ssn, setSsn] = useState("");
  const [moblie, setMobile] = useState("");
  const [info, setInfo] = useState("");
  const [External, setExternal] = useState("");
  const [specs, setSpecs] = useState([]);
  const [specID, setspecID] = useState();

  const [msg, setMsg] = useState("");
  const [moreThantry, setTry] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCities().then((e) => setCities(e.data.data));
        await getSpec().then((e) => setSpecs(e.data.data));

        // قم بتعيين القيم من props مباشرة بعد التأكد من وجود البيانات
        if (props.data && props.data.length > 0) {
          const userData = props.data[0];
          setName(userData.full_name);
          setFname(userData.father);
          setMname(userData.mother);
          setPhone(userData.Telephone);
          setMobile(userData.mobile);
          setExternal(userData.External);
          setDate(dayjs(userData.Bdate));
          setcity(userData.city_id);
          setInfo(userData.info)
          setspecID(userData.specialazation.id);
          console.log("userData.specialazation.id", userData.specialazation.id);

          setProf(userData.profile);
          setCov(userData.cover);
          setSsn(userData.SSN);
        }

        console.log("CITIES", cities);
        console.log("SPECS", specs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {

  //   console.log(name, fname, mname, errors);

  //   if (!name) {
  //     // setError({ ...errors, fullname: "الحقل مطلوب" });
  //     setError((prev) => {
  //       return { ...prev, fullname: "الحقل مطلوب" };
  //     });
  //     // errors.fullname = "الحقل مطلوب";
  //   } else if (!/^[\p{L}\s]+$/u.test(name)) {
  //     setError((prev) => {
  //       return { ...prev, fullname: "الاسم غير صالح" };
  //     });
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, fullname: null };
  //     });
  //   }

  //   if (!fname) {
  //     setError((prev) => {
  //       return { ...prev, fname: "الحقل مطلوب" };
  //     });
  //   } else if (!/^[\p{L}\s]+$/u.test(fname)) {
  //     setError((prev) => {
  //       return { ...prev, fname: "الاسم غير صالح" };
  //     });
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, fname: null };
  //     });
  //   }

  //   if (!mname) {
  //     setError((prev) => {
  //       return { ...prev, mname: "الحقل مطلوب" };
  //     });
  //   } else if (!/^[\p{L}\s]+$/u.test(mname)) {
  //     setError((prev) => {
  //       return { ...prev, mname: "الاسم غير صالح" };
  //     });
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, mname: null };
  //     });
  //   }
  //   console.log(phone);

  //   if (!phone) {
  //     setError((prev) => {
  //       return { ...prev, phone: "الحقل مطلوب" };
  //     });
  //   } else if (!/^[\+]{0,1}[0-9]{8,18}$/u.test(phone)) {
  //     setError((prev) => {
  //       return { ...prev, phone: "رقم الهاتف غير صالح" };
  //     });
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, phone: null };
  //     });
  //   }
  // }, [name, fname, mname, phone, ssn]);

  const handleFileChange = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (id == 1) setProf(reader.result);
        else setCov(reader.result);

        console.log("prof", prof);
        console.log("cov", cov);
      };
      reader.readAsDataURL(file);
    } else {
      if (id == 1) setProf(null);
      else setCov(null);
    }
  };

  function handleSubmit() {
    setTry(true);
    setMsg("");
    // console.log("name", name);
    // console.log("fname", fname);
    // console.log("mname", mname);
    // console.log("city", city);
    let formatedDate = date.$y + "-" + Number(date.$M + 1) + "-" + date.$D;
    // console.log("date", formatedDate);
    // console.log("phone", phone);

    if (
      errors.name == null &&
      errors.fname == null &&
      errors.mname == null &&
      errors.mname == null
    ) {
      console.log("Condition TRUE", errors);

      UpdateDoctorProfile(
        name,
        fname,
        mname,
        ssn,
        formatedDate,
        info,
        phone,
        moblie,
        External,
        city,
        specID,
        prof,
        cov
      ).then((e) => {
        if (e != null) {
          if (e.data != null) {
            if (e.data.message != null) setMsg(e.data.message);
            else if (e.data.msg != null) setMsg(e.data.msg);
            else setMsg(null);
          }
        }
      });
    } else {
      setMsg("أدخل قيم صالحة في الحقول");
    }
  }
  return (
    <div>
      <div>
        {" "}
        <div className={stProf.container}>
          <div
            className={stProf.cover}
            style={{
              backgroundImage: `url(${
                props.data[0].cover == null ? cover : cov
              })`,
            }}
          >
            <input
              type="file"
              id="coverinput"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, 2)}
            />
            <button
              className={st.editIconCover}
              onClick={() => document.getElementById("coverinput").click()}
            >
              <EditIcon className={st.icon} />
            </button>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <div
                  className={stProf.ProfileImage}
                  style={{
                    backgroundImage: `url(${
                      props.data[0].profile == null ? patient : prof
                    })`,
                  }}
                >
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileChange(e, 1)}
                  />
                  <button
                    className={st.editIcon}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <EditIcon className={st.icon} />
                  </button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <div>
                  <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h2 className={stProf.name}>
                          {props.data[0].full_name}
                        </h2>
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
                className={stProf.buttonContainer}
              ></Grid>
            </Grid>
          </Box>
        </div>
      </div>

      {/* end of above section */}
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
                  {moreThantry && <p className={st.error}>{errors.fullname}</p>}
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
                  {moreThantry && <p className={st.error}>{errors.fname}</p>}
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
                  {moreThantry && <p className={st.error}>{errors.mname}</p>}
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
                    رقم الموبايل
                  </InputLabel>
                  <br />
                  <TextField
                    className={st.field}
                    required
                    id="moblie"
                    placeholder="+963999999999"
                    sx={{ direction: "ltr" }}
                    variant="standard"
                    value={moblie}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                  {moreThantry && <p className={st.error}>{errors.phone}</p>}
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
                    id="phone"
                    placeholder="+963999999999"
                    sx={{ direction: "ltr" }}
                    variant="standard"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {moreThantry && <p className={st.error}>{errors.phone}</p>}
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
                    رقم المعاينات الخارجية
                  </InputLabel>
                  <br />
                  <TextField
                    className={st.field}
                    required
                    id="ex"
                    placeholder="+963999999999"
                    sx={{ direction: "ltr" }}
                    variant="standard"
                    value={External}
                    onChange={(e) => {
                      setExternal(e.target.value);
                    }}
                  />
                  {moreThantry && <p className={st.error}>{errors.phone}</p>}
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
                    معلومات عن الطبيب
                  </InputLabel>
                  <br />
                  <TextField
                    className={st.field}
                    required
                    id="info"
                    placeholder="اخصائي في الجراحة من جامعة باريس"
                    variant="standard"
                    value={info}
                    onChange={(e) => {
                      setInfo(e.target.value);
                    }}
                  />
                  {/* {moreThantry && <p className={st.error}>{errors.phone}</p>} */}
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
                    الرقم الوطني
                  </InputLabel>
                  <br />
                  <TextField
                    className={st.field}
                    required
                    id="ssn"
                    placeholder=" 01000000"
                    variant="standard"
                    value={ssn}
                    onChange={(e) => {
                      setSsn(e.target.value);
                    }}
                  />
                  {/* {moreThantry &&    <p className={st.error}>{errors.name}</p>} */}
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
                    تاريخ الميلاد
                  </InputLabel>
                  <br />
                  <div style={{ display: "block", alignContent: "center" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* <DemoContainer components={["DatePicker"]}   */}
                      <DatePicker
                        key="date"
                        label="تاريخ الميلاد"
                        format="DD/MM/YYYY"
                        sx={{ direction: "rtl" }}
                        value={date}
                        onChange={(newvalue) => {
                          setDate(newvalue);
                          console.log(
                            newvalue.$D,
                            "/",
                            newvalue.$M,
                            "/",
                            newvalue.$y,
                            "\n",
                            newvalue
                          );
                        }}
                      />
                      {/* </DemoContainer> */}
                    </LocalizationProvider>
                  </div>
                  {/* <p className={st.error}>{errors.date}</p> */}
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
                      <MenuItem key={e.id} value={e.id}>
                        {e.name}
                      </MenuItem>
                    ))}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  {/* <p className={st.error}>{errors.city}</p> */}
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
                    htmlFor="demo-simple-select-label"
                  >
                    الاختصاص
                  </InputLabel>
                  <br />
                  <Select
                    labelId="demo-simple-select-label"
                    id="specselect"
                    value={specID || ""}
                    label="spec"
                    onChange={(e) => {
                      setspecID(e.target.value);
                    }}
                  >
                    {specs.map((e, i) => (
                      <MenuItem key={e.id} value={e.id}>
                        {e.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {/* <p className={st.error}>{errors.city}</p> */}
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
                  onClick={handleSubmit}
                >
                  <ModeEditIcon sx={{ color: "#FFFFFF" }} />
                  <p> حفظ التعديلات </p>
                </Button>
              </div>
            </Grid>
            <p>{msg}</p>
          </Box>
        </div>
      </div>
    </div>
  );
}
