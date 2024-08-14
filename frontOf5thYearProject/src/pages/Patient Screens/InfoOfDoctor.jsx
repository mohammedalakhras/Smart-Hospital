//import react hook
import { useState } from "react";
//import mui component
import { Typography, Box, Avatar, Stack, Button } from "@mui/material";
//import css file
import classes from "./Profile.module.css";

// import image from '../../assets/image/aghiad.jpg'
import { useNavigate } from "react-router-dom";
//import redux selector
import { useSelector } from "react-redux";
import { useEffect } from "react";

//import component
import ModalScreen from "../../components/Patinet Screens/infoOfDoctor/ModalScreen";

export default function InfoOfDoctor() {
  const [isOpen, setIsOpen] = useState(false);
  const [description , setDescription] = useState('');
  const nav = useNavigate();
  const { selectedDoctor } = useSelector((state) => state);
  useEffect(() => {
    if (selectedDoctor.id == -1) {
      nav("/find_doctor");
    }
  }, []);

  function handleButtonClick() {
    const data = new FormData();
    data.append('doctor_id' , selectedDoctor.id)
    console.log(selectedDoctor.id)
    fetch('http://127.0.0.1:8000/api/appointments',{
      method: 'Post',
      header:{
        Authorization : `Bearer ${localStorage['token']}` 
      },
      body : data
    }).then(data => console.log(data))
  }

  if (selectedDoctor.id == -1) {
    return (
      <Box className={classes.container}>
        <Typography variant="h5" sx={{ marginRight: "30px" }}>
          يرجى اختيار طبيب
        </Typography>
      </Box>
    );
  }
  return (
    <Box className={classes.container}>
      <Typography variant="h5" sx={{ marginRight: "30px" }}>
        معلومات الطبيب :
      </Typography>
      <Box textAlign="center" bgcolor="white" borderRadius="20px" p={4} mt={2}>
        <Avatar
          src={selectedDoctor.profile}
          sx={{ width: "150px", height: "150px", margin: "auto" }}
        />
        <Stack direction="row">
          <Typography variant="subtitle1" color="#787878">
            اسم الطبيب :
          </Typography>
          <Typography variant="subtitle1" mr={3}>
            {selectedDoctor.name}
          </Typography>
        </Stack>
        <br />
        <Stack direction="row">
          <Typography variant="subtitle1" color="#787878">
            {" "}
            معلومات :
          </Typography>
          <Typography variant="subtitle1" mr={6}>
            {selectedDoctor.info}
          </Typography>
        </Stack>

        <br />
        <Button
          sx={{
            width: "200px",
            backgroundColor: "var(--secondary)",
            color: "white",
            "&:hover": {
                bgcolor: "var(--secondary)",
              },
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          طلب موعد
        </Button>
        <br />
      </Box>
      <ModalScreen handleButtonClick={handleButtonClick} isOpen={isOpen} setIsOpen={setIsOpen} description={description} setDescription={setDescription}/>
    </Box>
  );
}
