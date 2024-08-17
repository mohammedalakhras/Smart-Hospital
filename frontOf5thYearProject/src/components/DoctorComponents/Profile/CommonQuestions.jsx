import { useEffect, useState } from "react";
import QuestionComponent from "./QuestionComponent";
import st from "./MyQuestions.module.css";
import { Link } from "react-router-dom";
import {Box , Chip} from '@mui/material'
export default function CommonQuestions() {
  const [dataToShow, setDataToShow] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/qustion/famus", {
      method: "Get",
      header: {
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setDataToShow(data.qustions));
  }, []);
  return (
    <div className={st.container}>
      <div className={st.content}>
        <h2 className={st.head}>الأسئلة الشائعة</h2>

        <div className={st.queses}>
          {dataToShow.length > 0 ? dataToShow.map((k, i) => {
            return (
              <div key={i} className={st.ques}>
                <Link to={`/doctor/question_details/${k.id}`}>
                  <QuestionComponent data={k} />{" "}
                </Link>
              </div>
            );
          }) : <NoQuestion />}
        </div>
      </div>
    </div>
  );
}

function NoQuestion(){
  return (
    <Box sx={{marginRight : '10%'}}>
          <Chip
            color="error"
            label="لا يوجد أسئلة بعد"
          />
        </Box>
  )
}