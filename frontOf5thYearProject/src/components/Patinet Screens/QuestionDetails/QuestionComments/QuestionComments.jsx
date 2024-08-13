import { Typography, Box, Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
//import component 
import CommentFeild from "./CommentFeild";

//import for redux 
import { useSelector } from "react-redux";

export default function QuestionComments() {
  const id = useSelector(state=>state.informaionOfUser.id)
  const params = useParams()
  const data = useLoaderData()
  const [commentValue , setCommentValue] = useState('')
  const [comments, setComments] = useState(data.has_replys);
  const da = new Date();
  const [token , setToken] = useState('');
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[])
  useEffect(()=>{
    async function sendComment(){
      const formData = new FormData();
      formData.append('reply', commentValue);
      await fetch(`http://127.0.0.1:8000/api/add/reply/${params.id}`,{
        method:"POST",
        headers: {
          Authorization: `Bearer ${token}`,
      },
        body:formData
      })
      setCommentValue('');
    }
    if(commentValue)
    sendComment();
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
      {id === data.pation_id &&
    <CommentFeild inputHandler={inputHandler} changeHandler={changeHandler} commentValue={commentValue}/>
      }</Box>
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
