export async function getSpecializationAndCounters(){
    const specializationData =await fetch('http://127.0.0.1:8000/api/specilazations').then((data) => { return data.json()});
    
    const countryData =await fetch('http://127.0.0.1:8000/api/cites').then((data) => { return data.json()});
    
  
    return { specializationData: specializationData , countryData: countryData}
}