import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function PatientWrapperAuth({children}) {
  const nav = useNavigate();
  const type = localStorage.getItem("type");
  console.log("dd",type)
  async function testType() {
    if (type === undefined) {
      nav("/signIn");
    }

    if (type === "doctor") {
      nav("/doctor");
    }
  }
  useEffect(() => {
    console.log("dd",type)
      testType()
  }, []);
  return (
    <>
    {!(type==='doctor') ? ( <div>{children}</div>) : <p>loding...</p>}
    </>
  )
}
