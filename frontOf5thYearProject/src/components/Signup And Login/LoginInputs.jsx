import st from "./SignUpInputs.module.css";
import { InputLabel, TextField, Button } from "@mui/material";

export default function LoginInputs() {
  return (
    <div
      className={st.container}
      style={{
        width: "100%",
        height: "auto",
        display: "inline-block",
        paddingTop: "10px"
      }}
    >
      <form>
      <div
        className={st.inputFields}
        style={{ paddingTop: "10%",paddingBottom: "10%", marginTop: "10%", marginBottom: "10%" }}
      >
        <div className={st.element}>
          <InputLabel
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              lineHeight: "24px",
              color: "#84A1FF"
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
            required
            className={st.field}
            id="password"
            type="password"
            variant="standard"
          />
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
          >
            تسجيل الدخول
          </Button>
        </div>
      </div>
      </form>
    </div>
  );
}
