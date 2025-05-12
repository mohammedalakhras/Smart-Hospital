import { useState } from 'react'
//import mui components
import {Box} from '@mui/material'
//import components 
import FilterList from "../../components/Patinet Screens/FindADoctor/FilterList"
import CardSection from '../../components/Patinet Screens/FindADoctor/CardSection'
//import css file 
import classes from './Profile.module.css'
export default function FindADoctor() {
  const [doctors , setDoctors ] = useState([]) ;
  return (
    <Box className={classes.container} textAlign='center'>
        <FilterList setDoctors={setDoctors}/>
        <CardSection doctors={doctors}/>
    </Box>
  )
}
