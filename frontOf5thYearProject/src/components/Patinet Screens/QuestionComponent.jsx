import React from "react";
import st from "./Question.module.css";
export default function QuestionComponent(props) {
  return (
    <div className={st.mainBody}>
      <div className={st.ansNum}>
        <p>
          {" "}
          {props.data.has_replys == undefined
            ? 0
            : props.data.has_replys.length}{" "}
        </p>{" "}
        {/*تحتاج لتعديل لوضع عدد الاجابات بدل المشاهدات */}
        <p> اجابات </p>
      </div>

      <div>
        <div className={st.ques}>
          <h2>{props.data.message}</h2>
          {/* <div className={st.tags}>
            {props.data.tags.map((k, i) => {
              return (
                <div key={i} className={st.tag}>
                  {k}
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}
