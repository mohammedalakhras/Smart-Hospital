import { Box , Typography , Stack , Avatar} from "@mui/material";
import {useState , useEffect} from 'react'
//import components 
import CommentFeild from "../Patinet Screens/QuestionDetails/QuestionComments/CommentFeild";

//import icon 
import botIcon from '../../assets/image/chatbotIcom.png'
export default function ChatBotCon() {
    const [commentValue , setCommentValue] = useState('')
    const [comments, setComments] = useState([
      { id: 2, comment: "hello bro how are you"},
      { id: 1, comment: "hi" },
      { id: 2, comment: "yes iam here" },
      { id: 1, comment: "no i am not here"},
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
    <Box p={4} height='59vh' overflow='scroll' pb={0} mb={1} >
        {comments.map((element) => {
        return (
          <Comment
            key={element.id}
            id={element.id}
            Comment={element.comment}
          />
        );
      })}
      <Box sx={{position:'fixed' , bottom:'0px' , backgroundColor:'#fff'}} mb={2} width='50%' mr='-35px'>
        <CommentFeild inputHandler={inputHandler} changeHandler={changeHandler} commentValue={commentValue}/>
      </Box>
    </Box>
  )
}
// eslint-disable-next-line react/prop-types
function Comment({ Comment  , id }) {
    if (id == 1) {
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
        <Avatar  />
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
  