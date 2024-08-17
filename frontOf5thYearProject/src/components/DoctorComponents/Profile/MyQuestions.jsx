import React, { useEffect, useState } from "react";
import st from "./MyQuestions.module.css";
import QuestionComponent from "../QuestionComponent";
import GetQuestion from "../../../functions/GetQuestion";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MyQuestions(props) {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [datares, setdatares] = useState("");
  const navigator=useNavigate('');

  useEffect(() => {
    if (props.data == null) {
      setdatares(<p>خطأ في تحميل البيانات </p>);
      setLoading(false);
    } else if (props.data.data.code == 200) {
      setLoading(false);

      setdatares(
        props.data.data.data.map((k, i) => {
          return (
            <div key={k.id} className={st.ques} onClick={()=>{navigator(`/question_details/${k.id}`)}} >
              <QuestionComponent data={k} />{" "}
            </div>
          );
        })
      );
    }
  }, []);

  async function getData(token) {
    return GetQuestion(token);
  }

  if (isLoading) {
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
        <div className={st.queses}>{datares ? datares : "لا يوجد أسئلة بعد"}</div>
      </div>
    </div>
  );
}
