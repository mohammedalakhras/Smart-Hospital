import axios from "axios";
import getQuestionForDotoctorHasReply from "./getQuestionForDoctorHasReplay";
export default async function GetQuestion(token) {
  const type = localStorage['type'];
  if(type==="doctor"){
    console.log(type)
    return getQuestionForDotoctorHasReply();
  }
  try {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    await axios.get("http://127.0.0.1:8000/api/checkToken", configToken);

    return await axios
      .get("http://127.0.0.1:8000/api/qustions/", configToken)
      .then((res) => res)
      .catch((error) => {
        if (error.response) {
          return error.response;
        }
        // console.log('error',error);
      });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // console.log("Unauthorized. Please check your token.");
      window.localStorage.clear("token");
      window.location.pathname = "/signup";
    } else {
      // console.log("Error fetching data:", error.message);
      window.localStorage.clear("token");
      window.location.pathname = "signup";
    }
  }
}
