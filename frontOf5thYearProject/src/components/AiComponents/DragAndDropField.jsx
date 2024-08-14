import { Box, Button, Stack, Typography } from "@mui/material";
import { useState  , useEffect} from "react";
import Send from '../../functions/getResultRDS.jsx'
const Innercomponents = ()=> <> أنقر للتحميل</>
// eslint-disable-next-line react/prop-types
export default function DragAndDropField({data , setData}) {
  const [fileToShow , setFileToShow] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(()=>{
    if(file)
    setFileToShow(URL.createObjectURL(file))
    else{setFileToShow()}
      console.log(fileToShow)
  },[file])




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  async function handleSubmit(e){
    e.preventDefault();
    console.log(file);
    const resultData =await Send(file,setData,data);
    setData(resultData);
  }
  function hundleDelete(){
    setFile(null)
    
  }
  return (
    <Box height="100%">
      <Typography variant="h5" m={3}>
        فحص شبكية العين
      </Typography>
      <form style={{width: "100%", height: "100%"}} onSubmit={handleSubmit}>
      <Box 
        sx={{
          width: "70%",
          height: "70%",
          margin: "auto",
          backgroundColor: "#F2F4F5",
          borderRadius: "20px",
          position: "relative",
          border:'black 3px solid'
        }}
      > 
      {file ? <img src={fileToShow} style={{borderRadius: "20px",}} alt='no image' width='100%' height='100%' ></img> :
       <Typography
      sx={{
        position: "absolute",
        top: "50%",
        right: "50%",
        textAlign: "center",
        transform: "translate(50%, -50%)",
      }}
    >
       <Innercomponents /> 
    </Typography>}
      
        
        
        <input
          type="file"
          style={{ width: "100%", height: "100%", opacity: 0 }}
          draggable
          onChange={handleFileChange}
        />
      </Box>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="space-between"
        width="50%"
        m="auto"
        mt={2}
      >
        <Button
          sx={{
            backgroundColor: "var(--secondary)",
            color: "white",
            width: "40%",
            borderRadius: "10px",
            '&:hover':{color:'black'}
          }}
          type="submit"
        >
          إرسال
        </Button>
        <Button
          sx={{
            backgroundColor: "#707070",
            color: "white",
            width: "40%",
            borderRadius: "10px",
            '&:hover':{color:'black'}
          }}
          onClick={hundleDelete}
        >
          حذف
        </Button>
        
      </Stack>
      </form>
    </Box>
  );
}
