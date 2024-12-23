import contactphone from '../Page6/assets/contactphone.svg'
import contactbubble from '../Page6/assets/contactbubble.svg'
import './Page6.css'
import React from 'react';
import AccordionTogg from '../../components/AccordionTogg';
import { NavLink } from 'react-router-dom';



function Page6() {
    

    return (
<div className="pg6-bg">
   <div className="accordion-grid container">
    <div className="faq">
        <div>
            <h2 id="faq-h2">Any Questions? Check out the FAQs</h2>
        </div>
        <div>
            <p id="faq-txt">Still have unanswered questions and need to get in touch?</p>
        </div>
    </div>
    <div className="contact-us">
        <div className="contactbox" id="contactbox1">
            <img src={contactphone} alt="contact phone"/>
            <p>Still have questions?</p>
            <NavLink className='alink1' to='/contact'>Contact us 
                <i className="fa-solid fa-arrow-right"></i> 
            </NavLink>
        </div>
        <div className="contactbox" id="contactbox2">
            <img src={contactbubble} alt="contact bubble"/>
            <p>Don't like phone calls?</p>
            <NavLink className="alink2" to='/contact'>Contact us 
                <i className="fa-solid fa-arrow-right"></i> 
            </NavLink>
        </div>
    </div>
        <AccordionTogg />
    <div className="btn-contact">
        <button className="btn-contact-us">
            <span>Contact us now</span>
        </button>
    </div>
</div>
</div>
    )
}

export default Page6