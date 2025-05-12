import axios from 'axios';
export default async function UpdateAppointment(id,d_id,date,time) {

    let data = new FormData();
data.append('doctor_id', d_id);
data.append('date', date);
data.append('time', time);
data.append('_method', 'Put');


    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/appointments/${id}`,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`, 
        ...data.getHeadersؤي            

      },
      data : data
    };
    
    return await axios.request(config)
    .then((response) => {
        
    return response
    })
    .catch((error) => {
     return error
    });
    
}
