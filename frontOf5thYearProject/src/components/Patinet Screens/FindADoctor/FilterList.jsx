import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//import mui components
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
//import functions
import filteringDoctor from "../../../functions/filteringDoctor";

// eslint-disable-next-line react/prop-types
export default function FilterList({setDoctors}) {
  const {countryData , specializationData} = useLoaderData();
  const [specialization, setSpecialization] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    async function fetchdatafromServer(){
      const data = await filteringDoctor(specialization , country);
      setDoctors(data);
    }
    fetchdatafromServer();
  } , [country, specialization])
  function handleSpecializationChange(e) {
    setSpecialization(e.target.value);
  }
  function handleCountryChange(e) {
    setCountry(e.target.value);
  }
  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled" sx={{ direction: "rtl" }}>
            <InputLabel id="demo-simple-select-label" 
            sx={{
              position: "absolute",
              right: "45px",
              textAlign: "right",
            }}
            >الأختاص</InputLabel>
            <Select
              label="الأختاص"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={specialization}
              onChange={handleSpecializationChange}
            >
              {
               specializationData.data.length > 0 &&  specializationData.data.map((i)=>{return (<MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>)})
              }
            </Select>
               {
                specializationData.data.length === 0 && (
                  <Typography variant="subtitle1" color="red">لا يوجد أختاصاصات</Typography>
                )
              } 
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="filled">
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                position: "absolute",
                right: "45px",
                textAlign: "right",
              }}
            >
              المحافظة
            </InputLabel>
            <Select
              label="المحافظة"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              onChange={handleCountryChange}
            >
              {
              countryData.data.length > 0 &&   countryData.data.map((i)=>{return (<MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>)})
              }
            </Select>
            {
                countryData.data.length === 0 && (
                  <Typography variant="subtitle1" color="red">لا يوجد محافظات</Typography>
                )
              } 
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
