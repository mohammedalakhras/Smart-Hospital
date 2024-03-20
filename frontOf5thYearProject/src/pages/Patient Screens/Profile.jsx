import axios from "axios";
import AddPost from "../../components/Patinet Screens/Profile/AddPost";
import CommonQuestions from "../../components/Patinet Screens/Profile/CommonQuestions";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import ProfileAndCover from "../../components/Patinet Screens/Profile/ProfileAndCover";
import st from "./Profile.module.css";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
export default function Profile() {
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(true);
  const [r, setR] = useState({});

  useEffect(() => {
    if (window.localStorage.getItem("token") == null) {
      window.location.pathname = "/signup";
    } else {
      try {
        getData(window.localStorage.getItem("token"));
      } catch (err) {
        console.log("request", err);
      }
    }
  }, []);

 
  async function getData(token) {
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
      const res = await axios.get(
        "http://127.0.0.1:8000/api/pation/information/",
        configToken
      );

      // Process patient data (e.g., setData(patientData))
      setLoading(false);
      setData(res.data.pation);
      console.log("Data retrieved successfully:", res.data);
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

  if (isLoading) {
    return <div className={st.loading}><CircularProgress /></div>;
  }

  return (
    <div className={st.container}>
      <ProfileAndCover data={data} />
      <AddPost />
      <MyQuestions />
      <CommonQuestions />
    </div>
  );
}
