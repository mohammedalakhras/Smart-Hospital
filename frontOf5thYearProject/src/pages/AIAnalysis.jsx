import { Box  , Grid } from "@mui/material";

//import Component
import DragAndDropField from "../components/AiComponents/DragAndDropField";
import ResultField from "../components/AiComponents/ResultField";
import { useState } from "react";


export default function AIAnalysis() {
    const [ result , setResult ] = useState();
    const style = {
        backgroundColor : '#fff',
        borderRadius : 3 , 
        p:3, 
        height : '78vh'
    }
    return (
    <Box m={6} mt={7} mr={8}>
      <Grid container gap={4} >
        <Grid item xs={5.5} sx={style} ><DragAndDropField  /></Grid>
        <Grid item xs={5.5} sx={style} ><ResultField /></Grid>
      </Grid>
    </Box>
  );
}
