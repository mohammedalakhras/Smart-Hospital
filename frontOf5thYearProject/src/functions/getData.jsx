import axios from "axios";
import { useState } from "react";



export default async function getData(token) {
  try {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    // Check token validity
    await axios.get("http://127.0.0.1:8000/api/checkToken", configToken);

    // Fetch patient information
    return await axios.get(
      "http://127.0.0.1:8000/api/pation/information/",
      configToken
    ).then(
      r=>{return r}
    ).catch(e=>{
      return e
    });

    // Process patient data (e.g., setData(patientData))
    // setLoading(false);
    console.log("Data retrieved successfully:", res.data);
   
    return res
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized. Please check your token.");
      window.localStorage.clear("token");
      window.location.pathname = "signin";
    } else {
      console.log("Error fetching data:", error.message);
    }
  }
}
