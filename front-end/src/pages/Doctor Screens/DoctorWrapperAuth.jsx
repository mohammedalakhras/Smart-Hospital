import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
export default function DoctorWrapper({ children }) {
  const nav = useNavigate();
  const type = localStorage.getItem("type");
  console.log("dd",type)
  async function testType() {
    if (type === undefined) {
      nav("/signIn");
    }

    if (type === "pation") {
      nav("/");
    }
  }
  useEffect(() => {
    console.log("dd",type)
      testType()
  }, []);
  return <>{!(type === "pation") ? <div>{children}</div> : <p>loding...</p>}</>;
}
