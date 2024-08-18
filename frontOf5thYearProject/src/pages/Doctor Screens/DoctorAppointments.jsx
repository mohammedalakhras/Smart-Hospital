import { useEffect, useState } from "react";
import DoctorAppointmentCard from "../../components/DoctorComponents/DoctorAppointmentCard";
import getAppointmentToDoctor from "../../functions/Appointments/getAppointmentToDoctor";
import { CircularProgress } from "@mui/material";

export default function DoctorAppointments() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAppointmentToDoctor().then((e) => {
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
   {data.code=="200" && <div> {data.data.map(e=><DoctorAppointmentCard key={e.id} data={e}/>)}  </div>
   
   }
   {data.code!="200" &&   <div>Error</div>}
    </div>
  );
}
