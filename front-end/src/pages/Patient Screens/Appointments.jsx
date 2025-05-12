import { useEffect, useState } from "react";
import AppointmentCard from "../../components/Appointments/AppointmentCard";
import getAppointmentToPatient from "../../functions/Appointments/getAppointmentToPatient";
import { CircularProgress } from "@mui/material";

export default function Appointments() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  function reload() {
    setLoading(true)
    getAppointmentToPatient().then((e) => {
      console.log(e.data);
      
      setData(e.data);
      setLoading(false);
    });
    
  }
  useEffect(() => {
    getAppointmentToPatient().then((e) => {
      console.log(e.data);
      setData(e.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div  style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        opacity: 0.5,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div style={{ margin: "5%" }}>
   {data.code=="200" && <div> {(data.data.length==0)?<p style={{ textAlign: "center", color: "gray", fontSize: "18px", padding: "20px" }}>لا يوجد مواعيد حاليا</p>:data.data.map(e=><AppointmentCard key={e.id} data={e} reload={reload}/>)}  </div>
   
   }
   {data.code!="200" &&   <div>Error</div>}
    </div>
  );
}
