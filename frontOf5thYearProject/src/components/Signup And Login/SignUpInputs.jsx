import { InputLabel, Select, TextField, MenuItem, Button } from "@mui/material";
import st from "./SignUpInputs.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function SignUpInputs(props) {
  function HandleChange(e) {
    setPatorDoc(e.target.value);
  }

  function submit(e) {
    // e.preventDefault();
  }
  function HandelName(e) {
    setName(e.target.value);
    setCounter2((p) => p + 1);
  }
  function HandelEmail(e) {
    setEmail(e.target.value);
    setCounter2((p) => p + 1);
  }
  function HandelPass(e) {
    setPass(e.target.value);
    setCounter2((p) => p + 1);
  }

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [PatorDoc, setPatorDoc] = useState(0); //doctor or patient (Select)

  const navigate = useNavigate();
  const [value, setValue] = useOutletContext();
  const [errors, setError] = useState({});
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    if (!name) {
      errors.name = "الحقل مطلوب";
    }
    // } else if (!/^[A-Z]{4,40}$/i.test(name)) {
    //   setError({ ...errors, name: "الاسم غير صالح" });
    // }
    else {
      setError({ ...errors, name: null });
    }

    if (!email) {
      errors.email = "الحقل مطلوب";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "الايميل غير صالح";
    } else {  
      errors.email = null;
    }

    if (!pass) {
      errors.pass = "الحقل مطلوب";
    } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&]).*$/i.test(pass)) {
      errors.pass = "كلمة المرور غير صالحة";
    } else {
      errors.pass = null;
    }
  }, [name, email, pass, counter, counter2]);

  async function handleSubmit(e) {
    e.preventDefault();
    setCounter((p) => p + 1);
    if (email && pass && errors.email == null && errors.pass == null) {
      let url =
        PatorDoc == 0
          ? "http://127.0.0.1:8000/api/pation/register"
          : "http://127.0.0.1:8000/api/doctor/register";
      const res = await axios
        .post(url, {
          email: email,
          password: pass,
          full_name: name,
        })
        .then((res) => {
          const token = res.data.access_token;
          const type = res.data.type;

          // window.localStorage.setItem("token", token);
          navigate("/signin");
        })
        .catch((err) => {
          setError({ ...errors, note: err.response.data.msg });
        });
    }
  }

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
            <p className={st.error}>{counter > 0 && errors.name}</p>
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
              value={pass}
              onChange={HandelPass}
              className={st.field}
              required
              id="password"
              type="password"
              variant="standard"
            />
            <p className={st.error}>{counter > 0 && errors.pass}</p>
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
            <MenuItem className={st.Item} value={0}>
              مريض
            </MenuItem>
            <MenuItem className={st.Item} value={1}>
              طبيب
            </MenuItem>
          </Select>

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
            إنشاء حساب
          </Button>
          <p className={st.error}>{counter > 0 && errors.note}</p>

          <InputLabel
            sx={{
              fontFamily: "Al-Jazeera-Arabic",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "25px",

              color: "#FF6F9C",
              margin: "10px 0px 10px 0px",
              cursor: "pointer",
            }}
            variant="standard"
            htmlFor="select"
            onClick={() => {
              navigate("/signin/");
              setValue(0);
            }}
          >
            لدي حساب
          </InputLabel>
        </div>
      </form>
    </div>
  );
}
