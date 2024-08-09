import { Typography, Box, Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//import component 
import CommentFeild from "./CommentFeild";
export default function QuestionComments() {
  const data = useLoaderData()
  const [commentValue , setCommentValue] = useState('')
  const [comments, setComments] = useState(data);
  const da = new Date();
  useEffect(()=>{
    setCommentValue('');
  },[comments])
  function changeHandler(event){
      setCommentValue(event.target.value);
  }
  function inputHandler(){
    setComments([...comments , { date:`${da.getFullYear()}-${da.getMonth()+1}-${da.getDate()}` , time:`${da.getHours()}:${da.getMinutes()+1}:${da.getSeconds()}` ,reply:commentValue , doctor_name: undefined }])
    
  }
  return (
    <Box p={4}>
      {comments.map((element) => {
        return (
          <Comment
            key={element.time}
            Comment={element.reply}
            CommenterName={element.doctor_name}
          />
        );
      })}
    <CommentFeild inputHandler={inputHandler} changeHandler={changeHandler} commentValue={commentValue}/>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function Comment({ Comment, CommenterName, profile }) {
  if (CommenterName == undefined) {
    return (
      <Stack direction="row" gap={2} sx={{ direction: "ltr" }}>
        <Avatar src={profile} />
        
        <Box
        m={1}
          sx={{
            borderRadius: "5px",
            backgroundColor: "var(--primary)",
            color: "white",
            display: "inline",
            padding: "10px 15px",
          }}
        >
          <Typography variant="string">
            <div>{Comment}</div>
          </Typography>
        </Box>
      </Stack>
    );
  }
  return (
    <Box m={1} mb={3}>
      <Stack direction="row" gap={2}>
        <Avatar src={profile} />
        <Typography variant="subtitle1"> {CommenterName}</Typography>
      </Stack>
      <Box sx={{display:'inline-block'}}>
        <Box
          m={1}
          mr={7}
          sx={{
            borderRadius: "5px",
            backgroundColor: "var(--primary)",
            color: "white",
            display: "block",
            padding: "5px 15px",
          }}
        >
          <Typography variant="string">{Comment}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
