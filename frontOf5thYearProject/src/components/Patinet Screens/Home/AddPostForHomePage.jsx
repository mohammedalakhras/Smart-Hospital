import React, { useEffect, useState } from "react";
import st from "./AddPostForHomePage.module.css";
import Textarea from "@mui/joy/Textarea";

import ImageIcon from "@mui/icons-material/Image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import SendPost from "../../../functions/SendPost";
import SpecSelect from "./SpecSelect";
import { Button } from "@mui/material";

export default function AddPost() {
  const [files, SetFiles] = useState([]);
  const [valid, setValid] = useState(null);
  const [TextMessage, setTextMessage] = useState("");
  const [res, setRes] = useState("");
  const [Spec, setSpec] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setValid(null);
    const resp = await SendPost(
      window.localStorage.getItem("token"),
      TextMessage,
      files,
      Spec
    );
    setRes(resp);
    if (resp.status == 200) setValid(true);
    else {
      setValid(false);
    }
    console.log("resp", resp);
  }

  function handleUploadFile(e) {
    SetFiles(Array.from(e.target.files));
    console.log(files);
  }

  const handleSpecSelect = (event) => {
    const {
      target: { value },
    } = event;
    setSpec(typeof value === "string" ? value.split(",") : value);
    console.log("Spec", Spec);
  };

  useEffect(() => {
    console.log("Files:", files);
  }, []);

  return (
    <div className={st.container}>
      <h2 className={st.head}>أضف سؤالك هنا</h2>

      <SpecSelect handle={handleSpecSelect} var={Spec} />

      <Textarea
        placeholder="اكتب المشكلة التي تعاني منها و تود الاستفسار عنها"
        required
        sx={{
          width: "90%",
          height: "200px",
          margin: "auto",
          background: "rgba(217, 217, 217, 0.15)",
          border: "1px solid #000000",
          borderRadius: "20px",
          marginTop: "20px",
        }}
        value={TextMessage}
        onChange={(e) => {
          setTextMessage(e.target.value);
          console.log(TextMessage);
        }}
      />
      <Button
        variant="text"
        component="label"
        sx={{
          color: "#B0B3B8",
          background: "#ffffff",
          border: "#ffffff 0px",
          marginTop: "30px",
          marginRight: "10%",
        }}
      >
        <div style={{}} className={st.uploadImage}>
          <ImageIcon sx={{ color: "rgb(68, 196, 132)" }} />
          إرفاق صورة
          <input
            type="file"
            hidden
            onChange={handleUploadFile}
            accept=".png,.jpg,.jpeg,.webp,.tiff,.gif"
            multiple={true}
          />
        </div>
      </Button>
      {files.length > 0 && (
        <div className={st.uploadedimagescontainer}>
          <h3>الصور المرفقة:</h3>
          {files.map((file, index) => (
            <div key={index}>
              <div className={st.item}>
                <ImageIcon sx={{ color: "rgb(68, 196, 132)" }} />
                <div style={{ wordWrap: "break-word" }}>{file.name}</div>{" "}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={st.button}>
        <Button
          sx={{
            background: "#F45D48",
            width: "20%",
            height: "50px",
            marginBottom: "3%",
          }}
          onClick={handleSubmit}
        >
          <p>إرسال</p>
        </Button>
      </div>
      <div className={st.msg}>
        {" "}
        {valid == true && valid != null ? (
          <p className={st.succ}>
            {<CheckCircleOutlineIcon />} تم الارسال بنجاح
          </p>
        ) : valid == false && valid != null ? (
          <p className={st.err}>
            {<ErrorIcon />}
            حدث خطأ ما يرجى المحاولة لاحقاً
            <br /> {res.data.msg}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
