import { useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/material";
//import css module 
import classes from './CommentField.module.css';
// eslint-disable-next-line react/prop-types
export default function CommentFeild({ inputHandler , commentValue , changeHandler }) {
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter") {
        inputHandler()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [commentValue]);
  return (
    <Box className={classes.container}>
        <SendIcon className={classes.icon} onClick={inputHandler}/>
        
        <input value={commentValue} onChange={changeHandler} type="text" className={classes.inputField}/>
    </Box>
  );
}
