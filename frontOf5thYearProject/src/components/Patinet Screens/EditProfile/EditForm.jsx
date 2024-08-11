import React from "react";
import { Box, Grid, Button } from "@mui/material/";
import st from './EditForm.module.css'
export default function EditForm() {
  return (
    <div className={st.container}>
        <div className={st.form}>
      <Box sx={{ flexGrow: 1 }} >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          أكمل معلوماتك
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <div>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}></Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <div>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}></Box>
            </div>
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
}
