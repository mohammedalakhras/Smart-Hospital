import axios from "axios";
export default async function getQuestionForDotoctorHasReply() {
  const token = localStorage["token"];
  const configToken = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
  const res =await axios.get("http://127.0.0.1:8000/api/doctor/qustions/", configToken).then((r) => {
      return r
    })
    .catch((e) => {
      return {data : e};
    });
    
  return res;
}
