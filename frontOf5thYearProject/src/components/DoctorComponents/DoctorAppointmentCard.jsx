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
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import { useEffect, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import changeStausFromDoctor from "../../functions/Appointments/ChangeStatusFromDoctor";
import { useNavigate } from "react-router-dom";

export default function AppointmentCard(props) {
  const [edit, setEdit] = useState(false);
  const [editRotateAngle, setEditRotateAngle] = useState(0);
const nav=useNavigate();
  // Edited appointment states
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedTime, setSelectedTime] = useState(dayjs()); // Start with a Dayjs object
  const [notPending, setnotPending] = useState(props.data.status !== "pinding");
  const [Accept, setAccept] = useState(props.data.status === "accept");
  const [reject, setreject] = useState(props.data.status === "reject");
  const [finshed, setfinshed] = useState(props.data.status === "finshed");
  const [status, setStatus] = useState('');
  
  const [msg, setMsg] = useState("");

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

  useEffect(() => {

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
        <p style={{ color: "blue", fontWeight: "bold" }}>تمت قبول الموعد من قبلك</p>
      );
    } else if (props.data.status === "pinding") {
      setStatus(
        <p style={{ color: "orange", fontWeight: "bold" }}>معلق، لم يتم تحديد الموعد من قبلك</p>
      );
    }
    
  

  }, []);

  return (
    <div style={{ direction: "rtl", margin:'5%' }}>
      <Paper
        sx={{ padding: 2, borderRadius: 4, maxWidth: "800px", margin: "auto" }}
      >
        <Grid container spacing={2} sx={{ marginTop: "1%", fontSize: "16px" }}>
          <Grid item xs={12} md={2} sx={{ textAlign: "right" }}>
            <Box mt={2}>
              <Avatar
                alt="Doctor"
                // src="https://via.placeholder.com/150"
                src={props.data.pation.profile}
                sx={{ width: 120, height: 120, margin: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              اسم المريض :{props.data.pation.full_name}
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
            {
              // props.data.status == "pinding" &&
              (!Accept && !finshed && !reject) && (
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
                        {[...Array(12)].map((_, i) => (
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
                          onChange={(newValue) => setSelectedTime(newValue)} // Ensure correct Dayjs object
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
                          console.log("D:", selectedDay);
                          console.log("M:", selectedMonth);
                          console.log("Y:", selectedYear);
                          console.log("T:", selectedTime.format("HH:mm")); // format time output

                          changeStausFromDoctor(
                            props.data.id,
                            selectedYear +
                              "-" +
                              selectedMonth +
                              "-" +
                              selectedDay,
                            selectedTime.format("HH:mm"),
                            "accept"
                          )
                            .then((e) => {
                              setMsg(e.data.msg);
                              // window.location.reload();
                              props.reload();
                         
                            })
                            .catch((e) => {
                              setMsg(e.data.msg);
                            });
                        }}
                      >
                        تحديد موعد
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )
            }
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
              {Accept && (
                <button
                  style={{
                    borderRadius: "50%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    rotate: -editRotateAngle + "deg",
                  }}
                  onClick={() => {
                    changeStausFromDoctor(props.data.id, null, null, "finshed")
                      .then((e) => {
                        setMsg(e.data.msg);
                        props.reload()
                      })
                      .catch((e) => {
                        setMsg(e.data.msg);
                      });
                  }}
                >
                  <DoneIcon />
                </button>
              )}
            {(!reject && !finshed) &&  (<button
                style={{
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  changeStausFromDoctor(
                    props.data.id,
                    null,
                    null,
                    "reject"
                  )
                    .then((e) => {
                      setMsg(e.data.msg);
                      props.reload()
                    })
                    .catch((e) => {
                      setMsg(e.data.msg);
                    });
                }}
              >
                <CancelIcon />
              </button>)}
            </Box>
          </Grid>
        </Grid>
        <p>{msg}</p>
      </Paper>
    </div>
  );
}
