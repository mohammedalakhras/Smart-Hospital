import AddPost from "../../components/Patinet Screens/Profile/AddPost";
import CommonQuestions from "../../components/Patinet Screens/Profile/CommonQuestions";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import ProfileAndCover from "../../components/Patinet Screens/Profile/ProfileAndCover";
import st from "./Profile.module.css";
import { useEffect, useState } from "react";
import { CircularProgress, Button } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import getData from "../../functions/getData";

export default function Profile() {
  const ques = useLoaderData();
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(true);
  const [r, setR] = useState({});
const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("token") == null) {
      window.location.pathname = "/signup";
    } else {
      try {
        getData(window.localStorage.getItem("token")).then((res) => {
          setData(res.data.pation);
          setLoading(false);
        });
      } catch (err) {
        console.log("request", err);
      }
    }
  }, []);

  // async function getData(token) {
  //   try {
  //     const configToken = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json",
  //       },
  //     };

  //     // Check token validity
  //     await axios.get("http://127.0.0.1:8000/api/checkToken", configToken);

  //     // Fetch patient information
  //     const res = await axios.get(
  //       "http://127.0.0.1:8000/api/pation/information/",
  //       configToken
  //     );

  //     // Process patient data (e.g., setData(patientData))
  //     setLoading(false);
  //     setData(res.data.pation);
  //     console.log("Data retrieved successfully:", res.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       console.log("Unauthorized. Please check your token.");
  //       window.localStorage.clear("token");
  //       window.location.pathname = "signin";
  //     } else {
  //       console.log("Error fetching data:", error.message);
  //     }
  //   }
  // }

  if (isLoading || data == {}) {
    return (
      <div className={st.loading}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className={st.container}>
        <ProfileAndCover data={data} />
        <AddPost />
        <MyQuestions data={ques} />
        {/* <CommonQuestions /> */}

        <div className={st.buttonContainer}>
        <Button className={st.button} style={{
          background: "#f45d48",
          bordeRadius: "5px",
        }}
        
        onClick={()=>{
          window.localStorage.clear('token')
          navigate('/signup')
        }}>

          <p> تسجيل الخروج</p>

        </Button>
        </div>
      </div>
    );
  }
}
