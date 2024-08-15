import { Box } from "@mui/material";
import { Client } from "@gradio/client";

//import components
import AddPostForHomePage from "../../components/Patinet Screens/Home/AddPostForHomePage";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import CommonQuestions from "../../components/Patinet Screens/Profile/CommonQuestions";
import { useLoaderData } from "react-router-dom";

//import css file
import classes from './Profile.module.css'
import { useEffect } from "react";
export default function Home() {
useEffect( ()=>{
async function test(){
// const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
// const exampleImage = await response_0.blob();
						
// const client = await Client.connect("MohammedAlakhras/Retinal_Diseases_Classification");
// const result = await client.predict("/predict", { 
// 				img: exampleImage, 
// });

console.log('HELLO');}
test()
},[])
  const ques = useLoaderData();

  return (
    <Box className={classes.container}>
      <AddPostForHomePage />
      <MyQuestions data={ques} />
      <CommonQuestions />
    </Box>
  );
}
