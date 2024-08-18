import axios from "axios";
export default async function DeleteByPatient(id) {

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/appointments/${id}`,
      
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      
    },
    
  };

  return await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
