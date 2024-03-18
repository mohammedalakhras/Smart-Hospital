import React from "react";
import st from "./Question.module.css";
export default function QuestionComponent(props) {

  return (
    <div className={st.mainBody}>
      <div className={st.ansNum}>
        <p> {props.data.numAns} </p>
        <p> اجابات </p>
        
      </div>

      <div>
        <div className={st.ques}>
          <h2>{props.data.ques}</h2>
          <div className={st.tags}>
            {props.data.tags.map((k,i)=>{
            return   <div key={i} className={st.tag}>
                {k}
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
