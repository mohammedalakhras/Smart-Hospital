import { Box, Typography, Stack, Avatar , Chip } from "@mui/material";
import { useState, useEffect } from "react";
//import components
import CommentFeild from "../Patinet Screens/QuestionDetails/QuestionComments/CommentFeild";

import getResultChat from "../../functions/getResultChat";

//import icon
import botIcon from "../../assets/image/chatbotIcom.png";
export default function ChatBotCon() {
  const [res, setres] = useState('');
  const [loading, setloading] = useState(false);
  //--------------------------------------------------------
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const [counter , setCounter] = useState(0)
  useEffect(() => {
    setCounter((prev) =>{return prev + 1});
    setCommentValue("");
  }, [comments]);
  useEffect(()=>{
    if(res != ''){

      setComments((prev)=>{return [
        ...prev,
        { id: counter , comment: res, name: "bot", profile: "" },
      ]});
    }
  },[res])
  function changeHandler(event) {
    setCommentValue(event.target.value);
  }
  async function inputHandler() {
    const aidValue = commentValue
    setComments((prev) => {return [
      ...prev,
      { id: counter, comment: commentValue, name: undefined, profile: "" },
    ]});
    console.log(aidValue);
    await getResultChat(aidValue, setres, res, setloading);
    console.log(res)
    
  }
  return (
    <Box p={4} height="59vh" overflow="scroll" pb={0} mb={1}>
      {comments.length > 0 ? (
        comments.map((element , index) => {
          return (
            <Comment
              key={index}
              id={element.id}
              Comment={element.comment}
              name={element.name}
            />
          );
        })
      ) : (
        <Box width='100%' textAlign='center'>
          <Chip
            color="error"
            label="لا يوجد بيانات "
          />
        </Box>
      )}
      {loading ? <Typography m={2} textAlign='center'>typing...</Typography> : ''}
      <Box
        sx={{ position: "fixed", bottom: "0px", backgroundColor: "#fff" }}
        mb={2}
        width="50%"
        mr="-35px"
      >
        <CommentFeild
          inputHandler={inputHandler}
          changeHandler={changeHandler}
          commentValue={commentValue}
        />
      </Box>
    </Box>
  );
}
// eslint-disable-next-line react/prop-types
function Comment({ Comment, name}) {
  if (name === "bot") {
    return (
      <Stack direction="row" gap={2} sx={{ direction: "ltr" }}>
        <Avatar src={botIcon} />
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
    <Stack direction="row" gap={2}>
      <Avatar />
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
