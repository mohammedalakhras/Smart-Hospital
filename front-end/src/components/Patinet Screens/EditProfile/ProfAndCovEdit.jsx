import stProf from "./ProfAndCovEdit.module.css";
import { Box, Grid, Button } from "@mui/material/";
import patient from "../../../assets/image/Profile/patient.png";
import cover from "../../../assets/image/Profile/cover.svg";

import { useState } from "react";
export default function ProfAndCovEdit(props) {
  // const [data, setdata] = useState({
  //   name: "اغيد علوان",
  //   email: "MabdMAk@gmail.com",
  //   bdate: "10/6/2001",
  //   phone: "+963999999999",
  //   dis: "None",
  // });

  return (
    <></>
    // <div>
    //   {" "}
    //   <div className={stProf.container}>
    //     <div className={stProf.cover} style={{backgroundImage: `url(${props.data.cover==null?cover:props.data.cover})`}}></div>
    //     <Box sx={{ flexGrow: 1 }}>
    //       <Grid
    //         container
    //         spacing={2}
    //         justifyContent="center"
    //         alignItems="center"
    //       >
    //         <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
    //           <div
    //             className={stProf.ProfileImage}
    //             style={{  backgroundImage: `url(${props.data.profile==null?patient:props.data.profile})` }}
    //           ></div>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
    //           <div>
    //             <Box sx={{ flexGrow: 1, textAlign: "center" }}>
    //               <Grid container spacing={1}>
    //                 <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    //                   <h2 className={stProf.name}>{props.data.full_name}</h2>
    //                 </Grid>
    //               </Grid>
    //             </Box>
    //           </div>
    //         </Grid>
    //         <Grid
    //           item
    //           xs={12}
    //           sm={6}
    //           md={4}
    //           lg={4}
    //           xl={4}
    //           className={stProf.buttonContainer}
    //         ></Grid>
    //       </Grid>
    //     </Box>
    //   </div>
    // </div>
  );
}
