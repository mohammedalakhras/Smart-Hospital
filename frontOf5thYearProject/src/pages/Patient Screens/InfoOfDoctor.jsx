//import mui component 
import { Typography , Box ,  Avatar , Stack, Button} from "@mui/material"
//import css file 
import classes from './Profile.module.css'

import image from '../../assets/image/aghiad.jpg'
export default function InfoOfDoctor() {
  return (
    <Box className={classes.container}>
        <Typography variant="h5" sx={{marginRight:"30px"}}>معلومات الطبيب :</Typography>
        <Box textAlign="center" bgcolor='white' borderRadius='20px' p={4} mt={2}>
            <Avatar  src={image} sx={{width:'150px' , height:'150px' , margin:'auto'}} />
            <Stack direction='row' >
                <Typography variant="subtitle1" color="#787878">اسم الطبيب :</Typography>
                <Typography variant="subtitle1" mr={3}>أحمدج</Typography>
            </Stack>
            <br />
            <Stack direction='row'>
                <Typography variant="subtitle1" color="#787878"> معلومات  :</Typography>
                <Typography variant="subtitle1" mr={6}>أحمدج</Typography>
            </Stack>
            <br />
            <Stack direction='row'>
                <Typography variant="subtitle1" color="#787878">السيرة الذاتية  :</Typography>
                <Typography variant="subtitle1" mr={2}>أحمدج</Typography>
            </Stack>
            <br />
            <Button sx={{width : '200px' , backgroundColor:'var(--secondary)' , color :"white"}}>طلب موعد</Button>
            <br />
        </Box>
    </Box>
  )
}
