import contactphone from '../Page6/assets/contactphone.svg'
import contactbubble from '../Page6/assets/contactbubble.svg'
import './Page6.css'


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
            <a href="#">Contact us 
                <i className="fa-solid fa-arrow-right"></i> 
            </a>
        </div>
        <div className="contactbox" id="contactbox2">
            <img src={contactbubble} alt="contact bubble"/>
            <p>Don't like phone calls?</p>
            <a className="alink" href="#">Contact us 
                <i className="fa-solid fa-arrow-right"></i> 
            </a>
        </div>
    </div>
    <div className="dropdown" id="dropdown">
        <button className="accordion">Is any of my personal information stored in the App?</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        
        <button className="accordion">What formats can i donwload my transaction history in?</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        
        <button className="accordion">Can i schedule future transfers?</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        
        <button className="accordion">Can i use Banking App services?</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        
        <button className="accordion">Can i create my own password that is easy for me to remember?</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        
        <button className="accordion">What happens if i forget or lose my password</button>
        <div className="panel">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
    </div>
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