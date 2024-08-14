
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function PatientWrapperAuth({children}) {
    const nav = useNavigate();
    const type = localStorage.getItem('type');
    if(type==='doctor') nav('/doctor')
        console.log(!(type==='doctor'))
  return (
    <>
    {!(type==='doctor') ? ( <div>{children}</div>) : <p>loding...</p>}
    </>
  )
}
