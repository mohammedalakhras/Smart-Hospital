import React, { useEffect, useState } from "react";
import st from "./MyQuestions.module.css";
import QuestionComponent from "../QuestionComponent";
import GetQuestion from "../../../functions/GetQuestion";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export default function MyQuestions() {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);
 const [datares,setdatares]=useState(<></>);
 const [counter,setcounter]=useState(0);
  useEffect( () => {
   const res = getData(window.localStorage.getItem("token"))
  //  .then(
  //     (data) => {
        
  //       setData(data.data.data);

  //       setLoading(false);
  //     }
  //   );
   


    if(data && Array.isArray(data)){
      console.log(data);
      setdatares( data.map((k, i) => {
       return (
         <div key={i} className={st.ques}>
           <QuestionComponent data={k} />{" "}
         </div>
       );
     }))
   }




  }, []);

  async function getData(token){
  
  return GetQuestion(token)
}

  if (isLoading ) {
    return (
      <div className={st.loading}>
        <CircularProgress />
      </div>
    );
  }
  
  
  return (
    <div className={st.container}>
      <div className={st.content}>
        <h2 className={st.head}>الأسئلة الخاصة بك</h2>
        <div className={st.queses}>
          
          {datares}
        </div>
      </div>
    </div>
  );
}
