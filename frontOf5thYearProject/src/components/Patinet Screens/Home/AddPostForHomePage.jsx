import { useEffect, useState } from "react";
import st from "./AddPostForHomePage.module.css";
import Textarea from "@mui/joy/Textarea";
import { Button , Grid ,Avatar} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useContext } from "react";

import {MainContext} from '../../../pages/App'
export default function AddPost() {
    const {IsMobileValue } = useContext(MainContext);
    const [IsMobile] = IsMobileValue;
  const [files, SetFiles] = useState([]);

  function handleUploadFile(e) {
    SetFiles(Array.from(e.target.files));
  }

  useEffect(() => {
    console.log("Files:", files);
  }, [files]);

  return (
    <div className={st.container}>
    <Grid container >
        <Grid item xs={1}><Avatar /></Grid>
        <Grid item xs={11}>

      <Textarea
        placeholder="اطرح سؤالك"
        required
        sx={{
          width: IsMobile ? "70%" :"90%",
          height: "30px",
          marginRight : IsMobile ? "30px " :"0px" ,
        //   margin: "auto",
          background: "rgba(217, 217, 217, 0.15)",
          border: "1px solid #000000",
          borderRadius: "20px",
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
        >
          <p>إرسال</p>
        </Button>
      </div>
    </div>
  );
}
