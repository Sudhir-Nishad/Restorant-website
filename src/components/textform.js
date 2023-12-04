import React, {useState} from 'react'

export default function Textform() {
  const [myStyle,setmystyle]=useState({
    color:'black',
    backgroundColor:'white'
  
  })
  const [text,setText]=useState('')
  const handleUpClick=()=>
  {
    let newText=text.toUpperCase();
    console.log("uppercase was clicked "+text);
    setText(newText)
  }
  const[btntext,setbtntext]=useState("enable dark mode")
  
  const change=()=>{
    if(myStyle.color==='black'){
      setmystyle({
        color:'white',
        backgroundColor:'black'
      })
      setbtntext("enable light mode")
    }
    else {
      setmystyle({
        color:'black',
      backgroundColor:'white'
      })
      setbtntext("enable dark mode")
    }
  }
  

 
  const handleonchange=(event)=>{
    setText(event.target.value)
  }
  const handleClearClick=()=>
  {
    let newText='';
   
    setText(newText)
  }
  
  
  return (
    <>
    <div  style={myStyle}>
      <form>
        <h3> Enter text here</h3>
          <textarea className="textarea" value={text}  onChange={handleonchange} id='box'></textarea>
      </form>
      <button className="butt" onclick={handleUpClick}>Convert into Uppercase</button>
      <button className='butt' onclick={handleClearClick}>Clear text</button>
    </div>
    <div className="container" style={myStyle}>
      <h3 className="summary">Your summary</h3>
      <p className="summary">{text.split(" ").length}words and {text.length}characters</p>
      <h3>Preview</h3>
      <p className='preview' placeholder="sudhir">{text}</p>
      <button className='butt' onClick={change}>{btntext}</button>
      {/* <button className="copytext" onClick={copy}>Copy text</button> */}
      
      
    </div>
    </>
  )
}
