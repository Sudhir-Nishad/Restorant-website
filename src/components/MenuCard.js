import React from 'react'
import './MenuCard.css'

const MenuCard =({menuData})=>{
  return (
    <div>
       
        {menuData.map((curElem)=>{
            return (
                <>
                <div key={curElem.id}>
                <div className="card-container" >
                    <div className="round">{curElem.id}
                        <h3 className="item-name">
                        {curElem.itemname}
                        </h3>
                        <div><img src={curElem.image} alt="pic can not load" className="item-pic"/></div>
                        
                    </div>
                </div>
                </div>
            </>
            );
        })}
        
        
    </div>
  );
}
export default MenuCard;
