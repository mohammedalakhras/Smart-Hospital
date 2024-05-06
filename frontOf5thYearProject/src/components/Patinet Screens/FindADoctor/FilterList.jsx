import { useState } from "react";
import { useLoaderData } from "react-router-dom";
//import mui components
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";

export default function FilterList() {
  const {countryData , specializationData} = useLoaderData();
  console.log(countryData);
  console.log(specializationData)
  const [specialization, setSpecialization] = useState("");
  const [country, setCountry] = useState("");
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
                specializationData.data.map((i)=>{return (<MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>)})
              }
            </Select>
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
                countryData.data.map((i)=>{return (<MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>)})
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
