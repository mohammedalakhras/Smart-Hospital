import React, { useState } from 'react'
import getResultChat from '../functions/getResultChat';

export default function TESTCHAT() {


    const [msg,setmsg]=useState('');
    const [res,setres]=useState('answer here');
    const [loading,setloading]=useState(false);
  return (
    <div
    style={{margin:'20%',justifyContent:"center",display:'flex',textAlign:"center",flexWrap:'wrap', gap:'10px'}}>

<div style={{padding:'10px'}}>
        <input type='text' onChange={(e)=>{setmsg(e.target.value)}}/>
        
        <button type='button' onClick={(e)=>{getResultChat(msg,setres,res,setloading)}}>send</button>
        </div>
        <div style={{flexBasis: '100%'}}>
            {(!loading)?res:"Answering..."}
        </div>
        
        
        
    </div>

  )
}
