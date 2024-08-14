import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function DoctorWrapper({children}) {
    const nav = useNavigate();
    const type = localStorage.getItem('type');
    if(type==='pation') nav('/')
  return (
    <>
    {!(type==='pation') ? ( <div>{children}</div>) : <p>loding...</p>}
    </>
  )
}
