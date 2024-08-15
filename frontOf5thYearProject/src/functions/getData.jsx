import axios from "axios";

export default async function getData(token) {
  const type = localStorage['type'];
  const configToken = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
  if(type === 'doctor'){
    const res = await axios
          .get("http://127.0.0.1:8000/api/doctor/information", configToken)
          .then((r) => {
            return r;
          })
          .catch((e) => {
            return e;
          });
          return res;
  }else{

    try {
      // Check token validity
      const auth = await axios.get(
        "http://127.0.0.1:8000/api/checkToken",
        configToken
      );
  
      let res;
      // Fetch patient information
      if (auth.status == 200) {
        res = await axios
          .get("http://127.0.0.1:8000/api/pation/information/", configToken)
          .then((r) => {
            return r;
          })
          .catch((e) => {
            return e;
          });
        return res;
      }else return null
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized. Please check your token.");
        window.localStorage.clear("token");
        window.location.pathname = "signup";
      } else {
        console.log("Error fetching data:", error.message);
        window.localStorage.clear("token");
        window.location.pathname = "signup";
      }
    }
  }
}
