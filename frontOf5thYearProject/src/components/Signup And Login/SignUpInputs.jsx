import { InputLabel, Select, TextField, MenuItem, Button } from "@mui/material";
import st from "./SignUpInputs.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpInputs() {
  function HandleChange(e) {
    setPatorDoc(e.target.value);
  }

  function submit(e) {
    // e.preventDefault();
  }
  function HandelName(e) {
    setName(e.target.value);
    console.log(name);
  }
  function HandelEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }
  function HandelPass(e) {
    setPass(e.target.value);
    console.log(pass);
  }

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [PatorDoc, setPatorDoc] = useState(0);//doctor or patient (Select)

  const navigate = useNavigate();

  return (
    <div className={st.container}>
      <form>
        <div className={st.inputFields}>
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
              htmlFor="uncontrolled-native"
            >
              الاسم الكامل
            </InputLabel>

            <br />
            <TextField
              value={name}
              onChange={HandelName}
              className={st.field}
              required
              id="name"
              placeholder="جون سميث"
              variant="standard"
            />
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
              type="email"
              required
              variant="standard"
              htmlFor="email"
            >
              البريد الالكتروني
            </InputLabel>
            <br />
            <TextField
              value={email}
              onChange={HandelEmail}
              className={st.field}
              required
              id="email"
              type="email"
              placeholder="example@host.com"
              variant="standard"
            />
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
              htmlFor="uncontrolled-native"
            >
              كلمة المرور
            </InputLabel>
            <br />
            <TextField
              value={pass}
              onChange={HandelPass}
              className={st.field}
              required
              id="password"
              type="password"
              variant="standard"
            />
          </div>
        </div>

        <div className={st.buttons}>
          <InputLabel
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              lineHeight: "24px",
              color: "#84A1FF",
              textAlign: "right",
            }}
            variant="standard"
            htmlFor="select"
          >
            نوع الحساب
          </InputLabel>
          <Select
            required
            labelId=""
            id="select"
            value={PatorDoc}
            onChange={HandleChange}
            sx={{
              fontFamily: "Al-Jazeera-Arabic",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "25px",
              textAlign: "center",
              color: "#FFFFFF",
              width: "95%",
              marginLeft: "10%",
              background: "#c2ced7",
              borderRadius: "5px",
              height: "40px",
            }}
          >
            <MenuItem value={0}>مريض</MenuItem>
            <MenuItem className={st.Item} value={1}>
              طبيب
            </MenuItem>
          </Select>

          <Button
            onClick={submit}
            variant="contained"
            type="submit"
            sx={{
              background: "#F45D48",
              borderRadius: "5px",
              width: "70%",
              margin: "20px 0 20px 0",
              fontFamily: "Al-Jazeera-Arabic",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "25px",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                color: "#F45D48",
              },
            }}
          >
            إنشاء حساب
          </Button>
          <InputLabel
            sx={{
              fontFamily: "Al-Jazeera-Arabic",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "25px",

              color: "#FF6F9C",
              margin: "10px 0px 10px 0px",
              cursor:'pointer'
            }}
            variant="standard"
            htmlFor="select"
            onClick={() => {
              window.location.pathname = "/signin/";
            }}
          >
            لدي حساب
          </InputLabel>
        </div>
      </form>
    </div>
  );
}
