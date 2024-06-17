/* eslint-disable react/prop-types */
//import components
import DoctorCard from "./DoctorCard";
//import mui component
import { Box, Grid, Typography } from "@mui/material";
export default function CardSection({doctors}) {
  if(doctors == "" ){
    return <Typography variant="subtitle1" fontSize="20px" fontWeight="bold">there are no doctors</Typography>
  }
  return (
    <Box sx={{width:'90%' , margin:'50px auto'}}>
      <Grid container spacing={3}>
      {
      doctors.data.length >= 0 && doctors.data.map((element)=>{
        return (<Grid key={element.id} item xs={6}>
          <DoctorCard name={element.full_name} id={element.id} profile={element.profile} info={element.info} />
        </Grid>)
      })
      }
      </Grid>
      {
        doctors.data.length === 0 && <Typography variant="subtitle1" fontSize="20px" fontWeight="bold">there are no doctors</Typography>
      }
    </Box>
  );
}
