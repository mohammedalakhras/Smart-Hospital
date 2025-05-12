//import react hook

//import mui compopnent
import { Modal, Typography, Box, TextField, Button } from "@mui/material";
// eslint-disable-next-line react/prop-types
export default function ModalScreen({isOpen,setIsOpen,setDescription,description,handleButtonClick , status}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F3F2F2",
    p: 4,
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Box sx={style}>
        <Typography variant="h6">الرجاء كتابة حالة المريض(اختياري)</Typography>
        <TextField
          sx={{
            width: "100%",
            height: "193px",
            bgcolor: "white",
            marginTop: "10px",
            outline: "none",
          }}
          multiline
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows={7}
        />
        <Button
          onClick={handleButtonClick}
          sx={{
            width: "200px",
            backgroundColor: "var(--secondary)",
            color: "white",
            marginTop: "15px",
            marginRight: "100px",
            "&:hover": {
              bgcolor: "var(--secondary)",
            },
          }}
        >
          إرسال
        </Button>
        <Typography width="fit-content" m="auto">{status}</Typography>
      </Box>
    </Modal>
  );
}
