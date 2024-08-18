import CommonQuestions from "../../components/DoctorComponents/Profile/CommonQuestions";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import ProfileAndCover from "../../components/DoctorComponents/Profile/ProfileAndCover";
import st from "./Profile.module.css";
import { useEffect, useState } from "react";
import { CircularProgress, Button } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import getData from "../../functions/getData";
// import { useDispatch } from "react-redux";
// import { setInfo } from "../../store/informationOfUserReducer";
export default function Profile() {
  // const dispatch = useDispatch()
  const ques = useLoaderData();
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(true);
  // const [r, setR] = useState({});
const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("token") == null) {
      window.location.pathname = "/signup";
    } else {
      try {
        getData(window.localStorage.getItem("token")).then((res) => {
          // dispatch(setInfo(res.data.pation.id))
          console.log(res.data)
          setData(res.data.doctor);
          setLoading(false);
        });
      } catch (err) {
        console.log("request", err);
      }
    }
  }, []);

 
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
        <MyQuestions data={ques} />
        <CommonQuestions />

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
