import axios from 'axios';
export default async function getAppointmentToPatient() {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/get/pation/appointments',
      headers: { 
        Accept: 'application/json', 
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    
    return await axios.request(config)
    .then((response) => {
        
    return response
    })
    .catch((error) => {
     return error
    });
    
}
