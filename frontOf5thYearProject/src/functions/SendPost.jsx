import axios from "axios";

export default async function SendPost(token, mess, files) {
  try {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    };

    // const bodyParameters = {
    //   key: "value",
    // };

    let formData = new FormData();
    formData.append("message", mess);
    files.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    console.log(formData);

    await axios.get("http://127.0.0.1:8000/api/checkToken", configToken);

    const res = await axios
      .post("http://127.0.0.1:8000/api/qustions", formData, configToken)
      .catch((error) => {
        if (error.response) {
          return error.response
        }
        console.log('error',error);
      });
    
    return res;
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
