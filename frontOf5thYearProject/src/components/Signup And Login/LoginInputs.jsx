import { useState } from "react";
import st from "./SignUpInputs.module.css";
import { InputLabel, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function LoginInputs() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const navigate = useNavigate();

  const [errors, setError] = useState({});

  useEffect(() => {
    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      if (!email) {
        updatedErrors.email = "الحقل مطلوب";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        updatedErrors.email = "الايميل غير صالح";
      } else {
        updatedErrors.email = null;
      }

      if (!pass) {
        updatedErrors.pass = "الحقل مطلوب";
      } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&]).*$/i.test(pass)) {
        updatedErrors.pass = "كلمة المرور غير صالحة";
      } else {
        updatedErrors.pass = null;
      }

      return updatedErrors;
    });
  }, [email, pass, counter, counter2]);

  async function handleSubmit(e) {
    e.preventDefault();
    setCounter((p) => p + 1);
    if (email && pass && errors.email == null && errors.pass == null) {
      const res = await axios
        .post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,
        })
        .then((res) => {
          const token = res.data.access_token;
          const type = res.data.type;

          window.localStorage.setItem("token", token);
          localStorage.setItem("type", type);
          if (type === "doctor") {
            navigate("/doctor");
          } else {
            navigate("/profile");
          }
        })
        .catch((err) => {
          setError({ ...errors, note: err.response.data.msg });
        });
    }
  }

  return (
    <div
      className={st.container}
      style={{
        width: "100%",
        height: "auto",
        display: "inline-block",
        paddingTop: "10px",
      }}
    >
      <form>
        <div
          className={st.inputFields}
          style={{
            paddingTop: "10%",
            paddingBottom: "10%",
            marginTop: "10%",
            marginBottom: "10%",
          }}
        >
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
              البريد الالكتروني
            </InputLabel>
            <br />
            <TextField
              className={st.field}
              required
              id="email"
              placeholder="example@host.com"
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
                setCounter2((p) => p + 1);
              }}
            />
            <p className={st.error}>{counter > 0 && errors.email}</p>
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
              required
              className={st.field}
              id="password"
              type="password"
              variant="standard"
              onChange={(e) => {
                setPass(e.target.value);
                setCounter2((p) => p + 1);
              }}
            />
            <p className={st.error}>{counter > 0 && errors.pass}</p>
          </div>
          <div className={st.buttons}>
            <Button
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
              onClick={handleSubmit}
            >
              تسجيل الدخول
            </Button>
            <p className={st.error}>{errors.note}</p>{" "}
          </div>
        </div>
      </form>
    </div>
  );
}
