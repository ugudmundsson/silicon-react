import React, { useState } from 'react';
import './Accordion.css'

const Accordion = ({ title, content }) => {
 
  
  const [isActive, setIsActive] = useState(false);
  
  return ( 
  <div className="accordion">
    <div className="accordion-item">
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div><i className={isActive ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i></div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  </div>
  )
}
export default Accordion

