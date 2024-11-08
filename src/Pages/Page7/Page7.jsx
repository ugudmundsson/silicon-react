import { useState } from 'react'
import notification from '../Page7/assets/notification.svg'
import './Page7.css'

function Page7 () {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [message, setMessage] = useState('');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const handleChange = (e) => {
      setEmail(e.target.value);
      setIsValid(emailRegex.test(e.target.value));
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
          setMessage('Thank you for Subscribing!');
        } else {
          setMessage('Enter a valid email address.');
        }
    };

    return (

<form onSubmit={handleSubmit} noValidate>
<div className="subscribe pg7-bg container">
    <div id="notification">
        <img src={notification} alt="Icon notification"/>
    </div>
    <div id="subshead">
        <h4>Subscribe to our newsletter <span className="subnews">to stay informed about latest updates</span></h4>
    </div>
    <div className="emailform">
        <i className="fa-regular fa-envelope"></i>
        <div>
        <input className="input-sub" type="email" name="email" value={email} onChange={handleChange} required placeholder="Your Email"/>
        <span className='errorsub'style={{ color: isValid ? 'green' : 'red' }}>{message}</span>
        </div>
        <button className="btn-sub" type="submit">
            <span>Subscribe</span>
        </button>
    </div>
</div>
</form>

    )
}

export default Page7