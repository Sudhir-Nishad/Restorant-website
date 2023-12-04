import React, { useState } from 'react'
import './Restorant.css';
import MenuCard from './MenuCard';
import Menu from './menuApi';
const Restorant=()=>{
    const [menuData,setMenuData]=useState(Menu);
    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        }
        );
        setMenuData(updatedList); 
    }
    return (
    <>
    <div className='main'>
    <div className='mirch'><img src="c.png" alt="pic not loaded" className="redchilli" /></div>
   
    <div className="resname">Welcome to Chilli Restaurant
    <img src="restaurant-symbol-clipart-6-removebg-preview.png" alt="" className="resto" />
    
    </div>
     <div className='button'>
        <button className="btn"  onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className="btn" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn" onClick={()=>filterItem("dinner")} >Evening </button>
        <button className="btn" onClick={()=>filterItem("evening")} >Dinner</button>
        <button className="btn" onClick={()=>setMenuData(Menu)}>All</button>
    </div>
    </div>
    
    <MenuCard menuData={menuData}/>
   
    </>
  )
}
export default Restorant;
