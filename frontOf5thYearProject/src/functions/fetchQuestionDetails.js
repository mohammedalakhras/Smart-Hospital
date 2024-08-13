export default async function fetchQuestionDetails({params}){
    const token =await localStorage['token'];
    let ob ;
    await fetch(`http://127.0.0.1:8000/api/qustions/${params.id}`,{
        method:'Get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
}).then(response => {return response.json()}).then( data => {ob = data});
    console.log(ob.data)
    // ob.sort((a, b) => {
    //     const timeA = new Date(`${a.date}T${a.time}`);
    //     const timeB = new Date(`${b.date}T${b.time}`);
    //     return timeA - timeB;
    //   });
    return ob.data;
}