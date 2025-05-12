import { Box  , Grid } from "@mui/material";

//import Component
import DragAndDropField from "../../components/BrainTumor/DragAndDropField";
import ResultField from "../../components/BrainTumor/ResultField";
import { useState , useEffect } from "react";


export default function BrainTumor() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(data.length > 0)
    console.log(data[0].confidences)
  },[data])

    const style = {
        backgroundColor : '#fff',
        borderRadius : 3 , 
        p:3, 
        height : '78vh'
    }
    return (
    <Box m={6} mt={7} mr={8}>
      <Grid container gap={4} >
        <Grid item xs={5.5} sx={style} ><DragAndDropField data={data} setData={setData} /></Grid>
        <Grid item xs={5.5} sx={style} ><ResultField  data={data}/></Grid>
      </Grid>
    </Box>
  );
}
