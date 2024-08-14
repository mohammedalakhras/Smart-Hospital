import  { useState } from "react";
import Send from "../functions/getResultRDS.jsx";

// const fileToDataUri = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       resolve(event.target.result);
//     };
//     reader.readAsDataURL(file);
//   });

export default function TESTAPI() {
  const [data, setData] = useState([]);

  const [dataUri, setDataUri] = useState("");


  return (
    <div>
      <h1>TESTAPI</h1>
      <div>
        {data.map((ele, index) => (
          <div key={index}>
            <div>{ele.label}</div>
            {ele.confidences.map((x, subIndex) => (
              <div key={subIndex}>
                {x.label} {x.confidence}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <img width="200" height="200" src={dataUri} alt="avatar" />
        <input
          type="file"
          onChange={async (event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setDataUri(reader.result);
              };
              reader.readAsDataURL(file);

              const resultData = await Send(file,setData,data);
              setData(resultData);
            }
          }}
        />
      </div>
    </div>
  );

}
