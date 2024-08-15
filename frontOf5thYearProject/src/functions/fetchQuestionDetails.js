export default async function fetchQuestionDetails({params}){
    console.log('from fetch Question Details')
    const token =await localStorage['token'];
    const type =localStorage['type'];
    let ob ;
    const config = {method:'Get',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }}
    try{
        if(type === 'doctor')
        await fetch(`http://127.0.0.1:8000/api/qustion/doctor/${params.id}`,config).then(response => {return response.json()}).then( data => {ob = data}).catch(error=>{console.error(error);alert(error)});
        else
        await fetch(`http://127.0.0.1:8000/api/qustions/${params.id}`,config).then(response => {return response.json()}).then( data => {ob = data}).catch(error=>{console.error(error);alert(error)});
    }catch{
        console.log('Error fetching question details')
        return null;
    }
    console.log(ob.data)
    // ob.sort((a, b) => {
    //     const timeA = new Date(`${a.date}T${a.time}`);
    //     const timeB = new Date(`${b.date}T${b.time}`);
    //     return timeA - timeB;
    //   });
    return ob.data;
}