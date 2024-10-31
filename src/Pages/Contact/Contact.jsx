import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import '../Nav/Nav.css'
import './Contact.css'
import map from '../Contact/assets/map.svg'
import facebook from '../Contact/assets/facebook.svg'
import x from '../Contact/assets/x.svg'
import instagram from '../Contact/assets/instagram.svg'
import youtube from '../Contact/assets/youtube.svg'

const Contact = ({DarkMode, toggleThem}) => {
 
  
  return (
<>  

<div className='bg-us'>
      <Nav toggleThem={toggleThem} DarkMode={DarkMode}/>
    <div className='container grid-contact'>
      <div>
      <h1>Contact Us</h1>
        <div>
          <h2>Email us</h2>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a href="#">Leave a message</a>
        </div>
        <div>
          <h2>Careers</h2>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <a href="#">Send an application</a>
        </div>
        </div>
        <div className='onlinebox'>
          <form action="">
          <h1>Get Online Consultation</h1> 
          <label htmlFor="text">Full Name</label>
          <input type="text" name="" id="fullname" />
          <label htmlFor="text">Email address</label>
          <input type="email" name="" id="emailaddress" /> 
          <label htmlFor="text">Specialist</label>
          <input type="text" name="" id="dropdownmenu" /> 
          <button>Make an appointment</button>
          </form>         
        </div>


      
    </div>     
</div>    
<div className='container grid-map'>
      <div className='map'>
      <img src={map} alt="" />
      </div>
  <div>
    <div>
    <h2>Bank Office 1</h2>
    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
    <p>(406) 555-0120</p>
    <p>Mon – Fri: 9:00 am – 22:00 am</p>
    <p>Sat – Sun: 9:00 am – 20:00 am</p>
    </div>
    <div>
        <h2>Bank Office 2</h2>
        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
        <p>(406) 544-0123</p>
        <p>Mon – Fri: 9:00 am – 22:00 am</p>
        <p>Sat – Sun: 9:00 am – 20:00 am</p>
    </div>
    <div className='metaicon'>
      <div className='iconbox'>
      <img src={facebook} alt="" />
      </div>
      <div className='iconbox'>
      <img src={x} alt="" />
      </div>
      <div className='iconbox'>
      <img src={instagram} alt="" />
      </div>
      <div className='iconbox'>
      <img src={youtube} alt="" />
      </div>
      
    </div>
  </div>
</div>  
    <Footer />    
</>  
  )
}
export default Contact