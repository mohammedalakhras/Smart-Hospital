//import components
import DoctorCard from "./DoctorCard";
//import mui component
import { Box, Grid } from "@mui/material";
export default function CardSection() {
  return (
    <Box sx={{width:'90%' , margin:'50px auto'}}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DoctorCard />
        </Grid>
        <Grid item xs={6}>
          <DoctorCard />
        </Grid>
        <Grid item xs={6}>
          <DoctorCard />
        </Grid>
        <Grid item xs={6}>
          <DoctorCard />
        </Grid>
      </Grid>
    </Box>
  );
}
