import {Box, Typography} from '@mui/material'
import classes from '../../components/Patinet Screens/QuestionDetails/QuestionDetails.module.css'
import QuestionComments from '../../components/Patinet Screens/QuestionDetails/QuestionComments/QuestionComments'
import image from '../../assets/image/contact.png'
export default function QuestionDetails() {
  return (
    <Box className={classes.container}>
        <Box >
            <Typography >
                هنا السؤال 
            </Typography>
        </Box>
        <Box>
            <img src={image} alt="" />
        </Box> 
        <Box>
            <QuestionComments />
        </Box>
    </Box>
  )
}
