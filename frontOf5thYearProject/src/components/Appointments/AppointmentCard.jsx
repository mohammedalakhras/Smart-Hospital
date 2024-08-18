import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import UpdateAppointment from "../../functions/Appointments/UpdateAppointment";

export default function AppointmentCard(props) {
  const [edit, setEdit] = useState(false);
  const [editRotateAngle, setEditRotateAngle] = useState(0);

  //edited appointment
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedTime, setSelectedTime] = useState(dayjs()); // Initialize as Dayjs object
  const [notPending, setnotPending] = useState(props.data.status !== "pinding");
  const [reject, setReject] = useState(props.data.status === "reject");
  const [finshed, setfinshed] = useState(props.data.status === "finshed");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");


 
  useEffect(()=>{
     if (props.data.status === "reject") {
    setStatus(
      <p style={{ color: "red", fontWeight: "bold" }}>تم الرفض</p>
    );
  } else if (props.data.status === "finshed") {
    setStatus(
      <p style={{ color: "green", fontWeight: "bold" }}>تمت الزيارة</p>
    );
  } else if (props.data.status === "accept") {
    setStatus(
      <p style={{ color: "blue", fontWeight: "bold" }}>تمت قبول الموعد من قبل الطبيب</p>
    );
  } else if (props.data.status === "pinding") {
    setStatus(
      <p style={{ color: "orange", fontWeight: "bold" }}>معلق، لم يتم تحديد الموعد من قبل الطبيب</p>
    );
  }
  },[])
  const daysInMonth = (month) => {
    switch (month) {
      case 2:
        return 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };

  return (
    <div style={{ direction: "rtl" }}>
      <Paper
        sx={{ padding: 2, borderRadius: 4, maxWidth: "800px", margin: "auto" }}
      >
        <Grid container spacing={2} sx={{ marginTop: "1%", fontSize: "16px" }}>
          <Grid item xs={12} md={2} sx={{ textAlign: "right" }}>
            <Box mt={2}>
              <Avatar
                alt="Doctor"
                // src="https://via.placeholder.com/150"
                src={props.data.doctor.profile}
                sx={{ width: 120, height: 120, margin: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              اسم الطبيب :{props.data.doctor_name}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontSize: "20px" }}>
              حالة الموعد:
            </Typography>
            <Typography
              variant="contained"
              // sx={{
              //   backgroundColor: "#90EE90",
              //   mb: 1,
              //   border: "3px #A0FAC0 solid",
              //   borderRadius: "5px",
              //   fontSize: "20px",
              // }}
            >
              {status}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: "20px" }}
            >
              التاريخ:{" "}
              {props.data.date == null ? "لم يحدد بعد" : props.data.date}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: "20px" }}
            >
              الوقت :{" "}
              {props.data.time == null ? "لم يحدد بعد" : props.data.time}
            </Typography>
          </Grid>

          <Grid item xs={11} md={5}>
            {edit && (
              <div>
                <Typography variant="h6" mb={2} sx={{ fontSize: "20px" }}>
                  تغيير موعد الحجز
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="التاريخ"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      fullWidth
                    >
                      <MenuItem key={1} value={new Date().getFullYear()}>
                        {new Date().getFullYear()}
                      </MenuItem>
                      <MenuItem key={2} value={new Date().getFullYear() + 1}>
                        {new Date().getFullYear() + 1}
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="الشهر"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      fullWidth
                    >
                      {[...Array(12)].map((e, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="اليوم"
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                      fullWidth
                    >
                      {[...Array(daysInMonth(selectedMonth))].map((_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="الوقت"
                        value={selectedTime}
                        onChange={(newValue) => setSelectedTime(newValue)} // Pass Dayjs object directly
                        fullWidth
                      />
                    </LocalizationProvider>
                  </Grid>
                  {/* <Grid item xs={6}>
                    <TextField
                      select
                      label="AM/PM"
                      value={selectedAmPm}
                      onChange={(e) => setSelectedAmPm(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value="am">AM</MenuItem>
                      <MenuItem value="pm">PM</MenuItem>
                    </TextField>
                  </Grid> */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onClick={() => {
                        setMsg("");
                        UpdateAppointment(
                          props.data.id,
                          props.data.doctor_id,
                          selectedYear +
                            "-" +
                            selectedMonth +
                            "-" +
                            selectedDay,
                          selectedTime.format("HH:mm")
                        )
                          .then((e) => {
                            setMsg(e.data.msg);
                          })
                          .catch((e) => {
                            setMsg(e.data.msg);
                          });
                      }}
                    >
                      إعادة الطلب
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
          <Grid item xs={1} md={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                paddingLeft: "100%",
              }}
            >
              {
                // notPending &&
                !reject && !finshed && (
                  <button
                    style={{
                      borderRadius: "50%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      rotate: -editRotateAngle + "deg",
                    }}
                    onClick={() => {
                      setEdit(!edit);
                      setEditRotateAngle(edit ? 0 : 45);
                    }}
                  >
                    <EditIcon />
                  </button>
                )
              }

              {!finshed && (
                <button
                  style={{
                    borderRadius: "50%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {


                    //WAIT API FOR DELETE
                  }}
                >
                  <DeleteIcon />
                </button>
              )}
            </Box>
          </Grid>
        </Grid>
        <p>{msg}</p>
      </Paper>
    </div>
  );
}
