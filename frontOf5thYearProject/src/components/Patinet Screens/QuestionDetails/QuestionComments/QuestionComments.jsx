import { Typography, Box, Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
//import component 
import CommentFeild from "./CommentFeild";
export default function QuestionComments() {
  const [commentValue , setCommentValue] = useState('')
  const [comments, setComments] = useState([
    { id: 1, comment: "hello bro how are you", name: undefined, profile: "" },
    { id: 2, comment: "hi", name: "أحمد", profile: "" },
    { id: 3, comment: "yes iam here", name: "براء", profile: "" },
    { id: 4, comment: "no i am not here", name: "أحمد", profile: "" },
  ]);
  useEffect(()=>{
    setCommentValue('');
  },[comments])
  function changeHandler(event){
      setCommentValue(event.target.value);
  }
  function inputHandler(){
    setComments([...comments , { id: commentValue, comment:commentValue , name: undefined, profile: "" }])
    
  }
  return (
    <Box p={4}>
      {comments.map((element) => {
        return (
          <Comment
            key={element.id}
            Comment={element.comment}
            CommenterName={element.name}
            profile={element.profile}
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
