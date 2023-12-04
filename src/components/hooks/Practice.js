import React, { useState } from 'react'
import './practice.css';

const Practice = () => {
    const [btntext, setbtntext] = useState("Click me")
    const change =()=>
    {
        setbtntext("Fuck me")
        }
  return (
      <div>
          {/* <div className="pic" >{myImage}</div> */}
        <button className="btn" onClick={change} >{btntext}</button>
    </div>
  )
}
export default Practice;
