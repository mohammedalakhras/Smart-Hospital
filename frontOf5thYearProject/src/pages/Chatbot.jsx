import { Box } from "@mui/material";
import ChatBotCon from "../components/Chatbot/ChatBotCon";
import classes from "../components/Patinet Screens/QuestionDetails/QuestionDetails.module.css";
export default function Chatbot() {
  return (
    <Box className={classes.container}>
      <div>Chatbot</div>
      <div></div>
      <ChatBotCon />
    </Box>
  );
}
