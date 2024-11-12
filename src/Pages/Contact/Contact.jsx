import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import '../Nav/Nav.css'
import './Contact.css'
import map from '../Contact/assets/map.svg'
import facebook from '../Contact/assets/facebook.svg'
import x from '../Contact/assets/x.svg'
import instagram from '../Contact/assets/instagram.svg'
import youtube from '../Contact/assets/youtube.svg'
import mail from '../Contact/assets/mail.svg'
import peoplegroup from '../Contact/assets/peoplegroup.svg'
import gps from '../Contact/assets/gpsdot.svg'
import phone from '../Contact/assets/phonecall.svg'
import time from '../Contact/assets/time-five.svg'
import { Form } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import { useState } from 'react'

const Contact = () => {

  const [formData,setFormData] = useState({ fullName: '', email: '', specialist: '' })
  const [errors,setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => {
    const {name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
    }else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
          newErrors[field] = `The ${field} field is required.`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
     setSubmitted(true)
     setFormData({ fullName: '', email: '', specialist: '' })
    }
    
  }


  if (submitted) { 
    return (
    <div>

    </div>
    )
  }

  return (
<>  

<div className='bg-us'>
      
    <div className='container grid-contact'>
      <div className='breadcrumb-grid'>
      <Breadcrumb />
      </div>
        <div className='contactus'>
        <h1>Contact Us</h1>
        </div>
        <div className='flexemail'>
        <div className='email-us'>
          <div className='contactmail'>
            <img src={mail} alt="" />
          </div>
          <div className='mailbox'>
          <h2>Email us</h2>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a className='aflex' href="#">Leave a message
          <i className="fa-solid fa-arrow-right"></i>
          </a>
          </div>
        </div>
        <div className='email-us'>
          <div className='contactmail'>
            <img src={peoplegroup} alt="" />
          </div>
          <div className='mailbox'>
          <h2>Careers</h2>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a className='aflex' href="#">Send an application
          <i className="fa-solid fa-arrow-right"></i>
          </a>
          </div>
        </div>
        </div>
        <div className='onlinebox'>
           
           <form noValidate className='form' onSubmit={handleSubmit}>
            <div className='headline'>
                <h1>Get Online Consultation</h1>
                <p>Fill out this form to get in touch with us</p>
            </div>
            <div>
                <label className='onlinelabel'>
                  Full Name
                <input className='form-group' type="text" value={formData.name} onChange={handleChange} required name='fullName' placeholder='Please enter your full name'/>
                <span className='spanerror'>{errors.name && errors.name}</span>
                </label>
                
            </div>
            <div>
                <label className='onlinelabel'>
                  Email addresss
                <input className='form-group' type="email" value={formData.email} onChange={handleChange} required name='email'  placeholder='Enter your email address'/>
                <span className='spanerror'>{errors.email && errors.email}</span>
                </label>
            </div>
            <div>
                <label className='onlinelabel'>
                  Specialist
                    <select className='form-group' value={formData.select} onChange={handleChange} name="specialist" id="onlineselect">
                    <option value="">Select your contact person</option>
                    <option value="Max">Max - Inside financial specialist</option>
                    <option value="Tobias">Tobias - Accounts receivable financial specialist</option>
                    <option value="Uffe">Uffe - Credit specialist</option>
                    <option value="Emil">Emil - Accounting specialist</option>
                    </select>
                    <span className='spanerror'>{errors.select && errors.select}</span>
                </label>
                
            </div>
            <div className='btn-online'>
            <button type='submit' className='btn-submit'>Make an appointment</button>
            </div>
            <div className='apibox'>
              <span>Thanks for reaching us! We'll get back to you soon.</span>
            </div>
           </form>
        </div>
    </div>     
</div>    
<div className='container grid-map'>
      <div className='map'>
      <img src={map} alt="" />
      </div>
  
    <div className='bankinfo textbanks' id='banktext1'>
        <h2>Bank Office 1</h2>
        <div className='bankicons'>
        <img src={gps} alt="" />
        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
        <div className='bankicons'>
        <img src={phone} alt="" />
        <p>(406) 555-0120</p>
        </div>
        <div className='bankicons'>
        <img src={time} alt="" />
          <div className='opentime'>
            <div className='flextime'>
                <span>Mon – Fri:</span>
                <p>9:00 am – 22:00 am</p>

              </div>
              <div className='flextime'>
              <span>Sat – Sun:</span> 
                <p>9:00 am – 20:00 am</p>
              </div>
          </div>
        </div>
    </div>


  
  <div className='bankinfo textbanks' id='banktext2'>
        <h2>Bank Office 2</h2>
        <div className='bankicons'>
        <img src={gps} alt="" />
        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
        </div>
        <div className='bankicons'>
        <img src={phone} alt="" />
        <p>(406) 544-0123</p>
        </div>
        <div className='bankicons'>
        <img src={time} alt="" />
          <div className='opentime'>
            <div className='flextime'>
            <span>Mon – Fri:</span>
                <p>9:00 am – 22:00 am</p>
              </div>
              <div className='flextime'>
              <span>Sat – Sun:</span>
                <p>9:00 am – 20:00 am</p>
              </div>
          </div>
        </div>
    </div>
  <div className='metaicon'>
      <div className='iconbox'>
      <img className='inverticon' src={facebook} alt="" />
      </div>
      <div className='iconbox'>
      <img className='inverticon' src={x} alt="" />
      </div>
      <div className='iconbox'>
      <img className='inverticon' src={instagram} alt="" />
      </div>
      <div className='iconbox'>
      <img className='inverticon' src={youtube} alt="" />
      </div>
    </div>
</div>  
    <Footer />    
</>  
  )
}
export default Contact