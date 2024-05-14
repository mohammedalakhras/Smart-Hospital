export default async function filteringDoctor( specialization,country ){
    const data = await fetch(`http://127.0.0.1:8000/api/pation/search/doctor?${specialization !== "" ? ("spec_id="+specialization) : ""}${specialization!== "" ? (country !=="" ? ("&city_id="+country) : "") :   (country !=="" ? ("city_id="+country) : "") }`, {
    method: "POST",    
    headers:{
            Authorization : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzE1Njc0OTA5LCJleHAiOjE3Mjg2MzQ5MDksIm5iZiI6MTcxNTY3NDkwOSwianRpIjoiYmFpVU5pRm9vRk1DdlBnTCIsInN1YiI6IjIiLCJwcnYiOiI3Mjg5Mjk4OGE5MWNjNGM3NmEzNDE1YzA4MjUzN2U5NWJhOTkzMGVhIn0.pZ5ckl0SHLD9zG6zDTpSMbNauMGB5xcCR11y1SL6cAU`
        }
    }).then((data)=>{return data.json()});
    // console.log(data)
    return data
}