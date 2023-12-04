import React,{useState} from 'react'
import './useState.css'
const initialData=prompt('enter no')

const UseState=()=> {
  // const initialData=10;
  const [myNum,setMyNum]=useState(initialData);
  return (
    <>
    
    <div className="number">{myNum}</div>
    <div className='btn'>
      <button className="button1" onClick={()=>setMyNum(parseFloat(myNum)+1)}>Increment</button>
      <button className="button2" onClick={()=>myNum>0?setMyNum(parseFloat(myNum)-1): setMyNum(0) }
      >Decrement</button>
      
    </div>
    </>
  )
}
export default UseState;
