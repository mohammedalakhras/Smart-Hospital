/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {MainContext} from '../../../pages/App'
import { useNavigate } from 'react-router-dom';
//import mui component
import {Stack , Button , Avatar , Typography, Box} from '@mui/material';

//import function to set details of doctor to redux store
import { setDoctoer } from '../../../store/SelectedDoctorReducer';
//import dispatch function for redux 
import { useDispatch } from 'react-redux';
export default function DoctorCard({id , name , profile , info}) {
  const {IsMobileValue } = useContext(MainContext)
  const [isMobile ]= IsMobileValue
  const dispatch = useDispatch();
  const nav  = useNavigate();

  async function  handelClick(){
    await dispatch(setDoctoer({id:id , name:name , info:info , profile:profile}))
    nav('/doctoer_details')
  }
  return (
    <Box sx={{bgcolor:'#ddd' , borderRadius:'10px' , p:'10px' , width:'100%'}}>
      <Stack direction='row' justifyContent='center'textAlign='center' gap={2}>
        <Avatar src={profile} sx={{width:'30px' , height:'30px' , display:'inline-block'}} />
        <Typography variant='subtitle1' sx={{color: '#787878'}}>
          {name}
        </Typography>
        {!isMobile && <Button sx={{bgcolor:'var(--secondary)' , color:'white' , height:'30px'}} onClick={handelClick}> عرض </Button>}
      </Stack>
      {isMobile && <Button sx={{bgcolor:'var(--secondary)' , color:'white' , height:'30px'}} onClick={handelClick}> عرض </Button>}   
    </Box>
  )
}
