import {Box, Typography , Grid} from '@mui/material'
import classes from '../../components/Patinet Screens/QuestionDetails/QuestionDetails.module.css'
import QuestionComments from '../../components/Patinet Screens/QuestionDetails/QuestionComments/QuestionComments'
// import image from '../../assets/image/contact.png'
import { useLoaderData } from 'react-router-dom'

export default function QuestionDetails() {
    const data = useLoaderData()
  return (
    <Box className={classes.container}>
        <Box >
            <Typography >
                {data.message}
            </Typography>
        </Box>
        <Box>
            {data.images.length ===0 && <div style={{backgroundColor:"rosybrown", textAlign:'center' , paddingTop:'40%' , width:'100%' , height:'400px'}}>{data.message}</div>}
            {data.images.length ===1 && <img src={data.images[0]} alt="" />}
            {data.images.length ===2 && <Grid container>
                <Grid item xs={6}><img src={data.images[0]} alt="" /></Grid>
                <Grid item xs={6}><img src={data.images[1]} alt="" /></Grid>
                </Grid>}
        </Box> 
        <Box>
            <QuestionComments />
        </Box>
    </Box>
  )
}
