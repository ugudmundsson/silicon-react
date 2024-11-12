import '../components/Mobilenav.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";

const Mobilenav = ({handleClick}) => {
     


return ( 
   <>
   <div className="burger-nav">
        <div className='border-nav'>
        <Link className="house-nav" onClick={() => handleClick()} to='/'><AiOutlineHome className='house-nav'/>Homepage</Link>
        </div>
        <div className='border-nav'>
        <Link className="house-nav" onClick={() => handleClick()} to='/contact'><FaPhoneVolume  className='house-nav'/>Contact</Link>
        </div>
        <div className='border-nav'>
        <Link className="house-nav" onClick={() => handleClick()} to='/contact'><FaKey className='house-nav'/>
        <span>Sign in / up</span></Link>
        </div>
    </div>
 
  </>
  )
}
export default Mobilenav