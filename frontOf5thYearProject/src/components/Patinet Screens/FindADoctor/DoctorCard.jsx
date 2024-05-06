import { useContext } from 'react';
import {MainContext} from '../../../pages/App'
//import mui component
import {Stack , Button , Avatar , Typography, Box} from '@mui/material';

export default function DoctorCard() {
  const {IsMobileValue } = useContext(MainContext)
  const [isMobile ]= IsMobileValue
  return (
    <Box sx={{bgcolor:'#ddd' , borderRadius:'10px' , p:'10px' , width:'100%'}}>
      <Stack direction='row' justifyContent='center'textAlign='center' gap={2}>
        <Avatar sx={{width:'30px' , height:'30px' , display:'inline-block'}} />
        <Typography variant='subtitle1' sx={{color: '#787878'}}>
          سامر العلي
        </Typography>
        {!isMobile && <Button sx={{bgcolor:'var(--secondary)' , color:'white' , height:'30px'}}> عرض </Button>}
      </Stack>
      {isMobile && <Button sx={{bgcolor:'var(--secondary)' , color:'white' , height:'30px'}}> عرض </Button>}   
    </Box>
  )
}
