import { useEffect, useState } from "react";
import st from "./AddPostForHomePage.module.css";
import Textarea from "@mui/joy/Textarea";
import { Button, Grid, Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useContext } from "react";

import { MainContext } from "../../../pages/App";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import SendPost from "../../../functions/SendPost";
import getData from "../../../functions/getData";
import prof from "../../../assets/image/Profile/patient.png";

export default function AddPost() {
  const { IsMobileValue } = useContext(MainContext);
  const [IsMobile] = IsMobileValue;
  const [files, SetFiles] = useState([]);
  const [TextMessage, setTextMessage] = useState("");

  const [valid, setValid] = useState(null);

  const [avtr, setAvtr] = useState(null);
  const [res, setRes] = useState("");
  function handleUploadFile(e) {
    SetFiles(Array.from(e.target.files));
  }

  useEffect(() => {


    getData(window.localStorage.getItem("token"))
      .then((r) => {
        setAvtr(
          r.data.pation.profile == null ? (
            <Avatar src={prof} />
          ) : (
            <Avatar src={r.data.pation.profile} />
          )
        );
      })
      .catch((er) => {
        setAvtr(<Avatar src={prof} />);
      });
  }, [files]);

  async function handleSubmit(e) {
    e.preventDefault();
    setValid(null);
    const resp = await SendPost(
      window.localStorage.getItem("token"),
      TextMessage,
      files
    );
    setRes(resp);
    if (resp.status == 200) setValid(true);
    else {
      setValid(false);
    }
    console.log("resp", resp);
  }

  return (
    <div className={st.container}>
      <Grid container>
        <Grid item xs={1}>
          {avtr}
        </Grid>
        <Grid item xs={11}>
          <Textarea
            placeholder="اطرح سؤالك"
            required
            sx={{
              width: IsMobile ? "70%" : "90%",
              height: "30px",
              marginRight: IsMobile ? "30px " : "0px",
              //   margin: "auto",
              background: "rgba(217, 217, 217, 0.15)",
              border: "1px solid #000000",
              borderRadius: "20px",
            }}
            value={TextMessage}
            onChange={(e) => {
              setTextMessage(e.target.value);
              console.log(TextMessage);
            }}
          />
        </Grid>
      </Grid>
      <hr />
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
            width: "15%",
            height: "30px",
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
