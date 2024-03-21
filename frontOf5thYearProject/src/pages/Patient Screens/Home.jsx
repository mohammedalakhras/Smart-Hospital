import { Box } from "@mui/material";

//import components
import AddPostForHomePage from "../../components/Patinet Screens/Home/AddPostForHomePage";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import CommonQuestions from "../../components/Patinet Screens/Profile/CommonQuestions";
import { useLoaderData } from "react-router-dom";

//import css file
import classes from './Profile.module.css'
export default function Home() {

  const ques = useLoaderData();

  return (
    <Box className={classes.container}>
      <AddPostForHomePage />
      <MyQuestions data={ques} />
      <CommonQuestions />
    </Box>
  );
}
