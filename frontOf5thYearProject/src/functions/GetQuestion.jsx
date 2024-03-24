import axios from "axios"

 export default async function GetQuestion(token) {
 
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
          .then(res=>res)
          .catch((error) => {
            if (error.response) {
              return error.response
            }
            console.log('error',error);
          });
       
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized. Please check your token.");
          window.localStorage.clear("token");
          window.location.pathname = "/signin";
        } else {
          console.log("Error fetching data:", error.message);
          window.localStorage.clear("token");
          window.location.pathname = "signin";
        }
      }
    }
    

    