export default async function filteringDoctor( specialization,country ){
    let token = localStorage['token']
    const data = await fetch(`http://127.0.0.1:8000/api/pation/search/doctor?${specialization !== "" ? ("spec_id="+specialization) : ""}${specialization!== "" ? (country !=="" ? ("&city_id="+country) : "") :   (country !=="" ? ("city_id="+country) : "") }`, {
    method: "POST",    
    headers:{
            Authorization : `Bearer ${token}`
        }
    }).then((data)=>{return data.json()});
    return data
}