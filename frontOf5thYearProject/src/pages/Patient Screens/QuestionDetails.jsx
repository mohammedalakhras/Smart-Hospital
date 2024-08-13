import {Box, Typography} from '@mui/material'
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
            <img src={data.images[0]} alt="" />
        </Box> 
        <Box>
            <QuestionComments />
        </Box>
    </Box>
  )
}
